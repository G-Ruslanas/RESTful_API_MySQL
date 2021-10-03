const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


//Database creation
const connection = require("./db_connection")
connection.con.query("CREATE DATABASE IF NOT EXISTS wikiSQL", function (err, result) {
  if (err) throw err;
});

//Database selection
const connect = require("./db_selection")

//Table creation
var sql = "CREATE TABLE IF NOT EXISTS articles (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255), content VARCHAR(255))";
connect.con.query(sql, function (err, result) {
    if (err) throw err;
  });

// API ROUTES
app.route("/articles")
  .get(function(req, res) {
    connect.con.query("SELECT * FROM articles", function (err, result) {
      if (err) throw err;
      else {
        res.send(result);
      }
    });
  })
  .post(function(req, res) {
    var sql = 'INSERT INTO articles VALUES ("'+null+'","'+req.body.title+'","'+req.body.content+'")';
    connect.con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  })
  .delete(function(req, res) {
    var sql = "DELETE FROM articles";
    connect.con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("All records were deleted");
  });
  });
// API ROUTES


// API SPECIFIC ARTICLE
app.route("/articles/:articleTitle")
.get(function(req, res){
  console.log(req.params.articleTitle);
  connect.con.query('SELECT * FROM articles WHERE title = "'+req.params.articleTitle+'"', function (err, result) {
    if (err) throw err;
    res.send(result);
  });
})
.put(function(req, res){
  var sql = 'UPDATE articles SET title = "'+req.body.title+'", content="'+req.body.content+'" WHERE title = "'+req.params.articleTitle+'"';
  connect.con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
})
.delete(function(req, res){
  var sql = 'DELETE FROM articles WHERE title="'+req.params.articleTitle+'"';
    connect.con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Specific record was deleted!");
  });
});
// API SPECIFIC ARTICLE


app.listen(3000, function() {
    console.log("Server started on port 3000");
  });