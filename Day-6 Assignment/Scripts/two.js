console.log("Two");

function printTable(num) {
    var input = num.value;
    if(!isNaN(input)) {
        var table="";
        var number="";
        for(i=1;i<=10;i++) {
            number = input * i;
            table +=  input + " x " + i + " = " + number + "<br/>";
        }
        document.getElementById("mul").innerHTML = table;
    }
    else {
        document.getElementById("mul").innerHTML = "Please Enter a valid Number";
    }
}