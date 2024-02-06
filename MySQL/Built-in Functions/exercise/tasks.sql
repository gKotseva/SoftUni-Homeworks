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