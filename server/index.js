const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const mysql = require("mysql");
const cors = require('cors');
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "cruddatabase"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post("/api/insert", (req, res) => {
    const movieName = req.body.movieName;
    const movieReview = req.body.movieReview;
    //If error try in MySQL WorkBench ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
    const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES (?,?);";
    db.query(sqlInsert, [movieName, movieReview], (err, result) => {
        console.log(err)
    });
});
app.listen(3001, () => {
    console.log("listen on 3001")
});