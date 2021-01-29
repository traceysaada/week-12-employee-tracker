DROP DATABASE IF EXISTS employeesDB;

CREATE DATABASE employeesDB;

USE employeesDB;

  CREATE TABLE employee(
      id INT NOT NULL AUTO_INCREMENT,
      first_name VARCHAR(30) NULL,
      last_name VARCHAR(30) NULL,
      roles_id INT NOT NULL AUTO_INCREMENT
      manager_id INT NOT NULL AUTO_INCREMENT
  );
  CREATE TABLE  roles(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary  DECIMAL (10,2) NULL,
  department_id VARCHAR(30),
);
CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30)
);

PRIMARY KEY (id)
