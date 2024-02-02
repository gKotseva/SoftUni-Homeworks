-- 1.	Create Tables
-- In the newly created database Minions add table minions (id, name, age). Then add new table towns (town_id, name). Set id and town_id columns of both tables to be primary key as constraint, id's must be auto increment. 

create table minions (
id int auto_increment primary key,
name varchar(80),
age int
);

create table towns (
town_id int auto_increment primary key,
name varchar(80)
);

-- 2.	Alter Minions Table
-- Change the structure of the Minions table to have new column town_id that would be of the same type as the id column of towns table. Add new constraint that makes town_id foreign key and references to id column of towns table.

alter table minions
add column town_id int;

alter table minions
add foreign key (town_id) references towns(id);

-- 3.	Insert Records in Both Tables
-- Populate both tables with sample records given in the table below.

insert into towns(id, name) value(1, 'Sofia');
insert into towns(id, name) value(2, 'Plovdiv');
insert into towns(id, name) value(3, 'Varna');

insert into minions(id, name, age, town_id) value(1, 'Kevin', 22, 1);
insert into minions(id, name, age, town_id) value(2, 'Bob', 15, 3);
insert into minions(id, name, age, town_id) value(3, 'Steward', Null, 2);

-- 4.	Truncate Table Minions
-- Delete all the data from the minions table using SQL query. 

truncate minions;

-- 5.	Drop All Tables
-- Delete all tables from the minions database using SQL query. 

drop table minions;
drop table towns;

-- 6. Create Table People
-- Using SQL query create table "people" with columns:
-- · id – unique number for every person there will be no more than 231-1people. (Auto incremented)
-- · name – full name of the person will be no more than 200 Unicode characters. (Not null)
-- · picture – image with size up to 2 MB. (Allow nulls)
-- · height – In meters. Real number precise up to 2 digits after floating point. (Allow nulls)
-- · weight – In kilograms. Real number precise up to 2 digits after floating point. (Allow nulls)
-- · gender – Possible states are m or f. (Not null)
-- · birthdate – (Not null)
-- · biography – detailed biography of the person it can contain max allowed Unicode characters. (Allow nulls)

create table people (
	id int unique primary key auto_increment,
    name varchar(200) not null,
    picture blob,
    height double(6,2) default null,
    weight double(6,2) default null,
    gender char(1) not null,
    birthdate date not null,
    biography blob
);

insert into people values (1, 'Gabi', 'text', 178, 40, 'f', '1998-09-29', 'text');
insert into people values (2, 'Gabi', 'text', 178, 40, 'f', '1998-09-29', 'text');
insert into people values (3, 'Gabi', 'text', 178, 40, 'f', '1998-09-29', 'text');
insert into people values (4, 'Gabi', 'text', 178, 40, 'f', '1998-09-29', 'text');
insert into people values (5, 'Gabi', 'text', 178, 40, 'f', '1998-09-29', 'text');

-- 7. Create Table Users
-- Using SQL query create table users with columns:
-- · id – unique number for every user. There will be no more than 263-1 users. (Auto incremented)
-- · username – unique identifier of the user will be no more than 30 characters (non Unicode). (Required)
-- · password – password will be no longer than 26 characters (non Unicode). (Required)
-- · profile_picture – image with size up to 900 KB.
-- · last_login_time
-- · is_deleted – shows if the user deleted his/her profile. Possible states are true or false.
-- Make id primary key. Populate the table with 5 records.

create table users (
	id int unique primary key auto_increment,
    username varchar(30) unique not null,
    password varchar(26) not null,
    profile_picture blob,
    last_login_time datetime,
    is_deleted bit
);

insert into users(username, password, profile_picture, last_login_time, is_deleted) values('gabi', 'whatever', 'whatever', '2000-03-10', 1);
insert into users(username, password, profile_picture, last_login_time, is_deleted) values('pesho', 'whatever', 'whatever', '2000-03-10', 1);
insert into users(username, password, profile_picture, last_login_time, is_deleted) values('gosho', 'whatever', 'whatever', '2000-03-10', 1);
insert into users(username, password, profile_picture, last_login_time, is_deleted) values('kris', 'whatever', 'whatever', '2000-03-10', 1);
insert into users(username, password, profile_picture, last_login_time, is_deleted) values('kodi', 'whatever', 'whatever', '2000-03-10', 1);

-- 8. Change Primary Key
-- Using SQL queries modify table users from the previous task. First remove current primary key then create new primary key that would be combination of fields id and username. The initial primary key name on id is pk_users.

alter table users
drop primary key,
add primary key(id, username);

-- 9. Set Default Value of a Field
-- Using SQL queries modify table users. Make the default value of last_login_time field to be the current time.

alter table users
change last_login_time last_login_time datetime default now();

-- 10. Set Unique Field
-- Using SQL queries modify table users. Remove username field from the primary key so only the field id would be primary key. Now add unique constraint to the username field. The initial primary key name on (id, username) is pk_users.

alter table users
drop primary key,
add primary key(id),
add constraint unique(username);

