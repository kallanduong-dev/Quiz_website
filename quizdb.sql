DROP SCHEMA IF EXISTS quizdb;
CREATE SCHEMA quizdb;

USE quizdb;

CREATE TABLE Quizzes (
  Quiz_ID SMALLINT UNSIGNED NOT NULL UNIQUE AUTO_INCREMENT,
  Category VARCHAR(60) NOT NULL,
  Quiz_title VARCHAR(20) NOT NULL,
  PRIMARY KEY (Quiz_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE Questions (
  Question_ID SMALLINT UNSIGNED NOT NULL UNIQUE AUTO_INCREMENT,
  Quiz_ID SMALLINT UNSIGNED NOT NULL,
  Question VARCHAR(60) NOT NULL,
  Option1 VARCHAR(60) NOT NULL,
  Option2 VARCHAR(60) NOT NULL,
  Option3 VARCHAR(60) NOT NULL,
  Option4 VARCHAR(60) NOT NULL,
  Answer SMALLINT UNSIGNED NOT NULL,
  PRIMARY KEY (Question_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO Quizzes VALUES (1,'Sports','Basketball Quiz');
INSERT INTO Questions VALUES (1,1,'Best Player?','MJ','Kobe','JLIN','Barkley', 3);
INSERT INTO Questions VALUES (2,1,'MVP?','Jokic','Giannis','Doncic','Curry', 1);
INSERT INTO Questions VALUES (3,1,'What is the best shot?','Skyhook','Three','Dunk','Reverse Layup', 2);
INSERT INTO Questions VALUES (4,1,'Who is the best NBA team?','Mavs','Lakers','Wizards','Bulls', 3);
INSERT INTO Questions VALUES (5,1,'Who won NBA in 2019?','Raps','Golden State','OKC','Bucks', 1);

INSERT INTO Quizzes VALUES (2,'Sports','Soccer Quiz');
INSERT INTO Questions VALUES (6,2,'Best Player?','Messi','Son','Ronaldo','Kagawa', 4);
INSERT INTO Questions VALUES (7,2,'Who won PL in 2020?','Chelsea','Liverpool','Man Utd','Man City', 2);
INSERT INTO Questions VALUES (8,2,'Who scored the 40 yard overhead kick?','Messi','Ronaldo','Ibrahimovic','Lewandowski', 3);
INSERT INTO Questions VALUES (9,2,'Who is the best team?','Barcelona','Real Madrid','Liverpool','Adelaide United', 3);
INSERT INTO Questions VALUES (10,2,'Who won the world cup in 2010?','Spain','Brazil','Germany','France', 1);