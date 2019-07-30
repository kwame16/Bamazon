var inquirer = require("inquirer");
var mysql = require ("mysql");


var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "Lanyla2330!",
    database:"bamazon",
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connected as id " + connection.threadId);

    inquirer.prompt([
        {type:"list",
        message:"choose from the following function: ",
        choices:["Songs sung by an Artist", "Artist who have appeared on the top 5000",
            "Data from a specific range", "Songs in the top 5000"],
            name:"userChoice"


    }])

    afterConnection();
  });
  
  function afterConnection() {
    connection.query("SELECT * FROM songs", function(err, res) {
      if (err) throw err;
      console.log(res);
      connection.end();
    });
};
