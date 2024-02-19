-- 1. Employee Address
-- Write a query that selects:
-- · employee_id
-- · job_title
-- · address_id
-- · address_text
-- Return the first 5 rows sorted by address_id in ascending order.

select e.employee_id, e.job_title, a.address_id, a.address_text from employees as e
join addresses as a on a.address_id=e.address_id
order by address_id limit 5;


-- 2. Addresses with Towns
-- Write a query that selects:
-- · first_name
-- · last_name
-- · town
-- · address_text
-- Sort the result by first_name in ascending order then by last_name. Select first 5 employees.

select e.first_name, e.last_name, t.name as 'town', a.address_text from employees as e
join addresses as a on e.address_id=a.address_id
join towns as t on a.town_id=t.town_id
order by first_name, last_name limit 5;


-- 3. Sales Employee
-- Write a query that selects:
-- · employee_id
-- · first_name
-- · last_name
-- · department_name
-- Sort the result by employee_id in descending order. Select only employees from the "Sales" department.

select employee_id, first_name, last_name, d.name from employees as e
join departments as d on e.department_id=d.department_id
where d.name = 'Sales'
order by e.employee_id desc;


-- 4. Employee Departments
-- Write a query that selects:
-- · employee_id
-- · first_name
-- · salary
-- · department_name
-- Filter only employees with salary higher than 15000. Return the first 5 rows sorted by department_id in descending order.

select employee_id, first_name, salary, d.name from employees as e
join departments as d on e.department_id=d.department_id
where salary > 15000
order by d.department_id desc limit 5;

