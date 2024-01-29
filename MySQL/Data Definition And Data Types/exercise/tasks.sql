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