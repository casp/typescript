function add(x: number, y: number): number {
  return x + y;
}

let myAdd = function (x: number, y: number): number {
  return x + y;
};

//Parametros opcionales ?
function buildName(firstName: string, lastName?: string) {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}

const myName = buildName("Cesar");
const myFullName = buildName("Cesar", "Sulbaran");

console.log(`Mi nombre: ${myName}`);
console.log(`Nombre completo: ${myFullName}`);