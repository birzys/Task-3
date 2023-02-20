/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */
const ENDPOINT = "https://api.github.com/users";
const button = document.getElementById("btn");
const korteliuOutput = document.getElementById("output");
const messageP = document.getElementById("message");

button.addEventListener("click", () => {
  messageP.style.display = "none";
  fetch(ENDPOINT)
    .then((response) => response.json())
    .then((users) => {
      users.forEach((user) => {
        const userDiv = document.createElement("div");
        const userLogin = document.createElement("h3");
        const userAvatar = document.createElement("img");

        userDiv.classList.add("user-card");
        userLogin.innerText = user.login;
        userAvatar.src = user.avatar_url;

        userDiv.appendChild(userLogin);
        userDiv.appendChild(userAvatar);
        korteliuOutput.appendChild(userDiv);

        userAvatar.style.width = "200px";
        userAvatar.style.height = "auto";
      });
    })
    .catch((error) => console.log(error));
});
