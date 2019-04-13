const RarbgApi = require('rarbg');
var fs=require('fs');
var rmdirSync = require('rmdir-sync');
var SearchModel=require('../model/searchModel');

module.exports.schedule=function(req,res){
    body=req.body;
    var searchElements=body.searchString.split(",");
    console.log("searching: "+JSON.stringify(body));
    console.log("length:"+searchElements.length);
    if(searchElements != 'undefined,undefined,undefined'){
        console.log("No undefined");
        if(searchElements.length > 0 )
        cleanupDir(body.userEmail,function(){
            createDir(body.userEmail,function(){
                searchElements.forEach(element => {  
                    if (!( element === 'undefined' )){
                             var searchModel=new SearchModel(body.userEmail,element,body.categoryValue,body.sortingType,body.minSeeders,body.isScheduledSearch);
                    
                             writeToFile(searchModel,function(){
                             console.log("saved item");
                             });
                         }
                        });
                    });
            });
    res.end(JSON.stringify("Data saved!"));
    }else{
        console.log("All undefined");
        cleanupDir(body.userEmail,function(){
            console.log("creating fresh dir!");
            createDir(body.userEmail,function(){
            });
        });
        res.end(JSON.stringify("No data present!"));

    }    
}


function writeToFile(searchModel,callback){
    fs.appendFileSync('schedule/user/'+searchModel.userEmail+"/"+searchModel.searchString,JSON.stringify(searchModel));
    callback();
}

function createDir(userEmail,callback){
    fs.mkdirSync('schedule/user/'+userEmail);
    fs.mkdirSync('schedule/userData/'+userEmail);
    console.log('Dir Created..schedule/user/'+userEmail);
    callback();
}
function cleanupDir(userEmail,callback){
    rmdirSync('schedule/user/'+userEmail);
    rmdirSync('schedule/userData/'+userEmail);
    console.log("cleaning up..schedule/user/"+userEmail);
    
    callback();
}