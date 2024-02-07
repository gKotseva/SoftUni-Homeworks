-- 1. Records' Count
-- Import the database and send the total count of records to Mr. Bodrog. Make sure nothing got lost.

select count(id) as count from wizzard_deposits;

-- 2. Longest Magic Wand
-- Select the size of the longest magic wand. Rename the new column appropriately.

select max(magic_wand_size) as 'longest_magic_wand' from wizzard_deposits;

-- 3. Longest Magic Wand Per Deposit Groups
-- For wizards in each deposit group show the longest magic wand. Sort result by longest magic wand for each deposit group in increasing order, then by deposit_group alphabetically. Rename the new column appropriately.

select deposit_group, max(magic_wand_size) as 'longest_magic_wand' from wizzard_deposits
group by deposit_group
order by `longest_magic_wand`, deposit_group asc;

-- 4. Smallest Deposit Group Per Magic Wand Size*
-- Select the deposit group with the lowest average wand size.

select deposit_group from wizzard_deposits
group by deposit_group having avg(magic_wand_size) limit 1;

-- 5. Deposits Sum
-- Select all deposit groups and its total deposit sum. Sort result by total_sum in increasing order.

select deposit_group, sum(deposit_amount) as 'total_sum' from wizzard_deposits
group by deposit_group
order by `total_sum`;

-- 6. Deposits Sum for Ollivander Family
-- Select all deposit groups and its total deposit sum but only for the wizards who has their magic wand crafted by Ollivander family. Sort result by deposit_group alphabetically.

select deposit_group, sum(deposit_amount) as 'total_sum' from wizzard_deposits
where `magic_wand_creator` = 'Ollivander family'
group by deposit_group
order by deposit_group;

-- 7. Deposits Filter
-- Select all deposit groups and its total deposit sum but only for the wizards who has their magic wand crafted by Ollivander family. After this, filter total deposit sums lower than 150000. Order by total deposit sum in descending order.

select deposit_group, sum(deposit_amount) as 'total_sum' from wizzard_deposits
where `magic_wand_creator` = 'Ollivander family'
group by deposit_group
having `total_sum` < 150000
order by `total_sum` desc;

-- 8. Deposit Charge
-- Create a query that selects:
-- • Deposit group
-- • Magic wand creator
-- • Minimum deposit charge for each group
-- Group by deposit_group and magic_wand_creator.
-- Select the data in ascending order by magic_wand_creator and deposit_group.

select deposit_group, magic_wand_creator, min(deposit_charge) as 'min_deposit_charge' from wizzard_deposits
group by deposit_group, magic_wand_creator
order by magic_wand_creator, deposit_group;

-- 9. Age Groups
-- Write down a query that creates 7 different groups based on their age.
-- Age groups should be as follows:
-- • [0-10]
-- • [11-20]
-- • [21-30]
-- • [31-40]
-- • [41-50]
-- • [51-60]
-- • [61+]
-- The query should return:
-- • Age groups
-- • Count of wizards in it
-- Sort result by increasing size of age groups.

select
case 
	when age >= 0 and age <= 10 then '[0-10]'
    when age >= 11 and age <= 20 then '[11-20]'
    when age >= 21 and age <= 30 then '[21-30]'
    when age >= 31 and age <= 40 then '[31-40]'
    when age >= 41 and age <= 50 then '[41-50]'
    when age >= 51 and age <= 60 then '[51-60]'
    else '[61+]'
end as age_group, count(age) as wizard_count
from wizzard_deposits
group by `age_group`
order by `age_group`;

-- 10. First Letter
-- Write a query that returns all unique wizard first letters of their first names only if they have deposit of type Troll Chest. Order them alphabetically. Use GROUP BY for uniqueness.

select left(first_name, 1) as first_letter from wizzard_deposits
where deposit_group = 'Troll Chest'
group by first_letter
order by first_letter;