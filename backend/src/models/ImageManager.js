const AbstractManager = require("./AbstractManager");

class ImageManager extends AbstractManager {
  static table = "image";

  insert(image) {
    return this.connection.query(
      `insert into ${ImageManager.table} (filename, description) values (?, ?)`,
      [image.filename, image.description]
    );
  }

  update(image) {
    return this.connection.query(
      `update ${ImageManager.table} set filename = ?, description = ?, creationDate = NOW() where id = ?`,
      [image.filename, image.description, image.id]
    );
  }
}

module.exports = ImageManager;
