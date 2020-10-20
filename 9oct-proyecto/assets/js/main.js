'use strict';

// const inputName = document.querySelector(".js-name");
// const inputRole = document.querySelector(".js-role");
// const inputEmail = document.querySelector(".js-email");

const inputList = document.querySelectorAll(".fill__fields--input");
const inputList2 = document.getElementsByClassName("fill__fields--input");

debugger;
console.log(inputList);

const saveField = function (nombre) {
  nombre.preventDefault();
  console.log(nombre.currentTarget.value);
}


// inputName.addEventListener("blur", saveField);
// inputRole.addEventListener("blur", saveField);
// inputEmail.addEventListener("blur", saveField);

for (const eachElement of inputList) {
  eachElement.addEventListener("blur", saveField);
}

// for (let i = 0; i < 10; i++) {}

  
// inputList[0].addEventListener("blur", saveField);
// inputList[1].addEventListener("blur", saveField);
// inputList[2].addEventListener("blur", saveField);
// inputList[3].addEventListener("blur", saveField);