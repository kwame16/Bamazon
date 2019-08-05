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
values ("6-pack Non-Stick Saucepot", "Kitchen", 99.99, 22);

insert into products (product_name, department_name, price, stock_quanity)
values ("3-pack Non-Stick Saucepot", "Kitchen", 49.99, 50);

insert into products (product_name, department_name, price, stock_quanity)
values ("Wok", "Kitchen", 34.99, 22);

insert into products (product_name, department_name, price, stock_quanity)
values ("Execitive 10" "Chef Knife", "Kitchen", 299.99, 150);

insert into products (product_name, department_name, price, stock_quanity)
values ("King size Down Pillow", "Bedding", 99.99, 30);

insert into products (product_name, department_name, price, stock_quanity)
values ("4-Pc 1000 Thread Count Egyptian Cotton", "Bedding", 399.99, 113);

insert into products (product_name, department_name, price, stock_quanity)
values ("King Down Comforter", "Bedding", 299.99, 83);

insert into products (product_name, department_name, price, stock_quanity)
values ("Levis Jeans", "Clothing", 69.99, 200);

insert into products (product_name, department_name, price, stock_quanity)
values ("North Face Steep Tech ", "Clothing", 249.99, 200);

insert into products (product_name, department_name, price, stock_quanity)
values ("Nike LeBron James XX", "Clothing", 139.99, 234);