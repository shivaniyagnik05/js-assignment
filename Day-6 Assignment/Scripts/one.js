console.log("One");

// var count=0;
// function color(){
//     setTimeout("fun()",2000);
// }
// function fun(){
//     var s=new Array("yellow","pink","blue","green","black");
//     if(count<=6){
//         document.bgColor=s[count++];
//         setTimeout("fun",2000);
//     }
//     else{
//         count=0;
//         color();
//     }
// }

var count=0;
function ss()
{
setTimeout("fun()",2000);
}
function fun()
{
var x =new 
Array("red","darkblue","sky","yellow","blue","pink","green");
if(count<=6)
{
document.bgColor=x[count++];
setTimeout("fun()",2000);
}
else
{
count=0;
ss();
}
}

