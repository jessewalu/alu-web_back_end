-- Creates a table users with unique email
-- id: integer, never null, auto increment, primary key
-- email: string (255 chars), never null, unique
-- name: string (255 chars)
CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255),
    PRIMARY KEY (id)
);
