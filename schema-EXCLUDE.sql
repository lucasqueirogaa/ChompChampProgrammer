CREATE DATABASE IF NOT EXISTS chomp_champ_programmer;
USE chomp_champ_programmer;

CREATE TABLE IF NOT EXISTS users (
  id integer PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL
);
