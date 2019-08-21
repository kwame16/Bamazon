//installed mysq; & inquirer
const inquirer = require("inquirer");
const mysql = require("mysql");
require("console.table");

// Created connection to my mySQL
const connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "password123",
  database: "bamazon"
});

// initallizing the mySQL connection
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  displayProducts();
});

// Grabbing data from  table created in mySQL
function displayProducts() {
  connection.query("SELECT * FROM products", function(err, data) {
    if (err) throw err;
    console.table(data);

    buy();
    //   function
  });
}

function buy() {
  inquirer
    .prompt([
      {
        name: "productSelect",
        type: "input",
        message: "Do you know the ID of the product you would like to purchase?"
      },
      {
        name: "unitsWanted",
        type: "input",
        message: "How many units of the product would you like to buy?"
      }
    ])
    .then(function(answer) {
      // console.log(answer);

      if (answer) {
        replinishInventory(answer.productSelect, answer.unitsWanted);
        // console.log(answer);
      } else {
        connection.end();
      }
    });
}
// created function to replinsh inventory taken from user
function replinishInventory(product, quantity) {
  let sentence ="UPDATE products SET stock_quantity = stock_quantity - ?  WHERE item_id = ? " 
  console.log(sentence);
  connection.query("UPDATE products SET stock_quantity = stock_quantity - ?  WHERE item_id = ? ",[quantity,product],
    function(err, res) {
      console.log(err);
      console.log(res);
      // console.log(res);
      console.log(
        "\nSuccessfully purchased " + quantity + " " + product + "'s!"
      );
      displayProducts();
    }
  );
}
