-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';


USE `sati25kfy4p9qm1c` ;

-- -----------------------------------------------------
-- Table `Students`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sati25kfy4p9qm1c`.`Students` (
  `studentID` INT NOT NULL AUTO_INCREMENT,
  `fName` VARCHAR(45) NOT NULL,
  `lName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`studentID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Notes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sati25kfy4p9qm1c`.`Notes` (
  `noteID` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `noteText` TEXT(500) NOT NULL,
  `studentID` INT NOT NULL,
  PRIMARY KEY (`noteID`),
  FOREIGN KEY (`studentID`) REFERENCES `sati25kfy4p9qm1c`.`Students` (`studentID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Educators`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sati25kfy4p9qm1c`.`Educators` (
  `educatorID` INT NOT NULL AUTO_INCREMENT,
  `fName` VARCHAR(45) NOT NULL,
  `lName` VARCHAR(45) NOT NULL,
  `emailAddress` VARCHAR(55) NOT NULL UNIQUE,
  `password` VARCHAR(75) NOT NULL,
  PRIMARY KEY (`educatorID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Classes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sati25kfy4p9qm1c`.`Classes` (
  `classID` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(75) NOT NULL,
  `period` INT NULL,
  `educatorID` INT NOT NULL,
  PRIMARY KEY (`classID`),
    FOREIGN KEY (`educatorID`) REFERENCES `sati25kfy4p9qm1c`.`Educators` (`educatorID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `studentInClass`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sati25kfy4p9qm1c`.`studentInClass` (
  `classID` INT NOT NULL,
  `studentID` INT NOT NULL,
  PRIMARY KEY (`classID`, `studentID`),
    FOREIGN KEY (`classID`) REFERENCES `sati25kfy4p9qm1c`.`Classes` (`classID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    FOREIGN KEY (`studentID`) REFERENCES `sati25kfy4p9qm1c`.`Students` (`studentID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PointTypes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sati25kfy4p9qm1c`.`PointTypes` (
  `pointID` INT AUTO_INCREMENT,
  `pointName` VARCHAR(75) NOT NULL,
  `defaultDailyPoints` INT NULL,
  PRIMARY KEY (`pointID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PointsInClasses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sati25kfy4p9qm1c`.`PointsInClasses` (
  `pointID` INT NOT NULL,
  `classID` INT NOT NULL,
  PRIMARY KEY (`pointID`, `classID`),
    FOREIGN KEY (`pointID`) REFERENCES `sati25kfy4p9qm1c`.`Points` (`pointID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    FOREIGN KEY (`classID`) REFERENCES `sati25kfy4p9qm1c`.`Classes` (`classID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PointLogs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sati25kfy4p9qm1c`.`PointLogs` (
  `pointLogID` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `points` INT NOT NULL,
  `pointID` INT NOT NULL,
  `studentID` INT NOT NULL,
  PRIMARY KEY (`pointLogID`),
    FOREIGN KEY (`pointID`) REFERENCES `sati25kfy4p9qm1c`.`Points` (`pointID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    FOREIGN KEY (`studentID`) REFERENCES `sati25kfy4p9qm1c`.`Students` (`studentID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ClassNotes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sati25kfy4p9qm1c`.`ClassNotes` (
  `classNoteID` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `noteText` TEXT(500) NOT NULL,
  `classID` INT NOT NULL,
  PRIMARY KEY (`classNoteID`),
    FOREIGN KEY (`classID`) REFERENCES `sati25kfy4p9qm1c`.`Classes` (`classID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- Insert test educators
INSERT INTO Educators (fName, lName, emailAddress, password)
	VALUES ("Hermes", "Conrad", "conradh@planetexpress.edu", "Manwich!"),
			("Zapp", "Brannigan", "branniganz@numbus.edu", "itsVelour#1");
            
-- Insert test Classes
INSERT INTO Classes (name, period, educatorID)
	VALUES ("Orchestra", 3, 2),
			("Calculus", NULL, 1),
            ("Ceramics", 6, 1);

-- Insert test students
INSERT INTO Students (fName, lName)
	VALUES ("Bart", "Simpson"),
			("Marge", "Simpson"),
            ("Ned", "Flanders");
            
-- Insert test students into classes
INSERT INTO studentInClass
	VALUES (1, 1),
			(2, 1),
            (2, 3),
            (2, 2),
            (3, 2);
            
-- INSERT test Notes
INSERT INTO Notes (date, noteText, studentID)
	VALUES ("2023-10-20", "Needs help at lunch on Tuesday", 2),
		("2023-10-20", "Cello needs bridge repaired", 1);

-- Insert test PointTypes
INSERT INTO PointTypes (pointName, defaultDailyPoints)
	VALUES ("Participation Points", 4),
			("Has Supplies", 2),
            ("Homework Check", 2);

-- Insert test PointsInClasses
INSERT INTO PointsInClasses
	VALUES (1, 1),
			(2, 1),
            (1, 2);
            
-- Insert test ClassNotes
INSERT INTO ClassNotes (date, noteText, classID)
	VALUES ("2023-10-20", "Send reminder email about performance on November 23rd", 1),
			("2023-10-20", "Make copies of homework 7 to use as sub lesson", 2);
    
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
