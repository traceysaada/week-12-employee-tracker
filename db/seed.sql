
INSERT INTO employee 
    (first_name, last_name, role_id, manager_id)
VALUES ("Thomas", "Whitehead", "engineer", "Jack Brown");
VALUES ("Jack", "Brown", "engineer", null);
VALUES ("Sam", "Wayne", "engineer", "jack Brown");
VALUES ("Lee", "Young", "engineer", "jack Brown");
VALUES ("Jane", "White", "administrator", "Russel Lear");
VALUES ("Michael", "Adler", "Closer", null);
VALUES ("Nicola", "Wooley", "Closer", "Michael Adler");
VALUES ("Gary", "Stone", "administrator", "Russel Lear");
VALUES ("Russel", "Lear", "administrator", null);
VALUES ("Andy", "Greenfield", "Closer", "Michael Adler");


INSERT INTO role
    (title, salary, department_id)
    VALUES ("engineer", 35.000, 1);

    INSERT INTO role
    (title, salary, department_id)
    VALUES ("administrator", 20.000, 2);

    INSERT INTO role
    (title, salary, department_id)
    VALUES ("Closer", 34.000, 3);

   

    INSERT INTO department (name)
VALUES ('Engineering'), ('Finance'), ('Sales');

