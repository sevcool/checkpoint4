const jwt = require("jsonwebtoken");
const models = require("../models");

class UserController {
  static browse = async (req, res) => {
    try {
      const [results] = await models.user.findAll();
      return res.status(200).json(results);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  };

  static read = (req, res) => {
    models.user
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = async (req, res) => {
    const { password, role } = req.body;
    const id = parseInt(req.params.id, 10);

    try {
      // TODO validations (length, format...)
      const validUser = await models.user.validate(
        { id, password, role },
        false
      );
      if (!validUser) {
        return res
          .status(400)
          .send("You must provide a valid password and/or role");
      }

      // Hash password
      const hashedPassword = await models.user.hashPassword(password);

      const [result] = await models.user.update({ id, hashedPassword, role });

      if (result.affectedRows === 0) {
        return res.sendStatus(404);
      }

      return res.sendStatus(204);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  };

  static register = async (req, res) => {
    const { email, password, role, username, lastname, firstname } = req.body;

    try {
      // TODO validations (length, format...)
      const validUser = await models.user.validate({ email, password, role });
      if (!validUser) {
        return res
          .status(400)
          .send("You must provide a valid email and password");
      }

      // Check if email already exists
      const emailAlreadyUsed = await models.user.emailAlreadyExists(email);
      if (emailAlreadyUsed) {
        return res.status(400).send("Email already Used");
      }

      // Hash password
      const hashpassword = await models.user.hashPassword(password);
      console.log(hashpassword);
      const [result] = await models.user.insert({
        email,
        hashpassword,
        role,
        username,
        firstname,
        lastname,
      });
      const [[userCreated]] = await models.user.find(result.insertId);

      delete userCreated.hashpassword;

      return res.status(201).json(userCreated);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  };

  static delete = (req, res) => {
    models.user
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static login = async (req, res) => {
    const { email, password } = req.body;

    // Check if the request provide an email and a password
    if (!email || !password) {
      return res
        .status(400)
        .send("You must provide a valid email and password");
    }

    try {
      // Find the user with his email
      const [[user]] = await models.user.findByEmail(email);
      if (!user) {
        return res.status(403).send("Invalid email or password");
      }

      // Verify the password
      const passwordIsValid = await models.user.verifyPassword(
        password,
        user.hashedPassword
      );
      if (!passwordIsValid) {
        return res.status(403).send("Invalid email or password");
      }

      // The user is authenticated
      // Create the token
      const token = jwt.sign(
        { id: user.id, role: user.role },
        process.env.ACCESS_JWT_SECRET,
        { expiresIn: "1h" }
      );

      // Put the token in a cookie
      return res
        .cookie("accessToken", token, {
          httpOnly: true,
          secure: process.env.ACCESS_JWT_SECURE === "true",
          maxAge: parseInt(process.env.ACCESS_JWT_COOKIE_MAXAGE, 10),
          sameSite: "strict",
        })
        .status(200)
        .json({ id: user.id, email: user.email, role: user.role });
    } catch (err) {
      return res.sendStatus(500);
    }
  };

  static authorization = (req, res, next) => {
    const token = req.cookies.accessToken;
    if (!token) {
      return res.sendStatus(401);
    }

    try {
      const decoded = jwt.verify(token, process.env.ACCESS_JWT_SECRET);
      req.userId = decoded.id;
      req.userRole = decoded.role;
      return next();
    } catch (err) {
      return res.sendStatus(500);
    }
  };

  static isAdmin = (req, res, next) => {
    if (req.userRole === "ADMIN") {
      return next();
    }

    return res.sendStatus(403);
  };

  static logout = (req, res) => {
    return res.clearCookie("accessToken").sendStatus(200);
  };
}

module.exports = UserController;
