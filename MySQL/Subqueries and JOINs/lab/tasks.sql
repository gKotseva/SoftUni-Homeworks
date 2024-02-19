-- 1. Managers
-- Write a query to retrieve information about the managers – id, full_name, deparment_id and department_name. Select the first 5 departments ordered by employee_id. Submit your queries using the "MySQL prepare DB and Run Queries" strategy.

select employee_id,
concat_ws(' ', first_name, last_name) as 'full_name',
departments.department_id, name as 'department_name' from departments
join employees on departments.manager_id = employees.employee_id
order by employee_id limit 5;


-- 2. Towns Addresses
-- Write a query to get information about the addresses in the database, which are in San Francisco, Sofia or Carnation. Retrieve town_id, town_name, address_text. Order the result by town_id, then by address_id. Submit your queries using the "MySQL prepare DB and Run Queries" strategy.

select towns.town_id, name, addresses.address_text from towns
join addresses on towns.town_id = addresses.town_id
where name = 'San Francisco' or name = 'Sofia' or name= 'Carnation'
order by town_id, addresses.address_id;


-- 3. Employees Without Managers
-- Write a query to get information about employee_id, first_name, last_name, department_id and salary for all employees who don't have a manager. Submit your queries using the "MySQL prepare DB and Run Queries" strategy.

select employee_id, first_name, last_name, department_id, salary from employees
where manager_id is null;


-- 4. Higher Salary
-- Write a query to count the number of employees who receive salary higher than the average. Submit your queries using the "MySQL prepare DB and Run Queries" strategy.

select count(e.employee_id) as 'count' from employees as e
where e.salary > (
	select avg(salary) as 'average_salary' from employees
);