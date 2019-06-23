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
    PlaceableTypeId NUMBER NOT NULL,
    EmployeeCapacity NUMBER NOT NULL,
    PlaceableName VARCHAR2(25) NOT NULL,
    OwnerId NUMBER NOT NULL,
    PlaceableSize NUMBER NOT NULL
);

CREATE TABLE PlaceableType
(
    PlaceableTypeId NUMBER PRIMARY KEY NOT NULL,
    PlaceableType VARCHAR2(25) NOT NULL
);

CREATE TABLE OwnerInfo
(
    OwnerId NUMBER PRIMARY KEY NOT NULL,
    OwnerName VARCHAR2(25) NOT NULL
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

CREATE TABLE StockOrder
(
    OrderId NUMBER PRIMARY KEY NOT NULL,
    ItemId NUMBER NOT NULL,
    Amount NUMBER NOT NULL
);

CREATE TABLE Event
(
    EventId NUMBER PRIMARY KEY NOT NULL,
    StartDate VARCHAR(25) NOT NULL,
    EndDate VARCHAR(25) NOT NULL,
    LocationId NUMBER NOT NULL,
    ContactId NUMBER NOT NULL,
    StatusId NUMBER NOT NULL
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

CREATE TABLE EventStatusInfo
(
    StatusId NUMBER PRIMARY KEY NOT NULL,
    Status VARCHAR(25) NOT NULL
);

CREATE TABLE Schedule
(
    ScheduleItemId NUMBER PRIMARY KEY NOT NULL,
    EventId NUMBER NOT NULL,
    UserId NUMBER NOT NULL,
    ScheduleDay VARCHAR(25) NOT NULL,
    PlaceableId NUMBER NOT NULL
);

create sequence receipt_seq;

CREATE TABLE Receipt
(
    ReceiptId VARCHAR(10) PRIMARY KEY NOT NULL,
    FirstName VARCHAR2(25) NOT NULL,
    LastName VARCHAR2(25) NOT NULL,
    Email VARCHAR2(50) NOT NULL,
    NumberofTickets NUMBER NOT NULL,
    LocationId NUMBER NOT NULL,
    EventId NUMBER NOT NULL,
    DateofPurchase VARCHAR2(25) NOT NULL
);

CREATE TABLE Maps
(
    MapEntryId NUMBER PRIMARY KEY NOT NULL,
    MapId NUMBER NOT NULL,
    EventId NUMBER NOT NULL,
    PlaceableId NUMBER NOT NULL,
    Transform VARCHAR2(50)
);



/*******************************************************************************
   Create Foreign Keys
********************************************************************************/
ALTER TABLE UserInfo ADD CONSTRAINT FK_UserTypeId
    FOREIGN KEY (UserTypeId) REFERENCES UserType (UserTypeId) ON DELETE CASCADE;

ALTER TABLE Placeable ADD CONSTRAINT FK_PlaceableId
    FOREIGN KEY (PlaceableTypeId) REFERENCES PlaceableType (PlaceableTypeId) ON DELETE CASCADE;
    
ALTER TABLE Placeable ADD CONSTRAINT FK_OwnerId
    FOREIGN KEY (OwnerId) REFERENCES OwnerInfo (OwnerId) ON DELETE CASCADE;    
    
ALTER TABLE VendorStocks ADD CONSTRAINT FK_VendorStocksPlaceableId
    FOREIGN KEY (PlaceableId) REFERENCES Placeable (PlaceableId) ON DELETE CASCADE;    
    
ALTER TABLE VendorStocks ADD CONSTRAINT FK_ItemId
    FOREIGN KEY (ItemId) REFERENCES ItemInfo (ItemId) ON DELETE CASCADE;

ALTER TABLE Event ADD CONSTRAINT FK_LocationId
    FOREIGN KEY (LocationId) REFERENCES LocationInfo (LocationId) ON DELETE CASCADE;    

ALTER TABLE Event ADD CONSTRAINT FK_ContactId
    FOREIGN KEY (ContactId) REFERENCES Contact (ContactId) ON DELETE CASCADE;

ALTER TABLE Event ADD CONSTRAINT FK_EventStatusId
    FOREIGN KEY (StatusId) REFERENCES EventStatusInfo (StatusId) ON DELETE CASCADE; 
    
ALTER TABLE Schedule ADD CONSTRAINT FK_ScheduleEventId
    FOREIGN KEY (EventId) REFERENCES Event (EventId) ON DELETE CASCADE;    
    
ALTER TABLE Schedule ADD CONSTRAINT FK_ScheduleUserId
    FOREIGN KEY (UserId) REFERENCES UserInfo (UserId) ON DELETE CASCADE; 

ALTER TABLE Schedule ADD CONSTRAINT FK_SchedulePlaceableId
    FOREIGN KEY (PlaceableId) REFERENCES Placeable (PlaceableId) ON DELETE CASCADE; 
    
ALTER TABLE Receipt ADD CONSTRAINT FK_ReceiptLocationId
    FOREIGN KEY (LocationId) REFERENCES LocationInfo (LocationId) ON DELETE CASCADE;    
 
ALTER TABLE Receipt ADD CONSTRAINT FK_ReceiptEventId
    FOREIGN KEY (EventId) REFERENCES Event (EventId) ON DELETE CASCADE;    

ALTER TABLE Maps ADD CONSTRAINT FK_MapEventId
    FOREIGN KEY (EventId) REFERENCES Event (EventId) ON DELETE CASCADE;
    
ALTER TABLE Maps ADD CONSTRAINT FK_MapPlaceableId
    FOREIGN KEY (PlaceableId) REFERENCES Placeable (PlaceableId) ON DELETE CASCADE;
        
/*******************************************************************************
   Create Sequences
********************************************************************************/           
CREATE SEQUENCE userinfo_seq START WITH 10 INCREMENT BY 1;    
CREATE SEQUENCE usertype_seq START WITH 4 INCREMENT BY 1;  
CREATE SEQUENCE placeable_seq START WITH 6 INCREMENT BY 1;  
CREATE SEQUENCE placeabletype_seq START WITH 4 INCREMENT BY 1;
CREATE SEQUENCE owner_seq START WITH 2 INCREMENT BY 1;  
CREATE SEQUENCE vendorstock_seq START WITH 5 INCREMENT BY 1;  
CREATE SEQUENCE iteminfo_seq START WITH 5 INCREMENT BY 1;  
CREATE SEQUENCE event_seq START WITH 4 INCREMENT BY 1;  
CREATE SEQUENCE location_seq START WITH 5 INCREMENT BY 1;  
CREATE SEQUENCE contact_seq START WITH 4 INCREMENT BY 1;  
CREATE SEQUENCE eventStatus_seq START WITH 5 INCREMENT BY 1;  
CREATE SEQUENCE schedule_seq START WITH 1 INCREMENT BY 1;  
CREATE SEQUENCE receipt_seq START WITH 4 INCREMENT BY 1;
CREATE SEQUENCE map_seq START WITH 6 INCREMENT BY 1;  

/*******************************************************************************
   Populate Tables
********************************************************************************/
INSERT INTO UserType (UserTypeId, UserType) VALUES (1, 'Owner');  
INSERT INTO UserType (UserTypeId, UserType) VALUES (2, 'Manager');     
INSERT INTO UserType (UserTypeId, UserType) VALUES (3, 'Attendant');    

INSERT INTO OwnerInfo (OwnerId, OwnerName) VALUES (1, 'Fantastic Fair');

INSERT INTO PlaceableType (PlaceableTypeId, PlaceableType) VALUES (1, 'Ride');
INSERT INTO PlaceableType (PlaceableTypeId, PlaceableType) VALUES (2, 'Concession');
INSERT INTO PlaceableType (PlaceableTypeId, PlaceableType) VALUES (3, 'Game');

INSERT INTO ItemInfo (ItemId, ItemName) VALUES (1, 'Cotton Candy');
INSERT INTO ItemInfo (ItemId, ItemName) VALUES (2, 'Corndog');
INSERT INTO ItemInfo (ItemId, ItemName) VALUES (3, 'Popsicle');
INSERT INTO ItemInfo (ItemId, ItemName) VALUES (4, 'Churro');

INSERT INTO EventStatusInfo (StatusId, Status) VALUES (1, 'Pending');
INSERT INTO EventStatusInfo (StatusId, Status) VALUES (2, 'Accepted');
INSERT INTO EventStatusInfo (StatusId, Status) VALUES (3, 'Declined');
INSERT INTO EventStatusInfo (StatusId, Status) VALUES (4, 'Completed');

INSERT INTO Placeable (PlaceableId, PlaceableTypeId, EmployeeCapacity, PlaceableName, OwnerId, PlaceableSize) VALUES (1, 2, 2, 'My Cabbages', 1, 1);
INSERT INTO Placeable (PlaceableId, PlaceableTypeId, EmployeeCapacity, PlaceableName, OwnerId, PlaceableSize) VALUES (2, 2, 2, 'All Dogs', 1, 1);
INSERT INTO Placeable (PlaceableId, PlaceableTypeId, EmployeeCapacity, PlaceableName, OwnerId, PlaceableSize) VALUES (3, 1, 1, 'Scrambler', 1, 4);
INSERT INTO Placeable (PlaceableId, PlaceableTypeId, EmployeeCapacity, PlaceableName, OwnerId, PlaceableSize) VALUES (4, 1, 1, 'Zero Gravity', 1, 4);
INSERT INTO Placeable (PlaceableId, PlaceableTypeId, EmployeeCapacity, PlaceableName, OwnerId, PlaceableSize) VALUES (5, 3, 1, 'Quarters', 1, 2);

INSERT INTO VendorStocks (VendorStockId, ItemId, PlaceableId, StockAvailable) VALUES (1, 1, 1, 10);
INSERT INTO VendorStocks (VendorStockId, ItemId, PlaceableId, StockAvailable) VALUES (2, 2, 1, 17);
INSERT INTO VendorStocks (VendorStockId, ItemId, PlaceableId, StockAvailable) VALUES (3, 3, 1, 50);
INSERT INTO VendorStocks (VendorStockId, ItemId, PlaceableId, StockAvailable) VALUES (4, 4, 1, 22);

INSERT INTO UserInfo (UserId, UserName, Password, FirstName, LastName, UserTypeId) VALUES (1, 'owner', 'pass', 'Jess', 'Jesse', 1);
INSERT INTO UserInfo (UserId, UserName, Password, FirstName, LastName, UserTypeId) VALUES (2, 'manager', 'pass', 'Ronald', 'McDonald', 2);
INSERT INTO UserInfo (UserId, UserName, Password, FirstName, LastName, UserTypeId) VALUES (3, 'attendant', 'pass', 'Matt', 'Donald', 3);
INSERT INTO UserInfo (UserId, UserName, Password, FirstName, LastName, UserTypeId) VALUES (4, 'at1', 'pass', 'Vinn', 'Disel', 3);
INSERT INTO UserInfo (UserId, UserName, Password, FirstName, LastName, UserTypeId) VALUES (5, 'at2', 'pass', 'Arnold', 'Schwarzenegger', 3);
INSERT INTO UserInfo (UserId, UserName, Password, FirstName, LastName, UserTypeId) VALUES (6, 'at3', 'pass', 'Lucy', 'Lawless', 3);
INSERT INTO UserInfo (UserId, UserName, Password, FirstName, LastName, UserTypeId) VALUES (7, 'at4', 'pass', 'Beck', 'Hansen', 3);
INSERT INTO UserInfo (UserId, UserName, Password, FirstName, LastName, UserTypeId) VALUES (8, 'at5', 'pass', 'Alice', 'InChains', 3);
INSERT INTO UserInfo (UserId, UserName, Password, FirstName, LastName, UserTypeId) VALUES (9, 'at6', 'pass', 'Brandy', 'McDonald', 3);

INSERT INTO LocationInfo (LocationId, AddressLine1, City, State, PostalCode) VALUES (1, '111 First St', 'Gotham', 'New York', '64591');
INSERT INTO LocationInfo (LocationId, AddressLine1, City, State, PostalCode) VALUES (2, '222 Second Blvd', 'Atlantis', 'N/A', '62442');
INSERT INTO LocationInfo (LocationId, AddressLine1, City, State, PostalCode) VALUES (3, '333 Third Ave', 'Hogwarts', 'Europe', '32416');
INSERT INTO LocationInfo (LocationId, AddressLine1, City, State, PostalCode) VALUES (4, '496 High St', 'Morgantown', 'West Virginia', '26505');

INSERT INTO Contact (ContactId, FirstName, LastName, Email, PhoneNumber) VALUES (1, 'Bruce', 'Wayne', 'notbatman@wayne.com', '203-555-4242');
INSERT INTO Contact (ContactId, FirstName, LastName, Email, PhoneNumber) VALUES (2, 'Clark', 'Kent', 'notsuperman@kent.com', '302-555-2424');
INSERT INTO Contact (ContactId, FirstName, LastName, Email, PhoneNumber) VALUES (3, 'Tony', 'Stark', 'iloveyou3000@endgame.com', '222-555-3000');

INSERT INTO Event (EventId, StartDate, EndDate, LocationId, ContactId, StatusId) VALUES (1, '2019-06-28', '2019-06-30', 1, 1, 2);
INSERT INTO Event (EventId, StartDate, EndDate, LocationId, ContactId, StatusId) VALUES (2, '2019-07-05', '2019-07-07', 2, 2, 2);
INSERT INTO Event (EventId, StartDate, EndDate, LocationId, ContactId, StatusId) VALUES (3, '2019-06-28', '2019-06-30', 3, 3, 1);

INSERT INTO Receipt (ReceiptId, FirstName, LastName, Email, NumberofTickets, LocationId, EventId, DateofPurchase) VALUES (1, 'Ed', 'Ted', 'edted@yahoo.com', 62, 1, 1, '2019-06-17');
INSERT INTO Receipt (ReceiptId, FirstName, LastName, Email, NumberofTickets, LocationId, EventId, DateofPurchase) VALUES (2, 'Jack', 'Jill', 'jackjill@hill.com', 2, 1, 1, '2019-06-16');
INSERT INTO Receipt (ReceiptId, FirstName, LastName, Email, NumberofTickets, LocationId, EventId, DateofPurchase) VALUES (3, 'Mitch', 'Miller', 'mitchmiller@yahoo.com', 1, 1, 1, '2019-06-15');

INSERT INTO Maps (MapEntryId, MapId, EventId, PlaceableId) VALUES (1, 1, 1, 1);
INSERT INTO Maps (MapEntryId, MapId, EventId, PlaceableId) VALUES (2, 1, 1, 2);
INSERT INTO Maps (MapEntryId, MapId, EventId, PlaceableId) VALUES (3, 1, 1, 3);
INSERT INTO Maps (MapEntryId, MapId, EventId, PlaceableId) VALUES (4, 1, 1, 4);
INSERT INTO Maps (MapEntryId, MapId, EventId, PlaceableId) VALUES (5, 1, 1, 5);

commit;
exit;
