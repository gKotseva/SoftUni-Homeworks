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

-- 5. Employees Without Project
-- Write a query that selects:
-- · employee_id
-- · first_name
-- Filter only employees without a project. Return the first 3 rows sorted by employee_id in descending order.

select e.employee_id, first_name from employees as e
left join employees_projects as ep on e.employee_id=ep.employee_id
where ep.project_id is null
order by e.employee_id desc limit 3;


-- 6. Employees Hired After
-- Write a query that selects:
-- · first_name
-- · last_name
-- · hire_date
-- · dept_name
-- Filter only employees hired after 1/1/1999 and from either the "Sales" or the "Finance" departments. Sort the result by hire_date (ascending).

select first_name, last_name, hire_date, d.name from employees as e
join departments as d on e.department_id=d.department_id
where e.hire_date > '1999-01-01' and (d.name='Sales' or d.name='Finance')
order by e.hire_date asc;


-- 7. Employees with Project
-- Write a query that selects:
-- · employee_id
-- · first_name
-- · project_name
-- Filter only employees with a project, which has started after 13.08.2002 and it is still ongoing (no end date). Return the first 5 rows sorted by first_name then by project_name both in ascending order.

select e.employee_id, first_name, p.name from employees as e
join employees_projects as ep on e.employee_id=ep.employee_id
join projects as p on ep.project_id = p.project_id
where date(p.start_date) > '2002-08-13' and p.end_date is null
order by first_name, p.name asc limit 5;


-- 8. Employee 24
-- Write a query that selects:
-- · employee_id
-- · first_name
-- · project_name
-- Filter all the projects of employees with id 24. If the project has started after 2005 inclusively the return value should be NULL. Sort the result by project_name alphabetically.

select e.employee_id, e.first_name, if(year(p.start_date) >= 2005, null, p.name) as project_name from employees as e
join employees_projects as ep on e.employee_id=ep.employee_id
join projects as p on ep.project_id=p.project_id
where e.employee_id = 24
order by p.name;


-- 9. Employee Manager
-- Write a query that selects:
-- · employee_id
-- · first_name
-- · manager_id
-- · manager_name
-- Filter all employees with a manager who has id equal to 3 or 7. Return all rows sorted by employee first_name in ascending order.

select e.employee_id, e.first_name, e.manager_id, m.first_name from employees as e
join employees m on e.manager_id = m.employee_id
where e.manager_id in (3,7)
order by e.first_name;

-- 10. Employee Summary
-- Write a query that selects:
-- · employee_id
-- · employee_name
-- · manager_name
-- · department_name
-- Show the first 5 employees (only for employees who have a manager) with their managers and the departments they are in (show the departments of the employees). Order by employee_id.

select e.employee_id, concat_ws(' ', e.first_name, e.last_name) as employee_name, concat_ws(' ', m.first_name, m.last_name) as manager_name, d.name from employees as e
join departments as d on e.department_id=d.department_id
join employees as m on e.manager_id=m.employee_id
order by employee_id limit 5;


-- 11. Min Average Salary
-- Write a query that returns the value of the lowest average salary of all departments.

select avg(salary) as min_average_salary from employees
group by department_id
order by min_average_salary limit 1;


-- 12. Highest Peaks in Bulgaria
-- Write a query that selects:
-- · country_code
-- · mountain_range
-- · peak_name
-- · elevation
-- Filter all peaks in Bulgaria with elevation over 2835. Return all rows sorted by elevation in descending order.

select c.country_code, m.mountain_range, peak_name, elevation from peaks as p
join mountains as m on p.mountain_id=m.id
join mountains_countries as mc on m.id=mc.mountain_id
join countries as c on mc.country_code=c.country_code
where c.country_code='BG' and elevation > 2835
order by elevation desc;


-- 13. Count Mountain Ranges
-- Write a query that selects:
-- · country_code
-- · mountain_range
-- Filter the count of the mountain ranges in the United States, Russia and Bulgaria. Sort result by mountain_range count in decreasing order.

select mc.country_code, count(*) as mountain_range from mountains_countries mc
where mc.country_code in ('BG', 'RU', 'US')
group by mc.country_code
order by mountain_range desc;

