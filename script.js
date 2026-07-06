const words=[
"Web Developer",
"Programmer",
"UI Designer",
"AI Enthusiast"
];

let i=0;
let j=0;
let current="";
let isDeleting=false;

function type(){

current=words[i];

if(!isDeleting){

document.getElementById("typing").innerHTML=current.substring(0,j++);

if(j>current.length){

isDeleting=true;

setTimeout(type,1200);

return;

}

}

else{

document.getElementById("typing").innerHTML=current.substring(0,j--);

if(j==0){

isDeleting=false;

i++;

if(i==words.length)
i=0;

}

}

setTimeout(type,isDeleting?70:120);

}

type();

document.getElementById("theme-btn").onclick=function(){

document.body.classList.toggle("light");

}
