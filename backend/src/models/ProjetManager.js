const AbstractManager = require("./AbstractManager");

class ProjetManager extends AbstractManager {
  static table = "projet";

  findAll() {
    return this.connection.query(`SELECT * FROM ${this.table}`);
  }

  find(id) {
    return this.connection.query(`SELECT * FROM ${this.table} WHERE id =?`, [
      id,
    ]);
  }

  insert(projet) {
    return this.connection.query(
      `INSERT INTO ${ProjetManager.table} (title, image_id) VALUES (?, ?)`,
      [projet.title, projet.image_id]
    );
  }

  update(projet) {
    return this.connection.query(
      `UPDATE ${ProjetManager.table} SET title = ?, image_id = ?, WHERE id = ?`,
      [projet.title, projet.image_id, projet.id]
    );
  }
}

module.exports = ProjetManager;
