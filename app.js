var express=require('express');
var app=express();

var response={};

app.use('/',express.static(__dirname+'/public'));
app.get('/',function(req,res){
    res.redirect('/index.html');
})

app.get('/:timestamp',function (req,res) {
    var time=req.params.timestamp;

    if(!isNaN(time)) {
        var date = new Date(parseInt(time));
        if (date.toString() === 'Invalid Date') {
            createResponse(false);
        }

        else response = createResponse(true,time);
    }
    else{
        date=new Date(time);
        if(date.toString()==='Invlid String'){
            createResponse(false);
        }
        else response=createResponse(true,Date.parse(date));

    }
    res.send(JSON.stringify(response));
});

var createResponse=function (isValid,timestamp) {
    if(!isValid){
        return {
            valid:false,
            unix:null,
            natural:null
        }
    }
    else{
        var naturalDate=new Date(parseInt(timestamp));
        var day=naturalDate.getDate();
        var month=alphaMonth(naturalDate.getMonth());
        var year=naturalDate.getFullYear();

        var date=month+' '+day+', '+year;

        return {
            valid:isValid,
            unix:timestamp,
            natural:date
        }
    }
};

var alphaMonth=function (month) {
    var monthArray=['January','February','March','April','May','June','July','August','September','October','November','December'];
    return monthArray[month];

};

app.listen(8080);