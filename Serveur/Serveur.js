const express = require("express");
const app = express();
const path = require('path');
const fs = require('fs');
const trie = require('./serveur_modules/trie');
const port = 3000;

const leaderboard = path.join(__dirname, 'data', 'leaderboard.json');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
	res.send("hello World!");
});

app.get("/leaderboard", (req, res) => {
    fs.exists(leaderboard, (exists) => {
        if(exists) res.sendFile(leaderboard);
        else       res.status(500).send("No leaderbord yet");
    });
});

app.post("/leaderboard", (req, res) => {
    res.status(405).send('Method Not Allowed: post leaderboard');
});

app.get("/updateScore", (req, res) => {
    res.status(405).send('Method Not Allowed: get updateScore');
});

app.post("/updateScore", (req, res) =>{
    let user=req.body.username;
    let score=req.body.score;
	console.log(user);
	console.log(score);
	if(!user||!score||user===''){
        res.status(418).send('Wong requested!');
        return -1;
	}
	let obj = [];
	fs.exists(leaderboard, (exists) => {
		if(exists){
			console.log("reading file "+leaderboard+"...");
			fs.readFile(leaderboard, (err, data) => {
				if(err){
					console.log(err);
				} else {
					obj = JSON.parse(data);
					//console.log(obj);
					console.log("writing file "+leaderboard+"...");
					let valeur={"username":req.body.username, "score" : req.body.score};
					trie.dictature(obj,valeur);
					trie.insertion(obj,valeur);
					//console.log(obj);
					let json = JSON.stringify(obj);
					//console.log(json+" json");
					fs.writeFileSync(leaderboard, json);
			}});
		} else {
			console.log("creating "+leaderboard+"...");
			console.log("writing file "+leaderboard+"...");
			obj.push({"username":req.body.username, "score" : req.body.score});
			//console.log(obj);
			let json = JSON.stringify(obj);
			//console.log(json+" json");
			fs.writeFileSync(leaderboard, json);
		}
		
	});
	res.status(201).send("ok "+req.body.username+" "+req.body.score);
});
app.listen(port, () =>{
	console.log("Application exemple à l'écoure sur le port "+port+"!");
});

/*
recup util et score
renvoie leader board
*/