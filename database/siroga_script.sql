-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema SIROGA
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema SIROGA
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `SIROGA` DEFAULT CHARACTER SET utf8 ;
USE `SIROGA` ;

-- -----------------------------------------------------
-- Table `SIROGA`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SIROGA`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(50) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `surname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SIROGA`.`sistem`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SIROGA`.`sistem` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `broker_link` VARCHAR(255) NOT NULL,
  `hum_earth` DECIMAL(5,2) NOT NULL DEFAULT 0,
  `hum_air` DECIMAL(5,2) NOT NULL DEFAULT 0,
  `temp_earth` DECIMAL(5,2) NOT NULL DEFAULT 0,
  `temp_air` DECIMAL(5,2) NOT NULL DEFAULT 0,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `brokerlink_UNIQUE` (`broker_link` ASC),
  INDEX `fk_sistem_user_idx` (`user_id` ASC),
  CONSTRAINT `fk_sistem_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `SIROGA`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SIROGA`.`operation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SIROGA`.`operation` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SIROGA`.`operation_history`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SIROGA`.`operation_history` (
  `sistem_id` INT NOT NULL,
  `operation_id` INT NOT NULL,
  INDEX `fk_history_sistem1_idx` (`sistem_id` ASC),
  INDEX `fk_history_operation1_idx` (`operation_id` ASC),
  CONSTRAINT `fk_history_sistem1`
    FOREIGN KEY (`sistem_id`)
    REFERENCES `SIROGA`.`sistem` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_history_operation1`
    FOREIGN KEY (`operation_id`)
    REFERENCES `SIROGA`.`operation` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `SIROGA`.`mesure_history`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SIROGA`.`mesure_history` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `sistem_id` INT NOT NULL,
  `hum_earth` DECIMAL(5,2) NOT NULL,
  `hum_air` DECIMAL(5,2) NOT NULL,
  `temp_earth` DECIMAL(5,2) NOT NULL,
  `temp_air` DECIMAL(5,2) NOT NULL,
  `date` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_mesure_history_sistem1_idx` (`sistem_id` ASC),
  CONSTRAINT `fk_mesure_history_sistem1`
    FOREIGN KEY (`sistem_id`)
    REFERENCES `SIROGA`.`sistem` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
