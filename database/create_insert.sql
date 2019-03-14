DROP DATABASE IF EXISTS cmsc128_test;
CREATE DATABASE IF NOT EXISTS cmsc128_test;
USE cmsc128_test;

CREATE TABLE user (
	studno varchar(10) NOT NULL,
	name varchar(25) NOT NULL,			
	constraint user_username_pk primary key(studno)
);

INSERT INTO user VALUES 
	('2003-12345', 'Candaza, Waldo'), 
	('2004-23456', 'Matienzo, Louie'), 
	('2005-34567', 'Naval, Lucas'), 
	('2006-45678', 'Palapar, Earl'), 
	('2007-56789', 'Ramilo, Jean');




