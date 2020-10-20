'use strict';

const inputList = document.querySelectorAll(".fill__fields--input");
const inputList2 = document.getElementsByClassName("fill__fields--input");

/* let nameOfUser = "";
let roleOfUser = ""; */

const data = {
  name: "Nombre Apellido",
  role: "Profesion",
  email: "",
  telephone: ""

};

const saveField = function (event) {
  //event.preventDefault();

/*   console.log(event.currentTarget.id);
  console.log(event.currentTarget.value); */

  // Paso 2: Guardar el nuevo valor en una variable.

  if (event.currentTarget.name === "name") {
    data["name"] = event.currentTarget.value;
  } else if (event.currentTarget.name === "role") {
    data["role"] = event.currentTarget.value;
  } else if (event.currentTarget.name === "email") {
    data["email"] = event.currentTarget.value;
  } else if (event.currentTarget.name === "telephone") {
    data["telephone"] = event.currentTarget.value;
  }




  //data[event.currentTarget.id] = event.currentTarget.value;

  // Paso 3: Llamar al render de la tarjeta
    render();
};



const render = function () {
  // Escribir todos los datos en la tarjeta
}

for (const eachElement of inputList) {
  eachElement.addEventListener( "blur", saveField );
}