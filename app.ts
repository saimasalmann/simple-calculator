const Num1=document.getElementById("num1") as HTMLInputElement;
const Num2=document.getElementById("num2") as HTMLInputElement;

const AddBtn = document.getElementById("add") as HTMLButtonElement;
const SubBtn = document.getElementById("sub") as HTMLButtonElement;
const MulBtn = document.getElementById("mul") as HTMLButtonElement;
const DivBtn = document.getElementById("div") as HTMLButtonElement;
const clear= document.getElementById("clear") as HTMLButtonElement;
const printResult=document.getElementById("result") as HTMLOutputElement;

function AddNumbers(){
    let a=parseFloat(Num1.value);
    let b=parseFloat(Num2.value);
    let result=a+b
    printResult.textContent=result.toString()

}

AddBtn.addEventListener("click",AddNumbers)

function SubNumbers(){
let a=parseFloat(Num1.value)
let b=parseFloat(Num2.value)
let result=a-b;
printResult.textContent=result.toString()
}
SubBtn.addEventListener("click",SubNumbers)
function MulNumbers(){
    let result=parseFloat(Num1.value)*parseFloat(Num2.value)
    printResult.textContent=result.toString()
}
MulBtn.addEventListener("click",MulNumbers)

function DivNumbers(){
    let a=parseFloat(Num1.value)
    let b= parseFloat(Num2.value)
    let result=a/b
    if(b===0 ){
        alert("Cannot divide by zero!")
    }else{
        printResult.textContent=result.toString()
    }

}
DivBtn.addEventListener("click",DivNumbers)

clear.addEventListener("click",function(){
    Num1.value=""
    Num2.value=""
    printResult.textContent=""
})
