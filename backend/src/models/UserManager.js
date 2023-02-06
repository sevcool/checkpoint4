/* eslint-disable class-methods-use-this */
const Joi = require("joi");
const argon2 = require("argon2");
const AbstractManager = require("./AbstractManager");

const roles = ["ADMIN", "USER"];

// password must contain almost one upper case, one lower case, a number and a special character contained in [!@#$%^&*], and have 8 to 32 characters
const schemaForCreation = Joi.object({
  password: Joi.string()
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/)
    .required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      // tlds: { allow: ["com", "net"] },
    })
    .required(),
  role: Joi.string().valid(...roles),
});

const schemaForUpdate = Joi.object({
  id: Joi.number().required(),
  password: Joi.string()
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/)
    .required(),
  role: Joi.string().valid(...roles),
});

class UserManager extends AbstractManager {
  static table = "user";

  insert(user) {
    if (user.role) {
      return this.connection.query(
        `insert into ${UserManager.table} (email, hashedPassword, role) values (?, ?, ?)`,
        [user.email, user.hashedPassword, user.role]
      );
    }
    return this.connection.query(
      `insert into ${UserManager.table} (email, hashedPassword) values (?, ?)`,
      [user.email, user.hashedPassword]
    );
  }

  update(user) {
    if (user.role) {
      return this.connection.query(
        `update ${UserManager.table} set hashedPassword = ?, role = ? where id = ?`,
        [user.hashedPassword, user.role, user.id]
      );
    }
    return this.connection.query(
      `update ${UserManager.table} set hashedPassword = ? where id = ?`,
      [user.hashedPassword, user.id]
    );
  }

  emailAlreadyExists(email) {
    return this.connection
      .query(`SELECT id FROM ${UserManager.table} WHERE email=?`, [email])
      .then(([results]) => results.length);
  }

  async validate(user, creation = true) {
    try {
      if (creation) {
        await schemaForCreation.validateAsync(user);
      } else {
        await schemaForUpdate.validateAsync(user);
      }
      return true;
    } catch (err) {
      return false;
    }
  }

  async hashPassword(password) {
    const hashedPassword = await argon2.hash(password);
    return hashedPassword;
  }

  async verifyPassword(password, hashedPassword) {
    const passwordIsValid = await argon2.verify(hashedPassword, password);
    return passwordIsValid;
  }

  find(id) {
    return this.connection.query(
      `select id, email, role from  ${this.table} where id = ?`,
      [id]
    );
  }

  findAll() {
    return this.connection.query(`select id, email, role from  ${this.table}`);
  }

  findByEmail(email) {
    return this.connection.query(
      `SELECT * FROM ${UserManager.table} WHERE email = ?`,
      [email]
    );
  }
}

module.exports = UserManager;
