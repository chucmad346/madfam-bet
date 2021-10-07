//javascript//
$(getLogin);
var request;
function getLogin(){
    request = new XMLHttpRequest();
    request.open("GET", "register.html");
    request.onreadystatechange = checkdat;
    request.send(null);
}

function checkdat(){
    if(request.readyState == 4){
        if(request.status == 200){
            $(".form").html(request.responseText);
        }else{
            $(".form").html(request.status + ":" + request.statusText);
        }
    }
}