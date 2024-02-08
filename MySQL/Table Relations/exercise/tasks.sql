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