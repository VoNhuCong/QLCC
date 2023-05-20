alter table QLCC.cars drop constraint fk_car_of_member;
alter table QLCC.members drop constraint fk_member_of_apartment;
alter table QLCC.members drop constraint fk_member_of_family;
alter table QLCC.phone_numbers drop constraint fk_phone_of_member;
alter table QLCC.apartments drop constraint fk_owner_apartment;

drop table QLCC.apartments;
drop table QLCC.cars;
drop table QLCC.familys;
drop table QLCC.members;
drop table QLCC.phone_numbers;