-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema siroga
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema siroga
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `siroga` DEFAULT CHARACTER SET latin1 ;
USE `siroga` ;

-- -----------------------------------------------------
-- Table `siroga`.`status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `siroga`.`status` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `siroga`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `siroga`.`user` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `username` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `surname` VARCHAR(255) NOT NULL,
  `lastname` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `UK_ob8kqyqqgmefl0aco34akdtpe` (`email` ASC),
  UNIQUE INDEX `UK_sb8bbouer5wak8vyiiy4pf2bx` (`username` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `siroga`.`sistem`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `siroga`.`sistem` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `broker` VARCHAR(255) NOT NULL,
  `hum_air_max` DOUBLE NOT NULL,
  `hum_air_min` DOUBLE NOT NULL,
  `hum_earth_max` DOUBLE NOT NULL,
  `hum_earth_min` DOUBLE NOT NULL,
  `temp_air_max` DOUBLE NOT NULL,
  `temp_air_min` DOUBLE NOT NULL,
  `temp_earth_max` DOUBLE NOT NULL,
  `temp_earth_min` DOUBLE NOT NULL,
  `status_id` BIGINT(20) NULL DEFAULT NULL,
  `user_id` BIGINT(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK5m3iwnx5vruju9cl7bf9v9cid` (`status_id` ASC),
  INDEX `FKgqskuem3ycpv7y0twm34j1467` (`user_id` ASC),
  CONSTRAINT `FK5m3iwnx5vruju9cl7bf9v9cid`
    FOREIGN KEY (`status_id`)
    REFERENCES `siroga`.`status` (`id`),
  CONSTRAINT `FKgqskuem3ycpv7y0twm34j1467`
    FOREIGN KEY (`user_id`)
    REFERENCES `siroga`.`user` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `siroga`.`measure_history`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `siroga`.`measure_history` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `broker` VARCHAR(255) NOT NULL,
  `hum_air` DOUBLE NOT NULL,
  `hum_earth` DOUBLE NOT NULL,
  `temp_air` DOUBLE NOT NULL,
  `temp_earth` DOUBLE NOT NULL,
  `sistem_id` BIGINT(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FKch4clfg6y28ntt4n4adihi3it` (`sistem_id` ASC),
  CONSTRAINT `FKch4clfg6y28ntt4n4adihi3it`
    FOREIGN KEY (`sistem_id`)
    REFERENCES `siroga`.`sistem` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `siroga`.`operation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `siroga`.`operation` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `siroga`.`operation_history`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `siroga`.`operation_history` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `operation_id` BIGINT(20) NULL DEFAULT NULL,
  `sistem_id` BIGINT(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FKnosdxfvj0kn4to3ykxf8tuhal` (`operation_id` ASC),
  INDEX `FKhk6a9iw8xo12i9uvgw7h0ls8y` (`sistem_id` ASC),
  CONSTRAINT `FKhk6a9iw8xo12i9uvgw7h0ls8y`
    FOREIGN KEY (`sistem_id`)
    REFERENCES `siroga`.`sistem` (`id`),
  CONSTRAINT `FKnosdxfvj0kn4to3ykxf8tuhal`
    FOREIGN KEY (`operation_id`)
    REFERENCES `siroga`.`operation` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

INSERT INTO operation (description)
VALUES ("Regar");
INSERT INTO operation (description)
VALUES ("Agregar");
INSERT INTO operation (description)
VALUES ("Remover");
INSERT INTO operation (description)
VALUES ("Alerta");
INSERT INTO operation (description)
VALUES ("Reposar");



INSERT INTO status (description)
VALUES("Activo");
INSERT INTO status (description)
VALUES("Reposo");
INSERT INTO status (description)
VALUES("Regando");




INSERT INTO sistem (broker_link, hum_air, hum_earth, temp_air, temp_earth)
VALUES("Test","10","10","10","10")
