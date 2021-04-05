let casillaNum = document.getElementById("casillaNum");
let mensajes = document.getElementById("mensajes");

let btnNum1 = document.getElementById("btnNum1");
let btnNum2 = document.getElementById("btnNum2");
let btnNum3 = document.getElementById("btnNum3");
let btnNum4 = document.getElementById("btnNum4");
let btnNum5 = document.getElementById("btnNum5");
let btnNum6 = document.getElementById("btnNum6");
let btnNum7 = document.getElementById("btnNum7");
let btnNum8 = document.getElementById("btnNum8");
let btnNum9 = document.getElementById("btnNum9");
let btnNum0 = document.getElementById("btnNum0");

let btnSum = document.getElementById("btnSum");
let btnIgual = document.getElementById("btnIgual");

let num1Temp = "";
let num2Temp = "";
let op = "";

//funsiones

const btnNum1F = () => {
  if (op === "") {
    casillaNum.innerHTML = num1Temp + "1";
    num1Temp = num1Temp + "1";
  } else {
    casillaNum.innerHTML = num2Temp + "1";
    num2Temp = num2Temp + "1";
  }
};

const btnNum2F = () => {
  if (op === "") {
    casillaNum.innerHTML = num1Temp + "2";
    num1Temp = num1Temp + "2";
  } else {
    casillaNum.innerHTML = num2Temp + "2";
    num2Temp = num2Temp + "2";
  }
};
const btnNum3F = () => {
  if (op === "") {
    casillaNum.innerHTML = num1Temp + "3";
    num1Temp = num1Temp + "3";
  } else {
    casillaNum.innerHTML = num2Temp + "3";
    num2Temp = num2Temp + "3";
  }
};
const btnNum4F = () => {
  if (op === "") {
    casillaNum.innerHTML = num1Temp + "4";
    num1Temp = num1Temp + "4";
  } else {
    casillaNum.innerHTML = num2Temp + "4";
    num2Temp = num2Temp + "4";
  }
};

const btnNum5F = () => {
  if (op === "") {
    casillaNum.innerHTML = num1Temp + "5";
    num1Temp = num1Temp + "5";
  } else {
    casillaNum.innerHTML = num2Temp + "5";
    num2Temp = num2Temp + "5";
  }
};

const btnNum6F = () => {
  if (op === "") {
    casillaNum.innerHTML = num1Temp + "6";
    num1Temp = num1Temp + "6";
  } else {
    casillaNum.innerHTML = num2Temp + "6";
    num2Temp = num2Temp + "6";
  }
};

const btnNum7F = () => {
  if (op === "") {
    casillaNum.innerHTML = num1Temp + "7";
    num1Temp = num1Temp + "7";
  } else {
    casillaNum.innerHTML = num2Temp + "7";
    num2Temp = num2Temp + "7";
  }
};

const btnNum8F = () => {
  if (op === "") {
    casillaNum.innerHTML = num1Temp + "8";
    num1Temp = num1Temp + "8";
  } else {
    casillaNum.innerHTML = num2Temp + "8";
    num2Temp = num2Temp + "8";
  }
};

const btnNum9F = () => {
  if (op === "") {
    casillaNum.innerHTML = num1Temp + "9";
    num1Temp = num1Temp + "9";
  } else {
    casillaNum.innerHTML = num2Temp + "9";
    num2Temp = num2Temp + "9";
  }
};

const btnNum0F = () => {
  if (op === "") {
    casillaNum.innerHTML = num1Temp + "0";
    num1Temp = num1Temp + "0";
  } else {
    casillaNum.innerHTML = num2Temp + "0";
    num2Temp = num2Temp + "0";
  }
};

//funsiones
const btnSumF = () => {
  if (num1Temp === "") {
    mensajes.innerHTML = " ingresa un primer numero para sumar";
  } else {
    casillaNum.innerText = "";
    op = "+";
  }
};

const btnIgualF = () => {
  if (num1Temp === "" || num2Temp === "") {
    mensajes.innerHTML = "datos insuficiente para realizar la operacion";
  } else {
    casillaNum.innerText = "";
    calculoSuma();
  }
};

const calculoSuma = () => {
  num1Temp = parseFloat(num1Temp);
  num2Temp = parseFloat(num2Temp);
  let resultado = 0;

  if (op === "+") {
    resultado = num1Temp + num2Temp;
  }
  casillaNum.innerHTML = resultado;
};

//onclicks

btnNum1.onclick = function () {
  btnNum1F();
};
btnNum2.onclick = function () {
  btnNum2F();
};

btnNum3.onclick = function () {
  btnNum3F();
};
btnNum4.onclick = function () {
  btnNum4F();
};
btnNum5.onclick = function () {
  btnNum5F();
};
btnNum6.onclick = function () {
  btnNum6F();
};
btnNum7.onclick = function () {
  btnNum7F();
};
btnNum8.onclick = function () {
  btnNum8F();
};
btnNum9.onclick = function () {
  btnNum9F();
};
btnNum0.onclick = function () {
  btnNum0F();
};

btnSum.onclick = function () {
  btnSumF();
};
btnIgual.onclick = function () {
  btnIgualF();
};
