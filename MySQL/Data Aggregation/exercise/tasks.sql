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

