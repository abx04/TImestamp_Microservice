var timestamp=document.getElementById('timestamp');
var send=document.getElementById('send');
var response=document.getElementById('response');

send.onclick=function(){
    var time=timestamp.value;
    var xhr=new XMLHttpRequest();
    xhr.open('GET','/'+time,true);
    xhr.send(null);

    xhr.onload=function(){
        response.innerHTML=xhr.responseText;
    }
}
