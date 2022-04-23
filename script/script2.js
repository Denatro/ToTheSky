var a=false;
knopka.onclick=function(){
	fn()
}
black.onclick=function(){
	fn()
}
onkeydown = function(event){
	if(event.keyCode == 87){// нажали кнопку под номером 87 (w)
		anketa2.style.top="1200px";
		anketa2.style.left="50%";
	}
}
fn=function(){
	if(a==false){
		menu.style.left="0px";
		knopka.style.left="250px";
		a=true;
		black.style.width="100%";
		black.style.height="250%";
	}else{
		menu.style.left="-250PX";
		knopka.style.left="5px";
		a=false
		black.style.width="0px";
		black.style.height="0px";
	}
}
sokr.onmouseover=function(){
	sokr.innerHTML='<img src="kart/sokr.gif" width="100%" height="100%" alt="sdasd" style="margin-left: -40px;">';
	// sokr.style.background='url("kart/sokr.gif")';
	console.log(a);
}
document.onmousemove=function(){
	sokr.innerHTML='<img src="kart/sokr.png" width="81%" height="100%" style="margin-left: -25px">';
	// sokr.style.background='url("kart/sokr.png")'
	console.log(a);
}

var sh = document.getElementById("sh").style;
gh=function(){
	sh.top="200px";
	sh.color="white";
}
setTimeout(gh,250);
dh=function(){
	start.style.top="280px";
	start.style.color="white";
	start.style.background="#f0a664";
}
setTimeout(dh,550);
start.onmousedown=function(){
	start.style.background="#d8783c";
	start.style.color="lightgray"
}
start.onmouseup=function(){
	start.style.color="white";
	start.style.background="#f0a664";
}
