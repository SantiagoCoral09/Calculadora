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

