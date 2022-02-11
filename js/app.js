const personas = [
  new Persona("Edward", "Brito"),
  new Persona("Carlos", "Lara"),
];

function mostrarPersonas() {
  console.log("Mostrar personas...");
  let texto = "";
  for (let persona of personas) {
    console.log(persona);
    texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
  }
  document.getElementById("personas").innerHTML = texto;
}
