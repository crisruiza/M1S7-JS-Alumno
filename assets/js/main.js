// console.log("Entro al main.js");

// ? Crea una clase perro
// class Perro {
//   // Las clases necesitan un constructor (parámetro)
//   constructor(nombre) {
//     this.nombre = nombre;
//   }
//   ladrar() {
//     console.log(`${this.nombre} está ladrando`);
//   }
//   sentar() {
//     console.log(`${this.nombre} está sentado`);
//   }
// }

// ? Variables + Métodos
// let perro_firulais = new Perro("Firulais");
// perro_firulais.ladrar();
// perro_firulais.sentar();

// console.log("----------------------------");

// let perro_dalmata = new Perro("Dalmata");
// perro_dalmata.ladrar();
// perro_dalmata.sentar();

// ? Quiero un sistema académico donde tenga guardados alumnos y profesores. Debería poder retomarlo desde la Programación Orientada Objetos.
// ? 1. Alumnos   2. Maestros

class Persona {
  constructor(nombre, apellido, edad, genero, interes) {
    this.nombre_completo = { nombre, apellido };
    this.edad = edad;
    this.genero = genero;
    this.interes = interes;
  }
  saludo() {
    console.log(
      `Hola, me llamo ${this.nombre_completo.nombre} ${this.nombre_completo.apellido}`
    );
  }
  despedida() {
    console.log(`La persona ${this.nombre_completo.nombre} se despide...`);
  }
}

// ? Se crea una clase con las mismas características de una clase anterior + las suyas. La clase Maestro HEREDA los constructores de la clase Persona
class Maestro extends Persona {
  // Acá si necesito incluir los constructores de la clase Persona porque las vamos a usar
  constructor(nombre, apellido, edad, genero, interes, materia, grado) {
    // Usamos esta clase para decirle a JS los valores que definimos en la clase pasada y HEREDA su valor
    super(nombre, apellido, edad, genero, interes);
    this.materia = materia;
    this.grado = grado;
  }
  muestraMateria() {
    console.log(
      `El maestro ${this.nombre_completo.nombre} está dictando la materia ${this.materia}`
    );
  }
  despedida() {
    console.log(`El maestro ${this.nombre_completo.nombre} se despide...`);
  }
}

// ? Creando nuevas variables
let maestro = new Maestro(
  "Jesús",
  "Cárdenas",
  "29",
  "Masculino",
  ["Programacion", "Acuarofilia", "Ajedrez"],
  "Artes Oscuras",
  "5"
);
let alumno = new Persona("Gerardo", "Miranda", "00", "Masculino", [
  "Football",
  "Golf",
  "Música",
]);

// ? Variables + Métodos
maestro.saludo();
maestro.muestraMateria();
maestro.despedida();

alumno.saludo();
alumno.despedida();

// ? Ejercicio clase calculadora
// class Calculadora {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }
//   sumar() {
//     console.log(`La suma de ${this.a} + ${this.b} es ${this.a + this.b}`);
//   }
//   restar() {
//     console.log(`La resta de ${this.a} - ${this.b} es ${this.a - this.b}`);
//   }
//   multiplicar() {
//     console.log(
//       `La multiplicación de ${this.a} * ${this.b} es ${this.a * this.b}`
//     );
//   }
//   dividir() {
//     console.log(
//       `La división de ${this.a} / ${this.b} es ${
//         this.a / this.b
//       } y su residuo es ${this.a % this.b}`
//     );
//   }
// }

// let operacion = new Calculadora(2, 3);
// operacion.sumar();
// operacion.restar();
// operacion.multiplicar();
// operacion.dividir();
