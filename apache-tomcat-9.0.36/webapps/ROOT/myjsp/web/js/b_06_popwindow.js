function openwindow(){
	window.open("b_06_school.html", "", "toolbars=0,scrollbars=0,location=0,statusbars=0,menubars=0,resizable=0,width=780,height=248");
}

function choose(obj){
	window.opener.document.getElementById("school").value = obj.innerHTML;
}

