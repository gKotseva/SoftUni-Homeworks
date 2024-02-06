-- 1. Find Names of All Employees by First Name
-- Write a SQL query to find first and last names of all employees whose first name starts with "Sa" (case insensitively). Order the information by id.

select first_name, last_name from employees
where first_name like 'Sa%'
order by employee_id;

-- 2. Find Names of All Employees by Last Name
-- Write a SQL query to find first and last names of all employees whose last name contains "ei" (case insensitively). Order the information by id.

select first_name, last_name from employees
where last_name regexp '[e][i]'
order by employee_id;

-- 3. Find First Names of All Employees
-- Write a SQL query to find the first names of all employees in the departments with ID 3 or 10 and whose hire year is between 1995 and 2005 inclusively. Order the information by id.

select first_name from employees
where (department_id = 3 or department_id=10) and (year(hire_date) >= 1995 and year(hire_date) <= 2005)
order by employee_id;

-- 4. Find All Employees Except Engineers
-- Write a SQL query to find the first and last names of all employees whose job titles does not contain "engineer". Order the information by id.

select first_name, last_name from employees
where job_title not like '%engineer%';

-- 5. Find Towns with Name Length
-- Write a SQL query to find town names that are 5 or 6 symbols long and order them alphabetically by town name.

select name from towns
where length(name) = 5 or length(name) = 6
order by name asc;

-- 6. Find Towns Starting With
-- Write a SQL query to find all towns that start with letters M, K, B or E (case insensitively). Order them alphabetically by town name.

select * from towns
where name like 'm%' or name like 'k%' or name like 'b%' or name like 'e%'
order by name asc;

-- 7. Find Towns Not Starting With
-- Write a SQL query to find all towns that do not start with letters R, B or D (case insensitively). Order them alphabetically by name.

select * from towns
where name not like 'r%' and name not like 'b%' and name not like 'd%'
order by name asc;

-- 8. Create View Employees Hired After 2000 Year
-- Write a SQL query to create view v_employees_hired_after_2000 with the first and the last name of all employees hired after 2000 year. Select all from the created view.

CREATE VIEW `v_employees_hired_after_2000` AS
    SELECT 
        `first_name`, `last_name`
    FROM
        `employees`
    WHERE
        YEAR(`hire_date`) > 2000;

-- 9. Length of Last Name
-- Write a SQL query to find the first and last names of all employees whose last name is exactly 5 characters long.

select first_name, last_name from employees
where length(last_name) = 5;

-- 10. Countries Holding 'A' 3 or More Times
-- Find all countries that hold the letter 'A' in their name at least 3 times (case insensitively), sorted by ISO code. Display the country name and the ISO code.

SELECT 
    `country_name`, `iso_code`
FROM
    `countries`
WHERE
    (CHAR_LENGTH(`country_name`) - CHAR_LENGTH(REPLACE(LOWER(`country_name`), 'a', ''))) >= 3
ORDER BY `iso_code`;

-- 11. Mix of Peak and River Names
-- Combine all peak names with all river names, so that the last letter of each peak name is the same as the first letter of its corresponding river name. Display the peak name, the river name, and the obtained mix(converted to lower case). Sort the results by the obtained mix alphabetically.

select peak_name, river_name, LOWER(CONCAT(`peak_name`, SUBSTRING(`river_name`, 2))) AS 'mix'
from peaks, rivers
where lower(right(peak_name, 1)) = lower(left(river_name, 1))
order by mix asc;


