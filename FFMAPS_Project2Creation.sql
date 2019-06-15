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
   Drop Tables
********************************************************************************/
--drop table UserInfo cascade constraints;
--drop table UserType cascade constraints;
--drop table Placeable cascade constraints;
--drop table PlaceableType cascade constraints;
--drop table VendorStocks cascade constraints;
--drop table ItemInfo cascade constraints;
--drop table LocationInfo cascade constraints;
--drop table ItemInfo cascade constraints;
--drop table Contact cascade constraints;

/*******************************************************************************
   Create Tables
********************************************************************************/
CREATE TABLE UserInfo
(
    UserId NUMBER PRIMARY KEY NOT NULL,
    Username VARCHAR2(25) UNIQUE NOT NULL,
    Password VARCHAR2(25) NOT NULL,
    FirstName VARCHAR2(25) NOT NULL,
    LastName VARCHAR2(25) NOT NULL,
    UserTypeId NUMBER NOT NULL
);

CREATE TABLE UserType
(
    UserTypeId NUMBER PRIMARY KEY NOT NULL,
    UserType VARCHAR2(25) NOT NULL
);

CREATE TABLE Placeable
(
    PlaceableId NUMBER PRIMARY KEY NOT NULL,
    PlaceableTypeId NUMBER NOT NULL
);

CREATE TABLE PlaceableType
(
    PlaceableTypeId NUMBER PRIMARY KEY NOT NULL,
    PlaceableType VARCHAR2(25) NOT NULL
);

CREATE TABLE VendorStocks
(
    VendorStockId NUMBER PRIMARY KEY NOT NULL,
    ItemId NUMBER UNIQUE NOT NULL,
    PlaceableId NUMBER NOT NULL,
    StockAvailable NUMBER NOT NULL
);

CREATE TABLE ItemInfo
(
    ItemId NUMBER PRIMARY KEY NOT NULL,
    ItemName VARCHAR2(25) NOT NULL
);

CREATE TABLE Event
(
    EventId NUMBER PRIMARY KEY NOT NULL,
    StartDate VARCHAR(25) NOT NULL,
    EndDate VARCHAR(25) NOT NULL,
    LocationId NUMBER NOT NULL,
    ContactId NUMBER NOT NULL
);

CREATE TABLE LocationInfo
(
    LocationId NUMBER PRIMARY KEY NOT NULL,
    AddressLine1 VARCHAR2(25) NOT NULL,
    AddressLine2 VARCHAR2(25),
    City VARCHAR2(25) NOT NULL,
    State VARCHAR2(25) NOT NULL,
    PostalCode VARCHAR2(5) NOT NULL
);

CREATE TABLE Contact
(
    ContactId NUMBER PRIMARY KEY NOT NULL,
    FirstName VARCHAR2(25) NOT NULL,
    LastName VARCHAR2(25) NOT NULL,
    Email VARCHAR2(50) NOT NULL,
    PhoneNumber VARCHAR2(25)
);

CREATE TABLE Receipt
(
    ReceiptId VARCHAR(10) PRIMARY KEY NOT NULL,
    FirstName VARCHAR2(25) NOT NULL,
    LastName VARCHAR2(25) NOT NULL,
    NumberofTickets NUMBER NOT NULL,
    LocationId NUMBER NOT NULL,
    EventId NUMBER NOT NULL,
    DateofPurchase VARCHAR(25) NOT NULL
);

/*******************************************************************************
   Create Foreign Keys
********************************************************************************/
ALTER TABLE UserInfo ADD CONSTRAINT FK_UserTypeId
    FOREIGN KEY (UserTypeId) REFERENCES UserType (UserTypeId) ON DELETE CASCADE;

ALTER TABLE Placeable ADD CONSTRAINT FK_PlaceableId
    FOREIGN KEY (PlaceableTypeId) REFERENCES PlaceableType (PlaceableTypeId) ON DELETE CASCADE; 
    
