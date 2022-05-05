var logusr = document.getElementById("logusr");
var logpwd = document.getElementById("logpwd");
var error =  document.getElementById("error");
var forms = document.getElementById("forms");

var i=0;

var bug = document.getElementsByClassName('input-group');
var key = document.getElementById("key");

const usr = "admin";
const pwd = 12345;

forms.addEventListener("submit", function(event){
    if(i!=1){
        event.preventDefault();
    }
    else{
        alert('success'); //remove later
    }
})

function samp(a,b){
    if(a.value === usr && ((b.value - pwd) == 0)){
        error.innerHTML = '';
        i=1;

    }
    else{
        error.innerHTML = 'invalid !';
        error.style.color = 'red';
    }
}

function collect(callback){
    callback(logusr,logpwd);
}
key.onmousemove = function(){
    collect(samp);
}


logpwd.onfocus = function(){
    error.innerHTML = '';
    i=0;
}
logusr.onfocus = function(){
    error.innerHTML = '';
    i=0;
}

//-----------------------------end of script; login page-----------------------------
