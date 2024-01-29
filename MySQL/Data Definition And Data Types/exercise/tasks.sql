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