ALTER TABLE VendorStocks ADD CONSTRAINT FK_ItemId
    FOREIGN KEY (ItemId) REFERENCES ItemInfo (ItemId) ON DELETE CASCADE;

ALTER TABLE Event ADD CONSTRAINT FK_LocationId
    FOREIGN KEY (LocationId) REFERENCES LocationInfo (LocationId) ON DELETE CASCADE;    

ALTER TABLE Event ADD CONSTRAINT FK_ContactId
    FOREIGN KEY (ContactId) REFERENCES Contact (ContactId) ON DELETE CASCADE;
    
/*******************************************************************************
   Populate Tables
********************************************************************************/
INSERT INTO UserType (UserTypeId, UserType) VALUES (1, 'Owner');  
INSERT INTO UserType (UserTypeId, UserType) VALUES (2, 'Manager');     
INSERT INTO UserType (UserTypeId, UserType) VALUES (3, 'Attendant');    

INSERT INTO PlaceableType (PlaceableTypeId, PlaceableType) VALUES (1, 'Ride');
INSERT INTO PlaceableType (PlaceableTypeId, PlaceableType) VALUES (2, 'Concession');
INSERT INTO PlaceableType (PlaceableTypeId, PlaceableType) VALUES (3, 'Game');

INSERT INTO ItemInfo (ItemId, ItemName) VALUES (1, 'Cotton Candy');
INSERT INTO ItemInfo (ItemId, ItemName) VALUES (2, 'Corndog');
INSERT INTO ItemInfo (ItemId, ItemName) VALUES (3, 'Popsicle');
INSERT INTO ItemInfo (ItemId, ItemName) VALUES (4, 'Churro');

INSERT INTO Placeable (PlaceableId, PlaceableTypeId) VALUES (1, 2);
INSERT INTO Placeable (PlaceableId, PlaceableTypeId) VALUES (2, 2);
INSERT INTO Placeable (PlaceableId, PlaceableTypeId) VALUES (3, 1);
INSERT INTO Placeable (PlaceableId, PlaceableTypeId) VALUES (4, 1);
INSERT INTO Placeable (PlaceableId, PlaceableTypeId) VALUES (5, 3);

INSERT INTO VendorStocks (VendorStockId, ItemId, PlaceableId, StockAvailable) VALUES (1, 1, 1, 10);
INSERT INTO VendorStocks (VendorStockId, ItemId, PlaceableId, StockAvailable) VALUES (2, 2, 1, 17);
INSERT INTO VendorStocks (VendorStockId, ItemId, PlaceableId, StockAvailable) VALUES (3, 3, 1, 50);
INSERT INTO VendorStocks (VendorStockId, ItemId, PlaceableId, StockAvailable) VALUES (4, 4, 1, 22);

INSERT INTO UserInfo (UserId, UserName, Password, FirstName, LastName, UserTypeId) VALUES (1, 'owner', 'pass', 'Jess', 'Jesse', 1);
INSERT INTO UserInfo (UserId, UserName, Password, FirstName, LastName, UserTypeId) VALUES (2, 'manager', 'pass', 'Ronald', 'McDonald', 2);
INSERT INTO UserInfo (UserId, UserName, Password, FirstName, LastName, UserTypeId) VALUES (3, 'attendant', 'pass', 'Matt', 'Donald', 3);

INSERT INTO LocationInfo (LocationId, AddressLine1, City, State, PostalCode) VALUES (1, '111 First St', 'Gotham', 'New York', '64591');
INSERT INTO LocationInfo (LocationId, AddressLine1, City, State, PostalCode) VALUES (2, '222 Second Blvd', 'Atlantis', 'N/A', '62442');
INSERT INTO LocationInfo (LocationId, AddressLine1, City, State, PostalCode) VALUES (3, '333 Third Ave', 'Hogwarts', 'Europe', '32416');
INSERT INTO LocationInfo (LocationId, AddressLine1, City, State, PostalCode) VALUES (4, '496 High St', 'Morgantown', 'West Virginia', '26505');

commit;
exit;