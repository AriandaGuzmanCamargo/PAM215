const personas = [
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "Maria", edad: 28}
];
const personaEncontrada = personas.find(persona => persona.nombre === "Luis");
console.log(personaEncontrada);
personas.forEach(persona => {
    console.log("Nombre: " + [persona.nombre], "Edad: " + [persona.edad]);
});
const totalEdad = personas.reduce((total, persona) => total + persona.edad, 0);
console.log("Edad total: " + totalEdad);