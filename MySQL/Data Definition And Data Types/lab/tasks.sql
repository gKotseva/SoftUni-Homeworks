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