-- 11. Movies Database
-- Using SQL queries create Movies database with the following entities:
-- · directors (id, director_name, notes)
-- o director_name cannot be null
-- · genres (id, genre_name, notes)
-- o genre_name cannot be null
-- · categories (id, category_name, notes)
-- o category_name cannot be null
-- · movies (id, title, director_id, copyright_year, length, genre_id, category_id, rating, notes)
-- o title cannot be null
-- Set most appropriate data types for each column. Set primary key to each table. Populate each table with 5 records. Make sure the columns that are present in 2 tables would be of the same data type. Consider which fields are always required and which are optional.

create table directors (
	id int primary key unique auto_increment,
    director_name varchar(80) not null,
    notes text
);

insert into directors (director_name, notes) values ('Gabi', 'cool');
insert into directors (director_name, notes) values ('Kris', 'awesome');
insert into directors (director_name, notes) values ('Kodi', 'cool');
insert into directors (director_name, notes) values ('Vasko', 'cool');
insert into directors (director_name, notes) values ('Maya', 'cool');

create table genres (
	id int primary key unique auto_increment,
    genres_name varchar(80) not null unique,
    notes text
);

insert into genres (genres_name, notes) values ('Scary', 'scary movie');
insert into genres (genres_name, notes) values ('Romantic', 'scary movie');
insert into genres (genres_name, notes) values ('Fiction', 'scary movie');
insert into genres (genres_name, notes) values ('Documentary', 'scary movie');
insert into genres (genres_name, notes) values ('Whatever', 'scary movie');


create table categories (
	id int primary key unique auto_increment,
    category_name varchar(80) not null,
    notes text
);

insert into categories (category_name, notes) values ('Scary', 'Good');
insert into categories (category_name, notes) values ('Romantic', 'Good movie');
insert into categories (category_name, notes) values ('Fiction', 'Good movie');
insert into categories (category_name, notes) values ('Documentary', 'Good movie');
insert into categories (category_name, notes) values ('Whatever', 'Good movie');


create table movies (
	id int primary key unique auto_increment,
    title varchar(80) not null unique,
    director_id int,
    copyright_year date,
    length time,
    gendre_id int,
    category_id int,
    rating int,
    notes text
);

insert into movies (title, director_id, copyright_year, length, gendre_id, category_id, rating, notes) values ('Friends with benefits', 2, '2022-09-20', '1:50', 4, 2, 100, 'funny movie');
insert into movies (title, director_id, copyright_year, length, gendre_id, category_id, rating, notes) values ('Star wars', 2, '2022-09-20', '1:50', 4, 2, 100, 'funny movie');
insert into movies (title, director_id, copyright_year, length, gendre_id, category_id, rating, notes) values ('The green mile', 2, '2022-09-20', '1:50', 4, 2, 100, 'funny movie');
insert into movies (title, director_id, copyright_year, length, gendre_id, category_id, rating, notes) values ('The notebook', 2, '2022-09-20', '1:50', 4, 2, 100, 'funny movie');
insert into movies (title, director_id, copyright_year, length, gendre_id, category_id, rating, notes) values ('Enemy at the gates', 2, '2022-09-20', '1:50', 4, 2, 100, 'funny movie');

-- 12. Car Rental Database
-- Using SQL queries create car_rental database with the following entities:
-- · categories (id, category, daily_rate, weekly_rate, monthly_rate, weekend_rate)
-- · cars (id, plate_number, make, model, car_year, category_id, doors, picture, car_condition, available)
-- · employees (id, first_name, last_name, title, notes)
-- · customers (id, driver_licence_number, full_name, address, city, zip_code, notes)
-- · rental_orders (id, employee_id, customer_id, car_id, car_condition, tank_level, kilometrage_start, kilometrage_end, total_kilometrage, start_date, end_date, total_days, rate_applied, tax_rate, order_status, notes)
-- Set most appropriate data types for each column. Set primary key to each table. Populate each table with 3 records. Make sure the columns that are present in 2 tables would be of the same data type. Consider which fields are always required and which are optional.

create table categories(
	id int primary key auto_increment,
    category varchar(50) not null,
    daily_rate int not null,
    weekly_rate int not null,
    monthly_rate int not null,
    weekend_rate int not null
);

insert into categories(category, daily_rate, weekly_rate, monthly_rate, weekend_rate) values
('lux', 23, 55, 99, 134),
('econ', 23, 55, 99, 134),
('normal', 23, 55, 99, 134);

create table cars(
	id int primary key auto_increment,
    plate_number varchar(50) not null,
    make varchar(100) not null,
    model varchar(100) not null,
    car_year date not null,
    category_id int not null,
    doors int not null,
    picture blob not null,
    car_condition varchar(100) not null,
    available bit,
    
    foreign key(category_id) references categories(id)
);

insert into cars(plate_number, make, model, car_year, category_id, doors, picture, car_condition, available) values
('whatever', 'whatever', 'whatever', '2010-09-22', 2, 4, 'whatever', 'good', true),
('whatever', 'whatever', 'whatever', '2010-09-22', 1, 2, 'whatever', 'dirty', false),
('whatever', 'whatever', 'whatever', '2010-09-22', 3, 3, 'whatever', 'clean', true);

