const Joi = require("joi");
const AbstractManager = require("./AbstractManager");

const validationScheme = (data, isCreated) => {
  const parameter = isCreated ? "required" : "optional";

  return Joi.object({
    name: Joi.string().max(255).presence(parameter),
    description: Joi.string().max(255).presence(parameter),
  }).validate(data, { abortEarly: false }).error;
};

class PhotoManager extends AbstractManager {
  static table = "photo";

  findAll() {
    return this.connection.query(`SELECT * FROM ${this.table}`);
  }

  find(id) {
    return this.connection.query(`SELECT * FROM ${this.table} WHERE id =?`, [
      id,
    ]);
  }

  insert(photo) {
    return this.connection.query(
      `INSERT INTO ${PhotoManager.table} (name, description) VALUES (?, ?)`,
      [photo.name, photo.description]
    );
  }

  update(photo) {
    return this.connection.query(
      `UPDATE ${PhotoManager.table} SET name = ?, description = ?, WHERE id = ?`,
      [photo.name, photo.description, photo.productId, photo.id]
    );
  }

  // eslint-disable-next-line class-methods-use-this
  async validate(data, creationState = true) {
    try {
      await validationScheme(data, creationState);
      return true;
    } catch (err) {
      console.error(err.message);
      return false;
    }
  }
}

module.exports = PhotoManager;
