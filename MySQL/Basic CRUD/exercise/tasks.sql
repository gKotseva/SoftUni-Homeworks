-- 1. Find All Information About Departments
-- Write a SQL query to find all available information about the departments. Sort the information by id.

select * from departments
order by department_id;

-- 2. Find all Department Names
-- Write SQL query to find all department names. Sort the information by id.

select name from departments
order by department_id;

-- 3. Find salary of Each Employee
-- Write SQL query to find the first name, last name and salary of each employee. Sort the information by id.

select first_name, last_name, salary from employees
order by employee_id;