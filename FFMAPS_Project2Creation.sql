/*******************************************************************************
   Fantastic Fair - Project2 Database - Version 1.0
   Script: FFMAPS_Project2Creation.sql
   Description: Creates and populates the Project 2 database.
   DB Server: Oracle
   Author: Trevor, Jimmy, Kenneth, Jon
   Endpoint: trevorheilman-revature.cstd3k3wevbm.us-east-2.rds.amazonaws.com
********************************************************************************/

/*******************************************************************************
   Drop database if it exists
********************************************************************************/
DROP USER project2 CASCADE;


/*******************************************************************************
   Create database
********************************************************************************/
CREATE USER project2
IDENTIFIED BY p4ssw0rd
DEFAULT TABLESPACE users
TEMPORARY TABLESPACE temp
QUOTA 10M ON users;

GRANT connect to project2;
GRANT resource to project2;
GRANT create session TO project2;
GRANT create table TO project2;
GRANT create view TO project2;

conn project2/p4ssw0rd

/*******************************************************************************
   Create Tables
********************************************************************************/
CREATE TABLE UserInfo
(
    UserId NUMBER UNIQUE NOT NULL,
    Username VARCHAR2(25) UNIQUE NOT NULL,
    Password VARCHAR2(25) NOT NULL,
    FirstName VARCHAR2(25) NOT NULL,
    LastName VARCHAR2(25) NOT NULL,
    UserTypeId NUMBER NOT NULL
);

CREATE TABLE UserType
(
    UserTypeId NUMBER UNIQUE NOT NULL,
    UserType VARCHAR(25)
);

CREATE TABLE Placeable
(
    PlaceableId NUMBER UNIQUE NOT NULL,
    PlaceableTypeId NUMBER NOT NULL
);

CREATE TABLE PlaceableType
(
    PlaceableTypeId NUMBER UNIQUE NOT NULL,
    PlaceableType VARCHAR(25)
);

CREATE TABLE Event
(
    EventId NUMBER UNIQUE NOT NULL,
    StartDate DATE NOT NULL,
    EndDate DATE NOT NULL,
    LocationId NUMBER NOT NULL,
    ContactId NUMBER NOT NULL
);

CREATE TABLE LocationInfo
(
    LocationId NUMBER UNIQUE NOT NULL,
    AddressLine1 VARCHAR(25) NOT NULL,
    AddressLine2 VARCHAR(25) NOT NULL,
    City VARCHAR(25) NOT NULL,
    State VARCHAR(25) NOT NULL,
    PostalCode VARCHAR(5) NOT NULL
);

CREATE TABLE Contact
(
    ContactId NUMBER UNIQUE NOT NULL,
    FirstName VARCHAR(25) NOT NULL,
    LastName VARCHAR(25) NOT NULL,
    Email VARCHAR(50) NOT NULL,
    PhoneNumber VARCHAR(25)
);

/*******************************************************************************
   Create Foreign Keys
********************************************************************************/
ALTER TABLE UserInfo ADD CONSTRAINT FK_UserTypeId
    FOREIGN KEY (UserTypeId) REFERENCES UserType (UserTypeId) On Delete Cascade;

ALTER TABLE Placeable ADD CONSTRAINT FK_PlaceableId
    FOREIGN KEY (PlaceableTypeId) REFERENCES PlaceableType (PlaceableTypeId) On Delete Cascade; 
    
ALTER TABLE Event ADD CONSTRAINT FK_LocationId
    FOREIGN KEY (LocationId) REFERENCES LocationInfo (LocationId) On Delete Cascade;    

ALTER TABLE Event ADD CONSTRAINT FK_ContactId
    FOREIGN KEY (ContactId) REFERENCES Contact (ContactId) On Delete Cascade;
    
/*******************************************************************************
   Populate Tables
********************************************************************************/
INSERT INTO UserType (UserTypeId, UserType) VALUES (1, 'Owner');  
INSERT INTO UserType (UserTypeId, UserType) VALUES (2, 'Manager');     
INSERT INTO UserType (UserTypeId, UserType) VALUES (3, 'Attendant');    

INSERT INTO PlaceableType (PlaceableTypeId, PlaceableType) VALUES (1, 'Ride');
INSERT INTO PlaceableType (PlaceableTypeId, PlaceableType) VALUES (2, 'Concession');
INSERT INTO PlaceableType (PlaceableTypeId, PlaceableType) VALUES (3, 'Game');

INSERT INTO UserInfo (UserId, UserName, Password, FirstName, LastName, UserType) VALUES (1, 'owner', 'pass', 'Jess', 'Jesse', 1);
INSERT INTO UserInfo (UserId, UserName, Password, FirstName, LastName, UserType) VALUES (2, 'manager', 'pass', 'Ronald', 'McDonald', 2);
INSERT INTO UserInfo (UserId, UserName, Password, FirstName, LastName, UserType) VALUES (1, 'attendant', 'pass', 'Matt', 'Donald', 1);

commit;
exit;