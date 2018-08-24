
DROP DATABASE IF EXISTS eas_e_mart;
CREATE DATABASE eas_e_mart;

\c eas_e_mart;

DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS categories;


CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL unique,
  password_digest VARCHAR NOT NULL,
  phone_number VARCHAR(15) NOT NULL,
  email TEXT NOT NULL,
  location TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  latitude DECIMAL NOT NULL,
  longitude DECIMAL NOT NULL
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(20),
  img_url TEXT
);

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  user_name_id INTEGER REFERENCES users(id),
  category_id INTEGER REFERENCES categories(id),
  name VARCHAR (50) NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL NOT NULL,
  condition VARCHAR(50) NOT NULL,
  quantity INTEGER NOT NULL,
  img_url TEXT NOT NULL
);
