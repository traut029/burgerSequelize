### Schema

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
	id int AUTO_INCREMENT NOT NULL,
	burger_name varchar(255) NOT NULL,
    devoured boolean NOT NULL DEFAULT 0,
    createdAt TIMESTAMP NOT NULL default current_timestamp,
	PRIMARY KEY (id)
);