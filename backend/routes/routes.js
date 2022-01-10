const dbconnection = require("../db/dbconnection");
const express = require("express");
const path = require('path');
const chatPath = path.normalize(path.join(__dirname + '..\\..\\..\\public\\chat.ejs'));
const homePath = path.normalize(path.join(__dirname + '..\\..\\..\\public\\home.ejs'));

module.exports = app => {
    
    const connection = dbconnection();

    app.use(express.static(path.normalize(path.join(__dirname + '..\\..\\..\\public'))));

    app.get('/chat', (req, res) => {
        connection.query('SELECT * FROM messages_list ORDER BY id ASC LIMIT 50', (err, result) => {
            res.render(chatPath, {
                message: result
            });
        })
        
    });

    app.get("/", (req, res) => {
        res.redirect("/home");
    });

    app.get("/home", (req, res) => {
        res.render(homePath);
    });

    app.post('/api/chat', (req, res) => {
        connection.query(`INSERT messages_list(author, message_content) values ('${req.headers.author}', '${req.headers.message}');`, (err, result) => {});
    });

}