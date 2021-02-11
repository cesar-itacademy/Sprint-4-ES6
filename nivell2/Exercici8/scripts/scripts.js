// Recoger los datos del formulario
const numA      = document.getElementById('numberA');
const numB      = document.getElementById('numberB');
const resultado = document.getElementById('resultado');

// Tabla donde devolvemos el resultado
const multiplyTab = document.getElementById('tabla');


// Validacion de los campos numericos

numA.addEventListener('input', (value) => {
  if ((numA.value < 1) | (numA.value > 10)) {
    numA.classList.add('is-invalid');
    numA.classList.remove('is-valid');
  }else {
    numA.classList.add('is-valid');
    numA.classList.remove('is-invalid');
  }
});

numB.addEventListener('input', (value) => {
  if ((numB.value < 1) | (numB.value > 10)) {
    numB.classList.add('is-invalid');
    numB.classList.remove('is-valid');
  }else {
    numB.classList.add('is-valid');
    numB.classList.remove('is-invalid');
  }
});


// Función para generar cada línea en la tabla con formato "num1 X num2 = result"
const multiply = (numA, numB) => {
  const fragment = document.createDocumentFragment() // Inyectar el html actualizando el DOM una sola vez

    for (let j=1; j <= numB; j++) {
      const filaTab = document.createElement('tr');
      const itemNumA = document.createElement('td');
      const itemOp = document.createElement('td');
      const itemNumB = document.createElement('td');
      const itemResult = document.createElement('td');
    // Asignamos valores a las celdas
      itemNumA.textContent = `${numA}`;
      itemOp.textContent = `X`;
      itemNumB.textContent = `${j}`;
      itemResult.textContent = `= ${numA * j}`;
    // Creacion de las filas y las celdas  
      filaTab.appendChild(itemNumA);
      filaTab.appendChild(itemOp);
      filaTab.appendChild(itemNumB);
      filaTab.appendChild(itemResult);
      fragment.appendChild(filaTab);
    }
  // Devolvemos el codigo html a la tabla  
  multiplyTab.appendChild(fragment);
};

// Boton Resultado 
resultado.addEventListener("click", () => {
  if ((numA.classList.contains('is-valid')) && (numB.classList.contains('is-valid'))) {
    multiply(numA.value, numB.value);
  } else {
    return false;
  };
  
});