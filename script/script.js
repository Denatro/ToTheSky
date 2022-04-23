var a=false;
ln=function(){
	if(a==false){
		a=true;
		black.style.width="100%";
		black.style.height="1100px";
		pt.style.transform="rotate(20deg)";
		pt.style.left="-100px";
		r.style.width="200px";
		r.style.height="100px";
		r.style.border="2px solid black";
		r.style.fontSize="15";
	}else{
		a=false
		pt.style.left="-150px";
		black.style.width="0px";
		black.style.height="0px";
		pt.style.transform="rotate(0deg)";
		r.style.width="0px";
		r.style.height="0px";
		r.style.border="0px solid black";
		r.style.fontSize="0";
	}
}
knopka.onclick=function(){
	ln();
}
black.onclick=function(){
	ln();
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
	ln();
}