/* 
- Connect Database using CLI in terminal
- enter-> source schema.sql
- USE database_name; (delta_app)
*/

CREATE TABLE user (
id VARCHAR(50) PRIMARY KEY,
name VARCHAR(50) UNIQUE NOT NULL,
email VARCHAR(50) UNIQUE NOT NULL,
password VARCHAR(50) NOT NULL
);

