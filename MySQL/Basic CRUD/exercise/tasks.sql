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

-- 7. Find all Information About Employees
-- Write a SQL query to find all information about the employees whose job title is "Sales Representative". Sort the information by id.

select * from employees
where job_title = 'Sales Representative'
order by employee_id;

-- 8. Find Names of All Employees by salary in Range
-- Write a SQL query to find the first name, last name and job title of all employees whose salary is in the range [20000, 30000]. Sort the information by id.

select first_name, last_name, job_title from employees
where salary >= 20000 and salary <= 30000
order by employee_id;

-- 9. Find Names of All Employees
-- Write a SQL query to find the full name of all employees whose salary is 25000, 14000, 12500 or 23600. Full Name is combination of first, middle and last name (separated with single space) and they should be in one column called "Full Name".

select concat_ws(' ', first_name, middle_name, last_name) as 'Full Name' from employees
where salary = 25000 or salary=14000 or salary=12500 or salary=23600;

-- 10. Find All Employees Without Manager
-- Write a SQL query to find first and last names about those employees that does not have a manager.

select first_name, last_name from employees
where manager_id is null;

-- 11. Find All Employees with salary More Than 50000
-- Write a SQL query to find first name, last name and salary of those employees who has salary more than 50000. Order them in decreasing order by salary.

select first_name, last_name, salary from employees
where salary > 50000
order by salary desc;

