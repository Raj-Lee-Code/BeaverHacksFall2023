-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';


USE `sati25kfy4p9qm1c` ;

-- -----------------------------------------------------
-- Table `mydb`.`Students`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sati25kfy4p9qm1c`.`Students` (
  `studentID` INT NOT NULL AUTO_INCREMENT,
  `fName` VARCHAR(45) NOT NULL,
  `lName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`studentID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Notes`
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
-- Table `mydb`.`Educators`
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
-- Table `mydb`.`Classes`
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
-- Table `mydb`.`studentInClass`
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
-- Table `mydb`.`Points`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sati25kfy4p9qm1c`.`Points` (
  `pointID` INT NOT NULL,
  `pointName` VARCHAR(75) NOT NULL,
  `defaultDailyPoints` INT NULL,
  PRIMARY KEY (`pointID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`PointsInClasses`
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
-- Table `mydb`.`PointLogs`
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
-- Table `mydb`.`ClassNotes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sati25kfy4p9qm1c`.`ClassNotes` (
  `classNoteID` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `noteText` VARCHAR(45) NOT NULL,
  `classID` INT NOT NULL,
  PRIMARY KEY (`classNoteID`),
    FOREIGN KEY (`classID`) REFERENCES `sati25kfy4p9qm1c`.`Classes` (`classID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
