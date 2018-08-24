const db = require("../database/connection");
// console.log('here')
const Categories = {};

Categories.all = () => {
  return db.any('SELECT * FROM categories');
};

Categories.find = id => {
  return db.one("SELECT * FROM categories WHERE id = ${id} ORDER BY ID ASC", { id: id });
};

module.exports = Categories;
