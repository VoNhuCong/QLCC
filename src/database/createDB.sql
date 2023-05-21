membersCREATE TABLE members (
        member_id int PRIMARY KEY  AUTO_INCREMENT,
        name varchar(45),
        sex varchar(45),
        date_of_birth date,
        identitycard int,
        apartment_id int,
        family_id int
    );
    
    CREATE TABLE apartments (
        apartment_id int PRIMARY KEY,
        floot int,
        area int, 
        owner_id int NOT NULL,
        time_start date,
        status varchar(100)
    );
    
    CREATE TABLE cars (
        car_id int PRIMARY KEY,
        car_type varchar(45),
        car_number varchar(45),
        status varchar(45),
        member_id int NOT NULL
    );
    
    CREATE TABLE familys (
        family_id int PRIMARY KEY,
        family_mode bit,
        status varchar(45)
    );
    
    CREATE TABLE phone_numbers (
        phone_number varchar(45),
        member_id int NOT NULL
    );
    
ALTER TABLE QLCC.phone_numbers
ADD CONSTRAINT fk_phone_of_member FOREIGN KEY (member_id) REFERENCES QLCC.members(member_id);

ALTER TABLE QLCC.cars
ADD CONSTRAINT fk_car_of_member FOREIGN KEY (member_id) REFERENCES QLCC.members(member_id);

ALTER TABLE QLCC.apartments
ADD CONSTRAINT fk_owner_apartment FOREIGN KEY (owner_id) REFERENCES QLCC.members(member_id);

ALTER TABLE QLCC.members
ADD CONSTRAINT fk_member_of_apartment FOREIGN KEY (apartment_id) REFERENCES QLCC.apartments(apartment_id);

ALTER TABLE QLCC.members
ADD CONSTRAINT fk_member_of_family FOREIGN KEY (family_id) REFERENCES QLCC.familys(family_id);