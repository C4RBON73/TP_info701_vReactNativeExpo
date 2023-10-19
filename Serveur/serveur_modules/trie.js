module.exports = {
  insertion: function (tabl,obj) {
    var trouv=false;
	var i=0;
	//console.log("length: "+tabl.length);
	while(!trouv && i<tabl.length){
		//console.log(obj)
	    //console.log(tabl[i]);
		if(parseInt(obj.score)>parseInt(tabl[i].score)){
			trouv=true;
			//console.log("ok!");
		} else {
			i++;
		}
	}
	//console.log("index: "+i);
	//console.log(tabl);
	tabl.splice(i,0,obj);
	//console.log(tabl);
  },
  dictature: function (tabl,obj) {
	  tabl.find( (o,i) => {
		  if(o.username === obj.username){
			 tabl.splice(i,1);
			 return true;
		  }
	  });	  
  }
};

//ngrok