drop database if exists bamazon;

create database bamazon;

use bamazon;

create table Products(
item_id int auto_increment not null,
product_name varchar(60) not null,
department_name VARCHAR(30) not null,
price decimal(6,2) not null,
stock_quanity int not null,
primary key(item_id)
);

insert into products (product_name, department_name, price, stock_quanity)
values ("6-pack Non-Stick Saucepot", "Kitchen", 100.00, 25);

insert into products (product_name, department_name, price, stock_quanity)
values ("3-pack Non-Stick Saucepot", "Kitchen", 50.00, 50);

insert into products (product_name, department_name, price, stock_quanity)
values ("Wok", "Kitchen", 35.00, 50);

insert into products (product_name, department_name, price, stock_quanity)
values ("Chef Execitive Knifes 10-Pack", "Kitchen", 300.00, 150);

insert into products (product_name, department_name, price, stock_quanity)
values ("King size Down Pillow", "Bedding", 100.00, 30);

insert into products (product_name, department_name, price, stock_quanity)
values ("4-Pc 1000 Thread Count Egyptian Cotton", "Bedding", 400.00, 50);

insert into products (product_name, department_name, price, stock_quanity)
values ("King Down Comforter", "Bedding", 299.99, 30);

insert into products (product_name, department_name, price, stock_quanity)
values ("Levis Jeans", "Clothing", 70.00, 100);

insert into products (product_name, department_name, price, stock_quanity)
values ("North Face Steep Tech ", "Clothing", 250.00, 100);

insert into products (product_name, department_name, price, stock_quanity)
values ("Nike LeBron James XX", "Clothing", 140.00, 150);