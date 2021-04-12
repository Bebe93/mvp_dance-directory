require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
<<<<<<< HEAD
  database: DB_NAME || "mvp_dancing",
  multipleStatements: true,
||||||| c42e16e
  database: DB_NAME || "mvp_dancing",
  multipleStatements: true
=======
  database: DB_NAME || "yogaproject ",
  multipleStatements: true,
>>>>>>> b4e9beaa8171bfec23a68fc63f49160b06eef990
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

<<<<<<< HEAD
  let sql =
    "DROP TABLE if exists classes; CREATE TABLE classes (id INT NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, day varchar(255) NOT NULL, time TIME NOT NULL, address varchar(255) NOT NULL, price double NOT NULL, partner BOOLEAN NOT NULL,style INT NOT NULL, instructor INT NOT NULL, image varchar(255), PRIMARY KEY (id));";
||||||| c42e16e
  let sql = "DROP TABLE if exists classes; CREATE TABLE classes (id INT NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, day varchar(255) NOT NULL, time TIME NOT NULL, address varchar(255) NOT NULL, price double NOT NULL, partner BOOLEAN NOT NULL,style INT NOT NULL, instructor INT NOT NULL, image varchar(255), PRIMARY KEY (id));";
=======
  let sql =
    "DROP TABLE if exists classes; CREATE TABLE classes (id INT NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, day varchar(20) NOT NULL, time TIME NOT NULL, address varchar(255) NOT NULL, price decimal NOT NULL, style INT NOT NULL, instructor INT NOT NULL, image varchar(255), PRIMARY KEY (id));";
>>>>>>> b4e9beaa8171bfec23a68fc63f49160b06eef990
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation 'classes' was successful!");
    console.log("Closing...");
  });

<<<<<<< HEAD
  sql =
    "DROP TABLE if exists dance_styles; CREATE TABLE dance_styles (id INT NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, video_url varchar(255) NOT NULL, description TEXT NOT NULL, image varchar(255), PRIMARY KEY (id));";
||||||| c42e16e
  sql="DROP TABLE if exists dance_styles; CREATE TABLE dance_styles (id INT NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, video_url varchar(255) NOT NULL, description TEXT NOT NULL, image varchar(255), PRIMARY KEY (id));";
=======
  sql =
    "DROP TABLE if exists yoga_styles; CREATE TABLE yoga_styles (id INT NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, description TEXT NOT NULL, image varchar(255), PRIMARY KEY (id));";
>>>>>>> b4e9beaa8171bfec23a68fc63f49160b06eef990
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation 'dance_styles' was successful!");
    console.log("Closing...");
  });

  sql =
    "DROP TABLE if exists instructors; CREATE TABLE instructors (id INT NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, introduction TEXT NOT NULL, email varchar(255) NOT NULL, photo varchar(255) NOT NULL, PRIMARY KEY (id));";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation 'instructors' was successful!");
    console.log("Closing...");
  });

  con.end();
});
