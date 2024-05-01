/*
Su Js sukurti lentelės generavimo įrankį (panašiai, kaip Word). 
Kai vartotojas formoje įveda stulpleių ir eilučių  skaičių  sugeneruojama html lentelė.
*/

const numOfCol = document.querySelector("#columns");
const numOfRow = document.querySelector("#rows");
const createBtn = document.querySelector("#create");
const deleteBtn = document.querySelector("#delete");
const tableHead = document.querySelector("thead");
const tableBody = document.querySelector("tbody");

createBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (numOfCol.value < 1 || numOfRow.value < 0) {
    alert("Invalid input. Try again.");
    numOfCol.value = "";
    numOfRow.value = "";
  } else {
    let headRow = document.createElement("tr");
    for (let i = 0; i < numOfCol.value; i++) {
      const col = document.createElement("th");
      col.setAttribute("scope", "col");
      headRow.appendChild(col);
    }
    tableHead.appendChild(headRow);
    for (let i = 0; i < numOfRow.value; i++) {
      let row = document.createElement("tr");
      for (let i = 0; i < numOfCol.value; i++) {
        const cell = document.createElement("td");
        cell.setAttribute("scope", "row");
        row.appendChild(cell);
      }
      tableBody.appendChild(row);
    }
  }
});

deleteBtn.addEventListener("click", (e) => {
  e.preventDefault();
  while (tableHead.firstChild) {
    tableHead.removeChild(tableHead.firstChild);
  }
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }
  numOfCol.value = "";
  numOfRow.value = "";
});
