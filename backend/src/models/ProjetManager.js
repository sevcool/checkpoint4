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
      `INSERT INTO ${ProjetManager.table} (name, description,) VALUES (?, ?)`,
      [projet.name, projet.description]
    );
  }

  update(projet) {
    return this.connection.query(
      `UPDATE ${ProjetManager.table} SET name = ?, description = ?, WHERE id = ?`,
      [projet.name, projet.description]
    );
  }
}

module.exports = ProjetManager;
