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

-- 6. Employees by Salary Level
-- Write a stored procedure usp_get_employees_by_salary_level that receive as parameter level of salary (low, average or high) and print the names of all employees that have given level of salary. The result should be sorted by first_name then by last_name both in descending order.

create procedure usp_get_employees_by_salary_level(input_level_salary varchar(50))
begin
    SELECT first_name, last_name
    FROM employees
    WHERE
        CASE 
            WHEN input_level_salary = 'Low' THEN salary < 30000 
            WHEN input_level_salary = 'Average' THEN salary >= 30000 AND salary <= 50000
            WHEN input_level_salary = 'High' THEN salary >= 50001
        END
    ORDER BY first_name DESC, last_name DESC;
end 

-- 7. Define Function
-- Define a function ufn_is_word_comprised(set_of_letters varchar(50), word varchar(50)) that returns 1 or 0 depending on that if the word is a comprised of the given set of letters.

create function ufn_is_word_comprised(set_of_letters varchar(50), word varchar(50))
returns tinyint
deterministic
begin
	return word regexp concat('^[', set_of_letters, ']+$');
end 

-- 8. Find Full Name
-- You are given a database schema with tables:
-- · account_holders(id (PK), first_name, last_name, ssn)
-- and
-- · accounts(id (PK), account_holder_id (FK), balance).
-- Write a stored procedure usp_get_holders_full_name that selects the full names of all people. The result should be sorted by full_name alphabetically and id ascending.

create procedure usp_get_holders_full_name()
begin
	select concat_ws(' ', first_name, last_name) as full_name from account_holders
    order by full_name, id;
end 

-- 9. People with Balance Higher Than
-- Your task is to create a stored procedure usp_get_holders_with_balance_higher_than that accepts a number as a parameter and returns all people who have more money in total of all their accounts than the supplied number. The result should be sorted by account_holders.id ascending.

create procedure usp_get_holders_with_balance_higher_than(input_number decimal(19,4))
begin
	select ah.first_name, ah.last_name from account_holders ah
    join accounts a on ah.id = a.account_holder_id
    where input_number < (select sum(balance) from accounts where account_holder_id = ah.id group by account_holder_id)
    group by ah.id
    order by ah.id;
end 

-- 10. Future Value Function
-- Your task is to create a function ufn_calculate_future_value that accepts as parameters – sum (with precision, 4 digits after the decimal point), yearly interest rate (double) and number of years(int). It should calculate and return the future value of the initial sum. The result from the function must be decimal, with percision 4.

create function ufn_calculate_future_value(initial decimal(10,4), yearly_interest_rate double, number_of_years int)
returns decimal(19,4)
reads sql data
begin
	return initial * POW(1 + yearly_interest_rate, number_of_years);
end 

-- 11. Calculating Interest
-- Your task is to create a stored procedure usp_calculate_future_value_for_account that accepts as parameters – id of account and interest rate. The procedure uses the function from the previous problem to give an interest to a person's account for 5 years, along with information about his/her account id, first name, last name and current balance as it is shown in the example below. It should take the account_id and the interest_rate as parameters. Interest rate should have precision up to 0.0001, same as the calculated balance after 5 years. Be extremely careful to achieve the desired precision!

create function ufn_calculate_future_value(initial decimal(10,4), yearly_interest_rate decimal(10,4), number_of_years int)
returns decimal(10,4)
reads sql data
begin
	return initial * POW(1 + yearly_interest_rate, number_of_years);
end ;

create procedure usp_calculate_future_value_for_account(acc_id int, interest_rate decimal(10,4))
begin
select a.id as account_id, 
ah.first_name, ah.last_name, 
a.balance as current_balance, 
ufn_calculate_future_value(a.balance, interest_rate, 5) as balance_in_5_years 
from account_holders ah
join accounts a on ah.id=a.account_holder_id
where a.id=acc_id;
end ;

-- 12. Deposit Money
-- Add stored procedure usp_deposit_money(account_id, money_amount) that operate in transactions. Follow us:
-- Make sure to guarantee valid positive money_amount with precision up to fourth sign after decimal point. The procedure should produce exact results working with the specified precision.

create procedure usp_deposit_money(acc_id int, money_amount decimal(10,4))
begin
	start transaction;
    if ((select count(*) from accounts where id = acc_id) <> 1 or money_amount < 0) then
    rollback;
    else update accounts set balance = balance + money_amount where id = acc_id;
    commit;
    end if;
end

-- 13. Withdraw Money
-- Add stored procedures usp_withdraw_money(account_id, money_amount) that operate in transactions.
-- Make sure to guarantee withdraw is done only when balance is enough and money_amount is valid positive number. Work with precision up to fourth sign after decimal point. The procedure should produce exact results working with the specified precision.

create procedure usp_withdraw_money(acc_id int, money_amount decimal(19,4))
begin
	start transaction;
    if ((select balance from accounts where id = acc_id) < money_amount or money_amount < 0) then
    rollback;
    else 
    update accounts set balance = balance - money_amount where id = acc_id;
    commit;
    end if;
end 

-- 14. Money Transfer
-- Write stored procedure usp_transfer_money(from_account_id, to_account_id, amount) that transfers money from one account to another. Consider cases when one of the account_ids is not valid, the amount of money is negative number, outgoing balance is enough or transferring from/to one and the same account. Make sure that the whole procedure passes without errors and if error occurs make no change in the database.
-- Make sure to guarantee exact results working with precision up to fourth sign after decimal point.

create procedure usp_transfer_money(from_account_id int, to_account_id int, amount decimal(19,4))
begin
	start transaction;
    if((select count(*) from accounts where id=from_account_id) <> 1) or ((select count(*) from accounts where id=to_account_id) <> 1) or ((select balance from accounts where id = from_account_id) < amount) or amount <= 0 then
    rollback;
    else 
    update accounts set balance = balance - amount where id=from_account_id;
	update accounts set balance = balance + amount where id=to_account_id;
    commit;
    end if;
end 

-- 15. Log Accounts Trigger
-- Create another table – logs(log_id, account_id, old_sum, new_sum). Add a trigger to the accounts table that enters a new entry into the logs table every time the sum on an account changes.

create table logs(
	log_id int auto_increment primary key,
    account_id int not null,
    old_sum decimal(19,4),
    new_sum decimal(19,4)
);

create trigger tr_changes_to_sum
after update on accounts
for each row
begin
	insert into logs(account_id, old_sum, new_sum) values (old.id, old.balance, new.balance);
end 

-- 16. Emails Trigger
-- Create another table – notification_emails(id, recipient, subject, body). Add a trigger to logs table to create new email whenever new record is inserted in logs table. The following data is required to be filled for each email:
-- · recipient – account_id
-- · subject – "Balance change for account: {account_id}"
-- · body - "On {date (current date)} your balance was changed from {old} to {new}."

create table logs (
    log_id int primary key auto_increment,
    account_id int not null,
    old_sum decimal(19,4),
    new_sum decimal(19,4)
);

create trigger tr_update
after update
on accounts
for each row
begin
    insert into logs(account_id, old_sum, new_sum)
    values (old.id, old.balance, new.balance);
end;

create table notification_emails (
    id int primary key auto_increment,
    recipient int not null,
    subject varchar(2000),
    body text
);

create trigger tr_email_notification
after insert on logs
for each row
begin
    insert into notification_emails(recipient, subject, body)
    values(new.account_id, 
        concat('Balance change for account: ', new.account_id), 
        concat('On ',  date_format(now(), '%b, %d, %Y at %r'), ' your balance was changed from ', round(new.old_sum,0), ' to ', round(new.new_sum, 0), '.'));
end;