const num1 = document.getElementById("number1");
const num2 = document.getElementById("number2");
const num = document.getElementsByClassName("form-control");

function operation() {
    var operator = document.getElementsByClassName("form-checkbox");
    var message = document.getElementById("message");
    var num1 = parseFloat(document.getElementById("number1").value);
    var num2 = parseFloat(document.getElementById("number2").value);
    var res = document.getElementById("result");
    for(const radio of operator) {
        if(radio.checked) {
            operator = radio.value;
            break;
        }
    }
    if (operator !== "add" && operator !== "sub" && operator !== "mul" && operator !== "div")
    {
        message.innerHTML = "Hãy chọn một phép toán";
        return;
    }
    if (  isNaN(num1) && isNaN(num2) ){
        message.innerHTML = "Vui lòng nhập số thứ nhất và số thứ hai";
        return;
    }

    if (isNaN(num1) || num1 === "") {
        message.innerHTML = "Vui lòng nhập số thứ nhất hợp lệ";
        return;
    }
    if (isNaN(num2) || num === "") {
        message.innerHTML = "Vui lòng nhập số thứ hai hợp lệ";
        return;
    }
    message.innerHTML = "";
    var result = 0;
    if (operator === "add") {
        result = (num1) + (num2);
    } else if (operator === "sub") {
        result = (num1) - (num2);
    } else if (operator === "mul") {
        result = (num1) * (num2);
    } else if (operator === "div") {
        result = (num1) / (num2);
    }
    res.innerHTML = result;
    message.innerHTML = "Thực hiện tính toán thành công";
}

num1.addEventListener("blur", () => {   
    const value1 = num1.value;
    const value2 = num2.value;
    const message = document.getElementById("message");
    if (isNaN(value1) || value1 === "" ) {
        message.innerHTML = "Vui lòng nhập số thứ nhất hợp lệ";
    }
    else {    
        if(value2 === "" || isNaN(value2)){
            message.innerHTML = "Vui lòng nhập số thứ hai hợp lệ";
        }
        else
        message.innerHTML ="";
    }
});

num2.addEventListener("blur", () => {
    const value2 = num2.value;
    const value1 = num1.value;
    const message = document.getElementById("message");
    if (isNaN(value2) || value2 === "" ) {
        message.innerHTML = "Vui lòng nhập số thứ hai hợp lệ";
    }
    else {  
        if(value1 === "" || isNaN(value1)){
            message.innerHTML = "Vui lòng nhập số thứ nhất hợp lệ";
        }
        else
        message.innerHTML ="";
    }
});

num.addEventListener("blur", () => {
    const value = num.value;
    const message = document.getElementById("message");
    if (isNaN(value) || value === "") {
        message.innerHTML = "Vui lòng nhập số hợp lệ";
    }
    else
        message.innerHTML ="";
});