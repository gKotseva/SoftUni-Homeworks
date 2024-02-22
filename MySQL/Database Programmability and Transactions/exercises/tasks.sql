-- 1. Employees with Salary Above 35000
-- Create stored procedure usp_get_employees_salary_above_35000 that returns all employees' first and last names for whose salary is above 35000. The result should be sorted by first_name then by last_name alphabetically, and id ascending.

create procedure usp_get_employees_salary_above_35000()
begin
select first_name, last_name from employees
where salary > 35000
order by first_name, last_name, employee_id;
end

-- 2. Employees with Salary Above Number
-- Create stored procedure usp_get_employees_salary_above that accept a decimal number (with precision, 4 digits after the decimal point) as parameter and return all employee's first and last names whose salary is above or equal to the given number. The result should be sorted by first_name then by last_name alphabetically and id ascending.

create procedure usp_get_employees_salary_above(input_salary decimal(10,4))
begin
	select first_name, last_name from employees
	where salary >= input_salary
	order by first_name, last_name, employee_id;
end

-- 3. Town Names Starting With
-- Write a stored procedure usp_get_towns_starting_with that accept string as parameter and returns all town names starting with that string. The result should be sorted by town_name alphabetically.

create procedure usp_get_towns_starting_with(letter varchar(10))
begin
	select name as town_name from towns 
	where name like concat(letter, '%')
    order by town_name;
end 

-- 4. Employees from Town
-- Write a stored procedure usp_get_employees_from_town that accepts town_name as parameter and return the employees' first and last name that live in the given town. The result should be sorted by first_name then by last_name alphabetically and id ascending.

create procedure usp_get_employees_from_town(town varchar(50))
begin
select e.first_name, e.last_name from employees e
join addresses a on e.address_id=a.address_id
join towns t on a.town_id = t.town_id
where t.name=town
order by first_name, last_name, employee_id;
end 

-- 5. Salary Level Function
-- Write a function ufn_get_salary_level that receives salary of an employee and returns the level of the salary.
-- · If salary is < 30000 return "Low"
-- · If salary is between 30000 and 50000 (inclusive) return "Average"
-- · If salary is > 50000 return "High"

create function ufn_get_salary_level(input_salary int)
returns varchar(30)
deterministic
begin
	declare salary_level varchar(30);
    if input_salary < 30000 then set salary_level='Low';
    elseif input_salary >= 30000 and input_salary <= 50000 then set salary_level='Average';
    else set salary_level = 'High';
    end if;
	return salary_level;
end 