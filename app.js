var express=require('express');
var app=express();

var response={};

app.get('/:timestamp',function (req,res) {
    var time=req.params.timestamp;

    if(!isNaN(time)) {
        var date = new Date(parseInt(time));
        if (date.toString() === 'Invalid Date') {
            response.valid = false;
            response.unix = null;
            response.natural = null;
        }

        else response = createResponse(true,time);
    }
    else{
        date=new Date(time);
        if(date.toString()==='Invlid String'){
            response.valid=false;
            response.unix=null;
            response.natural=null;
        }
        else response=createResponse(true,Date.parse(date));

    }
    res.send(JSON.stringify(response));
});

var createResponse=function (isValid,timestamp) {
    var naturalDate=new Date(parseInt(timestamp));
    var day=naturalDate.getDate();
    var month=alphaMonth(naturalDate.getMonth());
    var year=naturalDate.getFullYear();

    console.log(timestamp);
    console.log(naturalDate);
    console.log(day);
    console.log(month);
    console.log(year);

    var date=month+' '+day+', '+year;
    return {
        valid:isValid,
        unix:timestamp,
        natural:date
    }
};

var alphaMonth=function (month) {
    var monthArray=['January','February','March','April','May','June','July','August','September','October','November','December'];
    return monthArray[month];

}

app.listen(8080);

