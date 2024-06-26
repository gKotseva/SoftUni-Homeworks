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

-- 12. Find 5 Best Paid Employees
-- Write SQL query to find first and last names about 5 best paid Employees ordered descending by their salary.

select first_name, last_name from employees
order by salary desc limit 5;

-- 13. Find All Employees Except Marketing
-- Write a SQL query to find the first and last names of all employees whose department ID is different from 4

select first_name, last_name from employees
where department_id != 4;

-- 14. Sort Employees Table
-- Write a SQL query to sort all records in the еmployees table by the following criteria:
-- • First by salary in decreasing order
-- • Then by first name alphabetically
-- • Then by last name descending
-- • Then by middle name alphabetically
-- Sort the information by id.

select * from employees
order by salary desc, first_name asc, last_name desc, middle_name asc, employee_id;

-- 15. Create View Employees with Salaries
-- Write a SQL query to create a view v_employees_salaries with first name, last name and salary for each employee.

create view v_employees_salaries as
select first_name, last_name, salary from employees;

-- 16. Create View Employees with Job Titles
-- Write a SQL query to create view v_employees_job_titles with full employee name and job title. When middle name is NULL replace it with empty string ('').

create view v_employees_job_titles as
select concat_ws(' ', first_name, middle_name, last_name) as full_name, job_title from employees;

-- 17. Distinct Job Titles
-- Write a SQL query to find all distinct job titles. Sort the result by job title alphabetically.

select distinct job_title from employees
order by job_title asc;

-- 18. Find First 10 Started Projects
-- Write a SQL query to find first 10 started projects. Select all information about them and sort them by start date, then by name. Sort the information by id.

select * from projects
order by start_date, name, project_id limit 10;

-- 19. Last 7 Hired Employees
-- Write a SQL query to find last 7 hired employees. Select their first, last name and their hire date.

select first_name, last_name, hire_date from employees
order by hire_date desc limit 7;

-- 20. Increase Salaries
-- Write a SQL query to increase salaries of all employees that are in the Engineering, Tool Design, Marketing or Information Services department by 12%. Then select Salaries column from the Employees table.

update employees
set salary = salary * 1.12
where department_id=1 or department_id=2 or department_id=4 or department_id=11;

select salary from employees;

-- 21. All Mountain Peaks
-- Display all mountain peaks in alphabetical order.

select peak_name from peaks
order by peak_name asc;

-- 22. Biggest Countries by Population
-- Find the 30 biggest countries by population from Europe. Display the country name and population. Sort the results by population (from biggest to smallest), then by country alphabetically.

select country_name, population from countries
where continent_code='EU'
order by population desc, country_name asc limit 30;

-- 23. Countries and Currency (Euro / Not Euro)
-- Find all countries along with information about their currency. Display the country name, country code and information about its currency: either "Euro" or "Not Euro". Sort the results by country name alphabetically

select country_name, country_code,
case
	when currency_code='EUR' then 'Euro'
    else 'Not Euro'
end as currency
from countries
order by country_name asc;

-- 24. All Diablo Characters
-- Display the name of all characters in alphabetical order.

select name from characters
order by name asc;