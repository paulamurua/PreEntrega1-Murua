//funcion de bienvenida
function saludar(nommbre) {
  alert("Bienvenido/a " + nommbre)
}
let nom=prompt("ingresa tu nombre");
saludar(nom);

// Funcion para solicitar un numero al usuario y no string
function solicitarNumero(mensaje) {
  return parseFloat(prompt(mensaje));
}

// funcion para solicitar ingresos mensuales
function solicitarIngresosMensuales() {
  let totalIngresos = 0;
  let continuar = true;

  while (continuar) {
      let ingreso = solicitarNumero("Ingrese un ingreso mensual:");
      totalIngresos += ingreso;
      break
  }

  return totalIngresos;
}

// funcion para solicitar gastos mensuales
function solicitarGastosMensuales() {
  let totalGastos = 0;
  let continuar = true;

  while (continuar) {
      let gasto = solicitarNumero("Ingrese un gasto mensual:");
      totalGastos += gasto;
      break
  }

  return totalGastos;
}


// funcion principal 
function calcularBalance() {
  let ingresos = solicitarIngresosMensuales();
  let gastos = solicitarGastosMensuales();
  

  // calcular el balance
  let balance = ingresos - gastos;

  // mostrar el resultado al usuario
  if (balance > 0) {
      let sobrante = balance;
      let ahorro = sobrante * 0.5; // 50% ahorro
      let usoPropio = sobrante * 0.5; // 50% para uso propio
      alert("¡Tiene un saldo positivo este mes!\n Su balance es de: " + balance +
          "\n Se ha dividido el sobrante de forma equitativa.\n Ahorro: " + ahorro +
          "\n Uso Propio: " + usoPropio);
  } else if (balance < 0) {
      alert("Tiene un saldo negativo este mes.\n Su balance es de: " + balance);
  } else {
      alert("Su balance este mes es neutro. No hay excedentes ni faltantes.");
  }
}

// llamo a la funcion principal
calcularBalance();