-- 1. One-To-One Relationship
-- Create two tables as follows. Use appropriate data types.
-- Insert the data from the example above.
-- · Alter table people and make person_id a primary key.
-- · Create a foreign key between people and passports by using the passport_id column.
-- · Think about which passport field should be UNIQUE.
-- · Format salary to second digit after decimal point.

create table passports (
    passport_id int not null primary key auto_increment,
    passport_number varchar(50) not null unique
);

create table people (
	person_id int not null,
    first_name varchar(50) not null,
    salary decimal(10, 2) not null,
    passport_id int not null
);

alter table people
modify person_id int primary key auto_increment not null;

alter table people
add constraint FK_Passport_id foreign key(passport_id) references passports(passport_id);

alter table people
add unique(passport_id);

insert into passports(passport_id, passport_number) 
	values (101, 'N34FG21B'), (102, 'K65LO4R7'), (103, 'ZE657QP2');

insert into people (first_name, salary, passport_id)
	values ('Roberto', 43300.00, 102), ('Tom', 56100.00, 103), ('Yana', 60200.00, 101);

-- 2. One-To-Many Relationship
-- Create two tables as follows. Use appropriate data types.
-- Insert the data from the example above.
-- · Add primary and foreign keys.

create table manufacturers(
	manufacturer_id int auto_increment primary key,
    name varchar(50) not null,
    established_on date not null
);

create table models(
	model_id int primary key not null,
    name varchar(50) not null,
	manufacturer_id int,
    constraint fk_models_manufacturer_id_manufacturers_manufacturer_id
		foreign key (manufacturer_id)
        references manufacturers(manufacturer_id)
);

insert into manufacturers(name, established_on)
values ('BMW', '1916-03-01'), ('Tesla', '2003-01-01'), ('Lada', '1966-05-01');

insert into models(model_id, name, manufacturer_id)
values (101, 'X1', 1), (102, 'i6', 1), (103, 'Model S', 2), (104, 'Model X', 2), (105, 'Model 3', 2), (106, 'Nova', 3)

-- 3. Many-To-Many Relationship
-- Create three tables as follows. Use appropriate data types.
-- Insert the data from the example above.
-- · Add primary and foreign keys.
-- · Have in mind that the table student_exams should have a
-- composite primary key.

create table students(
	student_id int auto_increment primary key,
    name varchar(50) not null
);

create table exams(
	exam_id int primary key not null,
    name varchar(50) not null
);

create table students_exams(
	student_id int not null,
    exam_id int not null,
    primary key(student_id, exam_id),
	
    constraint fk_students_id_student_id
    foreign key (student_id)
    references students(student_id),
    
	constraint fk_exam_id_exams_id
    foreign key (exam_id)
    references exams(exam_id)
);

insert into students(name) values('Mila'), ('Toni'), ('Ron');
insert into exams(exam_id, name) values(101, 'Spring MVC'), (102, 'Neo4j'), (103, 'Oracle 11g');
insert into students_exams(student_id, exam_id) values (1, 101), (1, 102), (2, 101), (3, 103), (2, 102), (2, 103);

-- 4. Self-Referencing
-- Create a single table as follows. Use appropriate data types.
-- Insert the data from the example above.
-- · Add primary and foreign keys.
-- · The foreign key should be between manager_id and teacher_id.

create table teachers(
	teacher_id int primary key not null,
    name varchar(50) not null,
    manager_id int,
    
    constraint fk_teacher_id_manager_id
		foreign key(manager_id)
        references teachers(teacher_id)
);

insert into teachers(teacher_id, name, manager_id) 
values (101, 'John', null), (105, 'Mark', 101), (106, 'Greta', 101), (102, 'Maya', 106), (103, 'Silvia', 106), (104, 'Ted', 105)

-- 5. Online Store Database
-- Create a new database and design the following structure:

create table item_types(
	item_type_id int(11) auto_increment primary key,
    name varchar(50)
);

create table cities(
	city_id int(11) auto_increment primary key,
    name varchar(50)
);

create table items(
	item_id int(11) auto_increment primary key,
    name varchar(50),
    item_type_id int,
    
    constraint fk_item_id_to_item_types
		foreign key (item_type_id)
        references item_types(item_type_id)
);

create table customers(
	customer_id int(11) auto_increment primary key,
    name varchar(50),
    birthday date,
    city_id int,
    
	constraint fk_city_id_to_cities
		foreign key (city_id)
        references cities(city_id)
    
);

create table orders(
	order_id int(11) auto_increment primary key not null,
    customer_id int(11),
    
	constraint fk_customer_id_to_customers
		foreign key (customer_id)
        references customers(customer_id)
);

create table order_items(
	order_id int(11),
    item_id int(11),
    
    primary key(order_id, item_id),
    
	constraint fk_item_id_to_items
		foreign key (item_id)
        references items(item_id),
        
	constraint fk_order_id_to_orders
		foreign key (order_id)
        references orders(order_id)
);

-- 6. University Database
-- Create a new database and design the following structure:

create table subjects(
	subject_id int auto_increment primary key,
    subject_name varchar(50)
);

create table majors(
	major_id int auto_increment primary key,
    name varchar(50)
);

create table students(
	student_id int auto_increment primary key,
    student_number varchar(12),
    student_name varchar(50),
    major_id int,
    
	constraint fk_major_id
		foreign key(major_id)
        references majors(major_id)
);

create table agenda(
	student_id int,
    subject_id int,
    
    primary key(student_id, subject_id),
    
    constraint fk_student_id_agenda
		foreign key(student_id)
        references students(student_id),
	
    constraint fk_subject_id
		foreign key(subject_id)
        references subjects(subject_id)
);

create table payments(
	payment_id int auto_increment primary key,
    payment_date date, 
    payment_amount decimal(8, 2),
    student_id int,
        
	constraint fk_student_id
		foreign key(student_id)
        references students(student_id)
);

-- 7. Peaks in Rila
-- Display all peaks for "Rila" mountain_range. Include:
-- · mountain_range
-- · peak_name
-- · peak_elevation
-- Peaks should be sorted by peak_elevation descending.

select mountains.mountain_range, peak_name, elevation as peak_elevation from peaks
join mountains on peaks.mountain_id=mountains.id
where mountains.mountain_range = 'Rila'
order by peak_elevation desc;