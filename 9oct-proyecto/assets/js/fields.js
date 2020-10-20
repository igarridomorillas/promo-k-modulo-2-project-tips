'use strict';

const inputsFillFields = document.querySelectorAll(".fill__fields--input");

const saveName = function (event) {
  console.log(event.currentTarget.value);  
}

for (const eachInput of inputsFillFields) {
  eachInput.addEventListener("blur", saveName);  
}
