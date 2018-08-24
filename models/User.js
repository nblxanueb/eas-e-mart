const db = require('../database/connection');
// console.log('celeste was here')
const User = {};

User.findByUsername = username => {
  return db.one("SELECT * FROM users WHERE username = $1", [username]);
}

User.create = (newUser) =>
  db.one(
    `INSERT INTO users
    (username, password_digest, phone_number, email,
       location, first_name, last_name, latitude, longitude)
    VALUES
    ($<username>, $<password_digest>, $<phone_number>,
      $<email>, $<location>, $<first_name>, $<last_name>, $<latitude>, $<longitude>) RETURNING *`, newUser
  );

User.find = id => {
  return db.one("SELECT * FROM users WHERE id = ${id} ORDER BY ID ASC", { id: id });
};

// Users.update = updatedUser => {
//   return db.none("UPDATE users SET username = ${username}, password_digest = ${password_digest}, phone_number = ${phone_number}, email = ${email}, location = ${location}, first_name = ${first_name}, last_name = ${last_name}, latitude = ${latitude}, longitude = ${longitude} WHERE username = ${username}", updatedUser);
// };

// Users.delete = username => {
//   return db.result("DELETE FROM users WHERE username = ${username}", { username: username });
// };

module.exports = User;
