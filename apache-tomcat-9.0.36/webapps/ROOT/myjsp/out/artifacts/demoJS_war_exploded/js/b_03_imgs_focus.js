/*
* 轮换器
*/
var timer;
var num = 0;
var pic =["../img/学校_1620×1080_01.jpg","../img/学校_1620×1080_02.jpg","../img/学校_1620×1080_03.jpg","../img/学校_1620×1080_04.jpg","../img/学校_1620×1080_05.jpg","../img/学校_1620×1080_06.jpg"];

function rotation() {
    document.getElementById("rotpic").src=pic[num];
    num++;
    if(num === pic.length)
        num = 0;
    timer = setTimeout("rotation()",2000);
}
function showPre() {
    clearTimeout(timer);
    if(num>0)
        num--;
	else
		num=pic.length-1;
    document.getElementById("rotpic").src=pic[num];
	timer = setTimeout("rotation()",2000);
}

function showNext(){
    clearTimeout(timer);
    if(num<pic.length-1)
        num++;
	else
		num=0;
    document.getElementById("rotpic").src=pic[num];
	timer = setTimeout("rotation()",2000);
}

function stopScroll() {
    clearTimeout(timer);
}

/* 等比例缩小图片尺寸 */
function changeImg(objImg)
{
    var most = 830;        //设置最大宽度
    if(objImg.width > most)
    {
        var scaling = 1-(objImg.width-most)/objImg.width;
        //计算缩小比例
        objImg.width = objImg.width*scaling;
        //objImg.height = objImg.height;            //img元素没有设置高度时将自动等比例缩小
        objImg.height = objImg.height*scaling;    //img元素设置高度时需进行等比例缩小
    }
}