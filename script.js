*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,sans-serif;
scroll-behavior:smooth;
}

body{
background:#081b29;
color:white;
}

header{
display:flex;
justify-content:space-between;
padding:20px 10%;
background:#051129;
position:fixed;
width:100%;
z-index:100;
}

.logo{
font-size:30px;
font-weight:bold;
color:#00eeff;
text-decoration:none;
}

nav a{
margin-left:25px;
color:white;
text-decoration:none;
transition:.3s;
}

nav a:hover{
color:#00eeff;
}

section{
padding:100px 10%;
}

.home{
display:flex;
justify-content:space-between;
align-items:center;
min-height:100vh;
}

.home-img img{
width:350px;
border-radius:50%;
border:6px solid #00eeff;
box-shadow:0 0 30px cyan;
}

.home-content h1{
font-size:60px;
}

.home-content h3{
font-size:32px;
}

.typing{
color:#00eeff;
}

.social{
margin:30px 0;
}

.social a{
display:inline-flex;
justify-content:center;
align-items:center;
width:45px;
height:45px;
border:2px solid cyan;
border-radius:50%;
margin-right:15px;
color:white;
font-size:22px;
transition:.5s;
}

.social a:hover{
background:cyan;
color:black;
box-shadow:0 0 20px cyan;
}

.btn{
display:inline-block;
padding:12px 28px;
background:#00eeff;
color:black;
text-decoration:none;
font-weight:bold;
border-radius:30px;
}

h2{
text-align:center;
font-size:40px;
margin-bottom:40px;
}

.skills{
display:grid;
gap:20px;
}

.bar{
height:12px;
background:#333;
border-radius:20px;
overflow:hidden;
}

.bar span{
display:block;
height:100%;
background:cyan;
}

.project-box{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:25px;
}

.card{
background:#112e42;
padding:25px;
border-radius:15px;
transition:.4s;
}

.card:hover{
transform:translateY(-10px);
box-shadow:0 0 20px cyan;
}

form{
display:flex;
flex-direction:column;
gap:15px;
}

input,textarea{
padding:15px;
border:none;
border-radius:10px;
}

button{
padding:15px;
background:cyan;
border:none;
font-size:18px;
cursor:pointer;
font-weight:bold;
}

footer{
padding:20px;
text-align:center;
background:#051129;
}

@media(max-width:768px){

.home{
flex-direction:column;
text-align:center;
}

.home-img img{
width:250px;
margin-top:40px;
}

header{
flex-direction:column;
}

nav{
margin-top:10px;
}

}
