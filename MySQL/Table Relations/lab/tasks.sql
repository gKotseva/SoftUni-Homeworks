-- 1. Mountains and Peaks
-- Write a query to create two tables – mountains and peaks and link their fields properly. Tables should have:
-- - Mountains:
-- · id
-- · name
-- - Peaks:
-- · id
-- · name
-- · mountain_id

create table mountains (
	id int auto_increment primary key,
    name varchar(60) not null
);

create table peaks (
	id int auto_increment primary key,
    name varchar(60) not null,
    mountain_id int,
    constraint fk_peaks_mountain_id_mountains_id
		foreign key(mountain_id)
        references mountains(id)
);

-- 2. Trip Organization
-- Write a query to retrieve information about SoftUni camp's transportation organization. Get information about the drivers (name and id) and their vehicle type.

select vehicles.driver_id, vehicles.vehicle_type, concat_ws(' ', campers.first_name, campers.last_name) as 'driver_name' from vehicles
join campers on vehicles.driver_id=campers.id;

-- 3. SoftUni Hiking
-- Get information about the hiking routes – starting point and ending point, and their leaders – name and id.

select routes.starting_point, routes.end_point, routes.leader_id, concat_ws(' ', campers.first_name, campers.last_name) as 'leader_name' from routes
join campers on routes.leader_id=campers.id;

-- 4. Delete Mountains
-- Drop tables from the task 1.
-- Write a query to create a one-to-many relationship between a table, holding information about mountains (id, name) and other - about peaks (id, name, mountain_id), so that when a mountain gets removed from the database, all his peaks are deleted too.

create table mountains (
	id int auto_increment primary key,
    name varchar(60) not null
);

create table peaks (
	id int auto_increment primary key,
    name varchar(60) not null,
    mountain_id int,
    constraint fk_peaks_mountain_id_mountains_id
		foreign key(mountain_id)
        references mountains(id)
        on delete cascade
);