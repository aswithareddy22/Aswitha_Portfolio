const text=[
"Full Stack Developer",
"AI Enthusiast",
"Web Designer",
"Programmer"
];

let i=0;
let j=0;
let deleting=false;

function typing(){

let word=text[i];

if(!deleting){

document.getElementById("typing").innerHTML=word.substring(0,j++);

if(j>word.length){

deleting=true;

setTimeout(typing,1000);

return;

}

}else{

document.getElementById("typing").innerHTML=word.substring(0,j--);

if(j==0){

deleting=false;

i++;

if(i==text.length)i=0;

}

}

setTimeout(typing,deleting?70:120);

}

typing();

document.getElementById("theme").onclick=function(){

document.body.classList.toggle("light");

}
