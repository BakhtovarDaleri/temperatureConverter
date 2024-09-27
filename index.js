const celsiusToFarenheit = (celsius) => celsius * 1.8 + 32;
console.log(
  celsiusToFarenheit(prompt("Введите температуру в градусах Цельсия:"))
);

const farenheitToCelsius = (farenheit) => (farenheit - 32) / 1.8;
console.log(
  farenheitToCelsius(prompt("Введите температуру в градусах Фаренгейта:"))
);
