///Conversor de temperatura celsius a Fahrenheit
let celsius = document.getElementById("celsius");
let fahrenheight = document.getElementById("fahrenheight");

const debounce = (func, wait) => {
  let timer = null;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(func, wait);
  };
};

celsius.addEventListener(
  "input",
  debounce(() => {
    if (celsius.value.length != 0) {
      fahrenheight.value = convertToFahrenheight(celsius.value);
    } else {
      fahrenheight.value = "";
    }
  }, 500)
);

fahrenheight.addEventListener(
  "input",
  debounce(() => {
    if (fahrenheight.value.length != 0) {
      celsius.value = convertToCelsius(fahrenheight.value);
    } else {
      celsius.value = "";
    }
  }, 500)
);

const convertToFahrenheight = (celsius) => (Number(celsius) * 9) / 5 + 32;
const convertToCelsius = (celsius) => ((Number(celsius) - 32) * 5) / 9;

////Conversor de Presion de Pascal a bar
let pascal = document.getElementById("pascal");
let bar = document.getElementById("bar");

pascal.addEventListener(
  "input",
  debounce(() => {
    if (pascal.value.length != 0) {
      bar.value = convertToBar(pascal.value);
    } else {
      bar.value = "";
    }
  }, 500)
);

bar.addEventListener(
  "input",
  debounce(() => {
    if (bar.value.length != 0) {
      pascal.value = convertToPascal(bar.value);
    } else {
      pascal.value = "";
    }
  }, 500)
);

const convertToBar = (valor) => (Number(valor) /100000);
const convertToPascal = (valor) => ((Number(valor) *100000));


////Conversor de Masa de Kilos a gramos
let kilogramos = document.getElementById("kilogramos");
let gramos = document.getElementById("gramos");

kilogramos.addEventListener(
  "input",
  debounce(() => {
    if (kilogramos.value.length != 0) {
      gramos.value = convertTogramos(kilogramos.value);
    } else {
      gramos.value = "";
    }
  }, 500)
);

gramos.addEventListener(
  "input",
  debounce(() => {
    if (gramos.value.length != 0) {
      kilogramos.value = convertToKg(gramos.value);
    } else {
      kilogramos.value = "";
    }
  }, 500)
);

const convertTogramos = (valor) => (Number(valor) *1000);
const convertToKg = (valor) => ((Number(valor) /1000));


////Conversor de Longitud de metros a centimetros
let metros = document.getElementById("metros");
let centimetros = document.getElementById("centimetros");

metros.addEventListener(
  "input",
  debounce(() => {
    if (metros.value.length != 0) {
      centimetros.value = convertTocentimetros(metros.value);
    } else {
      centimetros.value = "";
    }
  }, 500)
);

centimetros.addEventListener(
  "input",
  debounce(() => {
    if (centimetros.value.length != 0) {
      metros.value = convertToMetros(centimetros.value);
    } else {
      metros.value = "";
    }
  }, 500)
);

const convertTocentimetros = (valor) => (Number(valor) *100);
const convertToMetros = (valor) => ((Number(valor) /100));
