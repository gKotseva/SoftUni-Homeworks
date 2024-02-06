-- 1. Find Book Titles
-- Write a SQL query to find books which titles start with "The". Order the result by id.

select title from books
where substring(title,1 , 4) = 'the ';

-- 2. Replace Titles
-- Write a SQL query to find books which titles start with "The" and replace the substring with 3 asterisks. Retrieve data about the updated titles. Order the result by id.

select replace(title, 'The', '***') from books
where substring(title, 1, 4) = 'The ';

-- 3. Sum Cost of All Books
-- Write a SQL query to sum prices of all books. Format the output to 2 digits after decimal point.

select round(sum(cost), 2) from books;

-- 4. Days Lived
-- Write a SQL query to calculate the days that an author lived. Your query should return:
-- · Full Name – the full name of the author.
-- · Days Lived – days that he/she lived. NULL values mean that the author is still alive.

select concat_ws(' ', first_name, last_name) as "Full Name", timestampdiff(day, born, died) as "Days Lived" from authors;

-- 5. Harry Potter Books
-- Write a SQL query to retrieve titles of all the Harry Potter books. Order the information by id.

select title from books
where title like 'Harry Potter and the%';