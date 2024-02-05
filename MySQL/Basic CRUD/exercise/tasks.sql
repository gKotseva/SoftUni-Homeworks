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

-- 4. Find Full Name of Each Employee
-- Write SQL query to find the first, middle and last name of each employee. Sort the information by id.

select first_name, middle_name, last_name from employees
order by employee_id;

-- 5. Find Email Address of Each Employee
-- Write a SQL query to find the email address of each employee. (by his first and last name). Consider that the email domain is softuni.bg. Emails should look like "John.Doe@softuni.bg". The produced column should be named "full_ email_address".

select concat(first_name, + '.', last_name, '@softuni.bg') as full_email_address from employees

-- 6. Find All Different Employee's Salaries
-- Write a SQL query to find all different employee's salaries. Show only the salaries.

select distinct salary from employees;