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
	res.sendFile(leaderboard);
});
app.post("/updateScore", (req, res) =>{
	console.log(req.body.username);
	console.log(req.body.score);
	let obj = [];
	fs.exists(leaderboard, (exists) => {
		if(exists){
			console.log("reading file "+leaderboard+"...");
			fs.readFile(leaderboard, (err, data) => {
				if(err){
					console.log(err);
				} else {
					obj = JSON.parse(data);
					console.log(obj);
					console.log("writing file "+leaderboard+"...");
					let valeur={"username":req.body.username, "score" : req.body.score};
					trie.dictature(obj,valeur);
					trie.insertion(obj,valeur);
					console.log(obj);
					let json = JSON.stringify(obj);
					console.log(json+" json");
					fs.writeFileSync(leaderboard, json);
			}});
		} else {
			console.log("creating "+leaderboard+"...");
			console.log("writing file "+leaderboard+"...");
			obj.push({"username":req.body.username, "score" : req.body.score});
			console.log(obj);
			let json = JSON.stringify(obj);
			console.log(json+" json");
			fs.writeFileSync(leaderboard, json);
		}
		
	});
	res.send("ok "+req.body.username+" "+req.body.score);
});
app.listen(port, () =>{
	console.log("Application exemple à l'écoure sur le port "+port+"!");
});

/*
recup util et score
renvoie leader board
*/