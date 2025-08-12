let FirstNumber="";
let SecondNumber="";
let Operation="";

function append(number){
    if(Operation===""){
        FirstNumber+=number;
        document.getElementById("result").value=FirstNumber;
    }else{
        SecondNumber+=number;
        document.getElementById("result").value=SecondNumber;
    }
}
function operation(op){
    Operation=op;
}
function calculate(){
    let result;
    switch(Operation){
        case '+':
            result=parseInt(FirstNumber)+parseInt(SecondNumber);
            break;
        case '-':
            result=parseInt(FirstNumber)-parseInt(SecondNumber);
            break;
        case '*':
            result=parseInt(FirstNumber)*parseInt(SecondNumber);
            break;
        case '/':
            result=parseInt(FirstNumber)/parseInt(SecondNumber);
            break;
    }
    document.getElementById("result").value=result;
}
function clearresult(){
    FirstNumber="";
    SecondNumber="";
    Operation="";
    document.getElementById("result").value="";
}
function playSound(soundId) {
    let sound = document.getElementById(soundId);
    sound.currentTime = 0; 
    sound.play();
}

function append(num) {
    document.getElementById("result").value += num;
    playSound("clickSound");
}

function operation(op) {
    document.getElementById("result").value += op;
    playSound("equalSound");
}

function clearresult() {
    document.getElementById("result").value = "";
    playSound("clickSound");
}

function calculate() {
    try {
        document.getElementById("result").value = eval(document.getElementById("result").value);
    } catch (e) {
        document.getElementById("result").value = "Error";
    }
    playSound("equalSound");
}
