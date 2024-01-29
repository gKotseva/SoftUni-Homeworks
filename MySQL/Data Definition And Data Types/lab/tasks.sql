-- 1. Create tables
-- Table "employees":
-- •	id – INT, primary key, AUTO_INCREMENT;
-- •	first_name – VARCHAR, NOT NULL; 
-- •	last_name – VARCHAR, NOT NULL;  
-- Create the "categories" and "products" tables analogically:
-- Table "categories":
-- •	id – INT, primary key, AUTO_INCREMENT;
-- •	name – VARCHAR, NOT NULL; 
-- Table "products":
-- •	id –  INT, primary key, AUTO_INCREMENT;
-- •	name – VARCHAR, NOT NULL; 
-- •	category_id – INT, NOT NULL – it is not a foreign key for now.

create table employees (
	id int primary key auto_increment,
    first_name varchar(50) not null,
    last_name varchar(50) not null
);

create table categories (
	id int primary key auto_increment,
    name varchar(80) not null
);

create table products (
	id int primary key auto_increment,
    name varchar(80) not null,
    category_id int not null
);

-- 2. Insert Data in tables
-- Inserting data can be done with a query too. To do that we use the "INSERT" clause. Populate the "employees" table with 3 test values.

insert into employees(first_name, last_name) values('Gabi', 'Kotseva'), ('Kris', 'Hristov'), ('Maya', 'Kotseva');

-- 3. Alter tables
-- Altering the tables is done via the "ALTER TABLE" clause. Add a new column – "middle_name" to the "employees" table.

alter table employees
add middle_name varchar(50) not null;

-- 4. Adding Constraints
-- Create the connection via foreign key between the "products" and "categories" tables that you've created earlier. Make "category_id" foreign key linked to "id" in the "categories" table. 

alter table products
add constraint FOREIGN KEY (category_id) REFERENCES categories(id)

