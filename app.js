var Num1 = document.getElementById("num1");
var Num2 = document.getElementById("num2");
var AddBtn = document.getElementById("add");
var SubBtn = document.getElementById("sub");
var MulBtn = document.getElementById("mul");
var DivBtn = document.getElementById("div");
var clear = document.getElementById("clear");
var printResult = document.getElementById("result");
function AddNumbers() {
    var a = parseFloat(Num1.value);
    var b = parseFloat(Num2.value);
    var result = a + b;
    printResult.textContent = result.toString();
}
AddBtn.addEventListener("click", AddNumbers);
function SubNumbers() {
    var a = parseFloat(Num1.value);
    var b = parseFloat(Num2.value);
    var result = a - b;
    printResult.textContent = result.toString();
}
SubBtn.addEventListener("click", SubNumbers);
function MulNumbers() {
    var result = parseFloat(Num1.value) * parseFloat(Num2.value);
    printResult.textContent = result.toString();
}
MulBtn.addEventListener("click", MulNumbers);
function DivNumbers() {
    var a = parseFloat(Num1.value);
    var b = parseFloat(Num2.value);
    var result = a / b;
    if (b === 0) {
        alert("Cannot divide by zero!");
    }
    else {
        printResult.textContent = result.toString();
    }
}
DivBtn.addEventListener("click", DivNumbers);
clear.addEventListener("click", function () {
    Num1.value = "";
    Num2.value = "";
    printResult.textContent = "";
});
