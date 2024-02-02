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

-- 5.	Drop All Tables
-- Delete all tables from the minions database using SQL query. Submit your query in Judge as Run skeleton, run queries & check DB.

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