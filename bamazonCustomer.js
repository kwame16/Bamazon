const inquirer = require("inquirer");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "Lanyla2330!",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  displayProducts();

  function displayProducts() {
    connection.query("SELECT * FROM products", function(err, data) {
      if (err) throw err;
      console.table(data);

      buy();
      //   function
    });
  }
});

function buy() {
  inquirer.prompt([
    {
      type: "input",
      message: "Do you know the ID of the product you would like to purchase?",
      // choices:["Do you know the ID of the product you would like to purchase?",
      //         "How many units of the product would you like to buy?",
      name: "userChoice"
    },
    {
        type: "input",
        message: "How many units of the product would you like to buy?",
        name: "userChoice"
    },
  ]);
}
// });

//   connection.end();
