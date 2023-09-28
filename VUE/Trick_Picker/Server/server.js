const express = require("express"),
    app = express(),
    port = process.env.PORT || 3001,
    cors = require("cors");


    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "skateboarding"
    });

app.use(cors());
app.listen(port, () => console.log("Backend server live on " + port));




// GET REQUESTS

app.get("/getalltypes", (req, res) => {
    con.query("SELECT trick_type FROM skate_tricks" , function (err, result) {
        if (err) throw err;

        var alltypes = [];
        let i = 0;
        do {
            if(!alltypes.includes(result[i].trick_type)){
                alltypes.push(result[i].trick_type);
            }
            i++;
        } while (i < result.length);

        res.json({ types: alltypes });
    });
});

app.get("/tricks_in_progress/", (req, res) => {
    con.query("SELECT * FROM tricks_in_progress JOIN skate_tricks st on tricks_in_progress.trick_id = st.trick_id" , function (err, result) {
        if (err) throw err;
        res.json({ tricks: result });
    });
});

app.get("/completed_tricks/", (req, res) => {
    con.query("SELECT * FROM completed_tricks JOIN skate_tricks st on completed_tricks.trick_id = st.trick_id" , function (err, result) {
        if (err) throw err;
        res.json({ tricks: result });
    });
});

app.get("/skate_trick/:id", (req, res) => {
    var id = req.params.id;

    con.query("SELECT trick_name, trick_type FROM skate_tricks" , function (err, result) {
        if (err) throw err;
        res.send(result[id]);
    });
});

app.get("/skate_tricks_by_type/:type", (req, res) => {
    var type = req.params.type;

    con.query("SELECT trick_name, trick_type FROM skate_tricks WHERE trick_type = '" + type + "'", function (err, result) {
        if (err) throw err;
        res.json({ tricks: result });
    });
});




// POST REQUESTS


app.post("/trick_in_progress/:trick_id", (req, res) => {
    var trick_id = req.params.trick_id;

    con.query("INSERT INTO open_challanges (trick_id) VALUES (" + trick_id + ")\"" , function (err) {
        if (err) throw err;
        res.send({ message: "New trick in progress created" });
    });
});

app.post("/completed_trick/:trick_id", (req, res) => {
    var trick_id = req.params.trick_id;

    con.query("INSERT INTO finished_challanges (trick_id) VALUES (" + trick_id + ")\"" , function (err) {
        if (err) throw err;
        res.send({ message: "New completed trick created" });
    });
});



// PUT REQUESTS



// DELETE REQUESTS


