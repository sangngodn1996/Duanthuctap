create database Duanthuctap
use Duanthuctap
go

create table Account
(
username char(10) primary key,
password varchar(20) not null,
fullname nvarchar(50) not null,
birthday date not null,
gender bit not null,
phone varchar(10) not null,
email nvarchar(100) not null,
images varchar(100) not null,
note nvarchar(100),
role bit not null default 0,
)
select * from account

create table Product
(
id char(10) primary key,
nameproduct nvarchar(50) not null,
birthday date not null,
gender bit not null,
phone varchar(10) not null,
email nvarchar(100) not null,
images varchar(100) not null,
note nvarchar(100),
role bit not null default 0,
)
