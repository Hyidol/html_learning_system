// JavaScript Document
function show(i){
	var title=["1.喜欢你白云蓝天的魔法",
				"2.最美不过是下雨的屋檐",
				"3.就像幸得极光的景致",
				"4.晴空万里的初升高阳",
				"5.黄昏午后的百事安康"];
	for(var j=1;j<=5;j++){
		if(j===i) {
			document.getElementById("Rotator_" + j).style.display = "block";
			document.getElementById("fig_" + j).innerHTML = title[j - 1];
			document.getElementById("fig_" + j).className = "numberOver";
			//number的css宽度不够，只能显示前两个字符，要换成宽的numberOver
		}
		else{
			document.getElementById("Rotator_"+j).style.display="none";
			document.getElementById("fig_"+j).innerHTML=j;
			document.getElementById("fig_"+j ).className="number";
		}
	}
}