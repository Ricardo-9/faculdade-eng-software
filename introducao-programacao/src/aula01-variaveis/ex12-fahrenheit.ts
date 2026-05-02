// Conversão de temperatura de Celsius para Fahrenheit

function celsiusEmFahrenheit(medidaEmCelsius: number): number {
  return (medidaEmCelsius * 9) / 5 + 32;
}

console.log(`A medida em Fahrenheit é : ${celsiusEmFahrenheit(10)}`);
