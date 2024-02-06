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

-- 12. Games from 2011 and 2012 Year
-- Find the top 50 games ordered by start date, then by name. Display only the games from the years 2011 and 2012. Display the start date in the format "YYYY-MM-DD"

select name, date_format(start, "%Y-%m-%d") as start from games
where year(start) = 2011 or year(start) = 2012
order by start, name limit 50;

-- 13. User Email Providers
-- Find information about the email providers of all users. Display the user_name and the email provider. Sort the results by email provider alphabetically, then by username.

select user_name, substring(email, locate('@', email)+1) as `email provider` from users
order by `email provider`, user_name;

-- 14. Get Users with IP Address Like Pattern
-- Find the user_name and the ip_address for each user, sorted by user_name alphabetically. Display only the rows, where the ip_address matches the pattern: "___.1%.%.___".

select user_name, ip_address from users
where ip_address like '___.1%.%.___'
order by user_name;

-- 15. Show All Games with Duration and Part of the Day
-- Find all games with their corresponding part of the day and duration. Parts of the day should be Morning (start time is >= 0 and < 12), Afternoon (start time is >= 12 and < 18), Evening (start time is >= 18 and < 24). Duration should be Extra Short (smaller or equal to 3), Short (between 3 and 6 including), Long (between 6 and 10 including) and Extra Long in any other cases or without duration.

select name,
case 
	when hour(start) >= 0 and hour(start) < 12 then 'Morning'
    when hour(start) >= 12 and hour(start) < 18 then 'Afternoon'
    when hour(start) >= 18 and hour(start) < 24 then 'Evening'
end as `Part of the Day`,
case 
	when duration <= 3 then 'Extra Short'
    when duration > 3 and duration <= 6 then 'Short'
    when duration > 6 and duration <= 10 then 'Long'
    else 'Extra Long'
end as `Duration`
from games;

-- 16. Orders Table
-- You are given a table orders (id, product_name, order_date) filled with data. Consider that the payment for an order must be accomplished within 3 days after the order date. Also the delivery date is up to 1 month. Write a query to show each product's name, order date, pay and deliver due dates.

select product_name, 
order_date,
date_add(order_date, interval 3 day) as pay_due,
date_add(order_date, interval 1 month) as deliver_due
from orders;