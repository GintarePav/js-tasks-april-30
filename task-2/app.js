/*
Sukurti atsiliepimų WEB aplikaciją. 
Vartotojas įveda formoje savo vardą, el. paštą, atsiliepimą ir paspaudžia saugoti. 
Atsiliepimas atvaizduojamas gride po forma. Svarbu semantika, estetika, ir responsive.
*/

const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const textArea = document.querySelector("textarea");
const submitBtn = document.querySelector("button");
const feedbackGrid = document.querySelector(".feedback-grid");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("test");
  const feedbackContainer = document.createElement("article");
  const nameElement = document.createElement("h3");
  const emailElement = document.createElement("h4");
  const textElement = document.createElement("p");
  console.log("test 2");
  feedbackContainer.appendChild(nameElement);
  nameElement.textContent = userName.value;
  feedbackContainer.appendChild(emailElement);
  emailElement.textContent = userEmail.value;
  feedbackContainer.appendChild(textElement);
  textElement.textContent = textArea.value;
  feedbackGrid.appendChild(feedbackContainer);
});
