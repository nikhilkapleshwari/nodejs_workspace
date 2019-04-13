var fs=require('fs');
var lineReader = require('line-reader');

module.exports.getTorrent=function(req,res){
    body=req.body;
    console.log("********** Torrent: "+JSON.stringify(body));
    console.log("***********output:"+body.userEmail);

       
    fs.readdir('schedule/userData/'+body.userEmail, function(err, items) {
        console.log("Items:"+items);
        
        if(items != undefined ){
        for (var i=0; i<items.length; i++) {

            var matchString=body.searchString+'.etd';
            if(items[i]===matchString){
                console.log('torrentData found for:'+body.searchString);
                readUserDataFile(body,items[i],function(data){
                    res.end(data);
                });
                return;
            }
        }
    } 
    res.end(null);    
    });
}


function readUserDataFile(body,item,callback){
    fs.readFile('schedule/userData/'+body.userEmail+"/"+item,function(err,data){
        console.log('reading file');
        callback(JSON.stringify(JSON.parse(data)));
    });
}