create table employees(
	id int primary key auto_increment,
    first_name varchar(50) not null,
    last_name varchar(50) not null,
    title varchar(10) not null,
    notes varchar(100) not null
);

insert into employees(first_name, last_name, title, notes) values
('Gabi', 'Kotseva', 'ms', 'good'),
('Maya', 'Kotseva', 'mr', 'good worker'),
('Kristina', 'Kotseva', 'mr', 'good cleaner');

create table customers(
	id int primary key auto_increment,
    driver_license_number varchar(20) not null,
    full_name varchar(100) not null,
    address varchar(200) not null,
    city varchar(50) not null,
    zip_code varchar(20) not null,
    notes varchar(100) not null
);

insert into customers(driver_license_number, full_name, address, city, zip_code, notes) values
('38259825', 'Ivan Ivanov', 'whatever', 'whatever', 1000, 'good'),
('38259258928825', 'Petar Petrov', 'whatever', 'whatever', 1583, 'good'),
('38225', 'Kiril Kirilov', 'whatever', 'whatever', 2000, 'good');

create table rental_orders(
	id int primary key auto_increment,
    employee_id int not null,
    customer_id int not null,
    car_id int not null,
    car_condition varchar(50) not null,
    tank_level int not null,
    kilometrage_start int not null,
    kilometrage_end int not null,
    total_kilometrage int not null,
    start_date date not null,
    end_date date not null,
    total_days int not null,
    rate_applied varchar(50) not null,
    tax_rate varchar(50) not null,
    order_status varchar(50) not null,
    notes varchar(100) not null,
    
    foreign key(employee_id) references employees(id),
    foreign key(customer_id) references customers(id),
    foreign key(car_id) references cars(id)
);

insert into rental_orders(employee_id, customer_id, car_id, car_condition, tank_level, kilometrage_start, kilometrage_end, total_kilometrage, start_date, end_date, total_days, rate_applied, tax_rate, order_status, notes) values
(1, 1, 1, 'good', 28, 90, 80, 100, '2010-09-22', '2010-09-22', 9, 20, 20, 'confirmed', 'good'),
(2, 2, 2, 'good', 28, 90, 80, 100, '2010-09-22', '2010-09-22', 9, 20, 20, 'confirmed', 'good'),
(3, 3, 3, 'good', 28, 90, 80, 100, '2010-09-22', '2010-09-22', 9, 20, 20, 'confirmed', 'good');



-- 13. Basic Insert
-- Now create bigger database called soft_uni. You will use database in the future tasks. It should hold information about
-- • towns (id, name)
-- • addresses (id, address_text, town_id)
-- • departments (id, name)
-- • employees (id, first_name, middle_name, last_name, job_title, department_id, hire_date, salary, address_id)
-- Id columns are auto incremented starting from 1 and increased by 1 (1, 2, 3, 4…). Make sure you use appropriate data types for each column. Add primary and foreign keys as constraints for each table. Use only SQL queries. Consider which fields are always required and which are optional.

insert into towns(name) values('Sofia'), ('Plovdiv'), ('Varna'), ('Burgas');
insert into departments(name) values('Engineering'),('Sales'),('Marketing'),('Software Development'),('Quality Assurance');
insert into employees(first_name, middle_name, last_name, job_title, department_id, hire_date, salary) 
values('Ivan', 'Ivanov', 'Ivanov', '.NET Developer', 4, '2013-02-01', 3500.00),
('Petar', 'Petrov', 'Petrov', 'Senior Engineer', 1, '2004-03-02', 4000.00),
('Maria', 'Petrova', 'Ivanova', 'Intern', 5, '2016-08-28', 525.25),
('Georgi', 'Terziev', 'Ivanov', 'CEO', 2, '2007-12-09', 3000.00),
('Peter', 'Pan', 'Pan', 'Intern', 3, '2016-08-28', 599.88);

-- 14. Basic Select All Fields
-- Use the soft_uni database and first select all records from the towns, then from departments and finally from employees table. Use SQL queries and submit them to Judge at once. Submit your query statements as Prepare DB & Run queries.

select * from towns;
select * from departments;
select * from employees;


-- 15. Basic Select All Fields and Order Them
-- Modify queries from previous problem by sorting:
-- · towns - alphabetically by name
-- · departments - alphabetically by name
-- · employees - descending by salary

select * from towns
order by name asc;

select * from departments
order by name asc;

select * from employees
order by salary desc;

-- 16. Basic Select Some Fields
-- Modify queries from previous problem to show only some of the columns. For table:
-- · towns – name
-- · departments – name
-- · employees – first_name, last_name, job_title, salary

select name from towns
order by name asc;

select name from departments
order by name asc;

select first_name, last_name, job_title, salary from employees
order by salary desc;

-- 17. Increase Employees Salary
-- Use softuni database and increase the salary of all employees by 10%. Then select only salary column from the employees table.

update employees
set salary = salary * 1.1;

select salary from employees;
