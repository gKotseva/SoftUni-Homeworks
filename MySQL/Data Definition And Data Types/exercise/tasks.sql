-- 1.	Create Tables
-- In the newly created database Minions add table minions (id, name, age). Then add new table towns (town_id, name). Set id and town_id columns of both tables to be primary key as constraint, id's must be auto increment. Submit yours create table queries in Judge together for both tables (one after another separated by ";") as Run queries & check DB.

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
-- Change the structure of the Minions table to have new column town_id that would be of the same type as the id column of towns table. Add new constraint that makes town_id foreign key and references to id column of towns table. Submit your create table query in Judge as MySQL run skeleton, run queries & check DB

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
-- Delete all the data from the minions table using SQL query. Submit your query in Judge as Run skeleton, run queries & check DB.

truncate minions;

