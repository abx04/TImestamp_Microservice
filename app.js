var express=require('express');
var app=express();

var response={};

app.get('/:timestamp',function (req,res) {
    var time=req.params.timestamp;
    if(!isNaN(time)){
        var date=new Date(parseInt(time));
        if(date.toString()==="Invalid Date")
            response.valid=false;
        else{
            var day=date.getDate();
            var month=date.getMonth();
            var year=date.getFullYear();
            response.valid=true;
            response.Unix=time;
            response.Natural=day+'/'+month+'/'+year;
        }
        res.send(JSON.stringify(response));
    }
    else res.send("natural");
});

app.listen(8080);

