var logusr = document.getElementById("logusr");
var logpwd = document.getElementById("logpwd");
var error =  document.getElementById("error");

var bug = document.getElementsByClassName('input-group');

const usr = "admin";
const pwd = 12345;

function fnlogin(){
    if(logusr.value ===usr && ((logpwd.value - pwd) == 0)){
        console.log('1');
        return true;
    }
    else{
        error.innerHTML = 'invalid !';
        error.style.color = 'red';
        return false;
    }
}


logpwd.onfocus = function(){
    error.innerHTML = '';
}
logusr.onfocus = function(){
    error.innerHTML = '';
}

//-----------------------------end of script; login page-----------------------------