var persona = {
  nombres: "José Ignacio",
  apellidos: "Ticona Acarapi",
  edad: 20,
  exitencia: true,
};

// mi primera funcion, verifica si una persona es mayor de edad
function verificarMayorEdad() {
  if (persona.edad == 20) {
    if (persona.exitencia) {
      alert("la persona ESTA VIVA y tiene 20 años");
    } else {
      alert("la persona ESTA MUERTA y tenia 20 años");
    }
    console.log(
      "la persona tiene veinte años y sigue joven y ya es mayor de edad"
    );
  } else if (persona.edad >= 18) {
    console.log(
      "la persona es mayor de edad y tiene " + persona.edad + " años."
    );
  } else {
    console.warn(
      "la persona es un niño, solo tiene " + persona.edad + " años."
    );
  }
}

verificarMayorEdad();
