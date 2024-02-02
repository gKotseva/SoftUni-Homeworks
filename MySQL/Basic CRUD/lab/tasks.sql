-- Problem 1: Select Employee Information
-- Write a query to select all employees and retrieve information about their id, first_name, last_name and job_title ordered by id.

select id, first_name, last_name, job_title from employees
order by id;

-- Problem 2: Select Employees with Filter
-- Write a query to select all employees (id, first_name and last_name (as full_name), job_title, salary) whose salaries are higher than 1000.00, ordered by id. Concatenate fields first_name and last_name into 'full_name'.

select id, concat_ws(' ', first_name, last_name) as full_name, job_title, salary from employees
where salary > 1000.00
order by id

-- Problem 3: Update Employees Salary
-- Update all employees' salaries whose job_title is "Manager" by adding 100.
-- Retrieve information about salaries from table employees.

update employees
set salary = salary + 100
where job_title = 'Manager';

select salary from employees;

-- Problem 4: Top Paid Employee
-- Write a query to create a view that selects all information about the top paid employee from the "employees" table in the hotel database.

create view top_paid_employee as
select * from employees
order by salary desc limit 1;

select * from top_paid_employee;

-- Problem 5: Select Employees by Multiple Filters
-- Write a query to retrieve information about employees, who are in department 4 and has a salary higher or equal to 1000. Order the information by id.

select * from employees
where department_id = 4 and salary >= 1000
order by id

-- Problem 6: Delete from Table
-- Write a query to delete all employees from the "employees" table who are in department 2 or 1. Then select all from table `employees` and order the information by id.

delete from employees
where department_id = 2 or department_id = 1;

select * from employees
order by id;