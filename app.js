const num1 = parseFloat(prompt("Ingrese el primer número:"));
const num2 = parseFloat(prompt("Ingrese el segundo número:"));
const operacion = prompt(
  "Ingrese la operación que desea realizar (+, -, *, /):"
);

let resultado;
if (operacion === "+") {
  resultado = num1 + num2;
} else if (operacion === "-") {
  resultado = num1 - num2;
} else if (operacion === "*") {
  resultado = num1 * num2;
} else if (operacion === "/") {
  if (num2 === 0) {
    resultado = "Error: División por cero";
  } else {
    resultado = num1 / num2;
  }
} else {
  resultado = "Operación no válida.";
}
console.log(`Resultado: ${resultado}`);