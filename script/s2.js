var a=false;
knopka.onclick=function(){
	fn()
}
black.onclick=function(){
	fn()
}
fn=function(){
	if(a==false){
		menu.style.left="0px";
		knopka.style.left="250px";
		a=true;
		black.style.width="100%";
		black.style.height="754px";
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
exit.onclick=function(){
	anketa.style.left="-10000px";
}