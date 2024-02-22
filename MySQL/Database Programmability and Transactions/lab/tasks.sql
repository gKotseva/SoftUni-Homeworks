-- 1. Count Employees by Town
-- Write a function ufn_count_employees_by_town(town_name) that accepts town_name as parameter and returns the count of employees who live in that town.

create function ufn_count_employees_by_town(town_name varchar(50))
returns int
deterministic
begin
declare result int;
set result := (
	select count(*) from employees e
	join addresses a on e.address_id=a.address_id
	join towns t on a.town_id=t.town_id
	where t.name = town_name
);
return result;
end

-- 2. Employees Promotion
-- Write a stored procedure usp_raise_salaries(department_name) to raise the salary of all employees in given department as parameter by 5%.

create procedure usp_raise_salaries(department_name varchar(50))
begin
	update employees e
	join departments d on e.department_id=d.department_id
    set e.salary = e.salary * 1.05
	where d.name = department_name;
end 

-- 3. Employees Promotion by ID
-- Write a stored procedure usp_raise_salary_by_id(id) that raises a given employee's salary (by id as parameter) by 5%. Consider that you cannot promote an employee that doesn't exist – if that happens, no changes to the database should be made.

create procedure usp_raise_salary_by_id(id int)
begin
start transaction;
if ((select count(*) from employees where employee_id=id) <> 1) then
rollback;
else 
update employees
set salary = salary * 1.05
where employee_id = id;
commit;
end if;
end

-- 4. Triggered
-- Create a table deleted_employees(employee_id PK, first_name,last_name,middle_name,job_title,deparment_id,salary) that will hold information about fired(deleted) employees from the employees table. Add a trigger to employees table that inserts the corresponding information in deleted_employees.

create table deleted_employees(
	employee_id int auto_increment primary key,
    first_name varchar(50),
    last_name varchar(50),
    middle_name varchar(50),
    job_title varchar(50),
    department_id int,
    salary int
);

create trigger tr_deleted_employees
after delete
on employees
for each row
	insert into deleted_employees(first_name, last_name, middle_name, job_title, department_id, salary)
    values (old.first_name, old.last_name, old.middle_name, old.job_title, old.department_id, old.salary);