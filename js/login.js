var all = document.getElementById('all');
var small = document.getElementById('small');
var main = document.getElementById('main');
var ways = document.getElementById('ways');

all.onclick = function(){
    ways.style.display = "block";
    all.style.display = "none";
    small.style.display = "block";
    main.style.height = "550px";
}

small.onclick = function(){
    ways.style.display = "none";
    all.style.display = "block";
    small.style.display = "none";
    main.style.height = "480px";
}