module.exports = {
    getUserByName: function (tabl,obj) {
        var trouv=false;
    	var i=0;
    	console.log("length: "+tabl.length);
    	while(!trouv && i<tabl.length){
    		//console.log(obj)
    	    //console.log(tabl[i]);
    		if(obj.username===tabl[i].username){
    			trouv=true;
    			console.log("ok!");
    		}
    			i++;
    	}
    	if(trouv){
    	    console.log("position: "+i);
    	    obj["position"]=i;
    	    obj["score"]=tabl[i-1].score;
    	    return obj;
    	}
    	else{
    	    return 0;
    	}
      },
      getUserByPos: function (tabl,obj) {
            var pos=obj.position;
          	if(pos<=tabl.length){
          	    console.log("position: "+pos);
          	    obj["username"]=tabl[pos-1].username;
          	    obj["score"]=tabl[pos-1].score;
          	    return obj;
          	}
          	else{
          	    return 0;
          	}
      },
      getTop: function (tabl,nbPos) {
            obj=[];
            for(let i=0; i<nbPos&&i<tabl.length;i++){
                let tmp=tabl[i];
                tmp["position"]=i+1;
                obj.push(tmp);
            }
          	return obj;
      },
};