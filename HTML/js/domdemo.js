/* var img = document.getElementById('h1');
alert(img);
var divs = document.getElementsByTagName('div');
for (let index = 0; index < divs.length; index++) {
    alert(divs[index]);  
}
document.getElementsByName("hobby");
document.getElementsByClassName("cls");

var div = divs[1];
div.innerHTML = "改变啦"; */

var img = document.getElementById("h1");
img.src = "img/3.jpg"
var divs = document.getElementsByTagName("div");
for (let index = 0; index < divs.length; index++) {
    divs[index].innerHTML += "<font color='red'>very good</font>";
}
var ins = document.getElementsByName("hobby");
for (let index = 0; index < ins.length; index++) {
    ins[index].checked = true;
    
}

function on() {
    alert("被点击啦");
}

var act = document.getElementById('btn2');

act.onclick = function(){
    alert("有被点击啦");
}
// 鼠标移入
act.onmouseover = function(){
    console.log("失去");
}
// 鼠标移出
act.onmouseout = function(){
    console.log("获得");
}
