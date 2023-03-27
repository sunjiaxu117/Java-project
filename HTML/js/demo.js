/* alert("hello  sjx");
window.alert("window");
document.write("document");
console.log("console"); */
// 用var声明变量
// var定义的变量为全局变量 可以重复声明  let关键字在代码块中为局部变量且不可重复定义 const为常量
var a = 10;
a = "张三";
/* {
    // ===全等比较  ==会进行类型转换  ===不会进行类型转换
    let x = 10;
    alert(x == "10");
    alert(x==="10");
} */
/* alert(a);
alert(typeof(a)); */


function add(a, b){
    return a + b;
}
var b = 10;
var c = 11;
alert(add(b, c));

var str = "hello string";
alert(str.indexOf("lo"));

// 定义数组 var arr = new Array(1,2,3,4)   var arr = [1,2,3,4]


// JSON串
var jsonstr = '{"name":"sun", "age" : 10, "addr":["bj","sh","xa"]}';
var h = JSON.parse(jsonstr);
document.write(h.name);
var strr = JSON.stringify(h);
alert(strr);