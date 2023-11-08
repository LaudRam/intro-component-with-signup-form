const submitButton = document.querySelector("button");

function handleSubmit(event) {
  event.preventDefault();

  const firstName = document.querySelector("#first-name");
  const lastName = document.querySelector("#last-name");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");

  //TODO: use arrays and for loop

  const errorMessageName = document.querySelector(".error-msg-name");
  const errorMessageSurname = document.querySelector(".error-msg-surname");
  const errorMessageEmail = document.querySelector(".error-msg-email");
  const errorMessagePassword = document.querySelector(".error-msg-password");

  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const errorIconName = document.querySelector(".error-icon-name");
  const errorIconSurname = document.querySelector(".error-icon-surname");
  const errorIconEmail = document.querySelector(".error-icon-email");
  const errorIconPassword = document.querySelector(".error-icon-password");

  if (firstName.value === "") {
    errorMessageName.classList.remove("hidden");
    firstName.classList.add("error-input");
    errorIconName.style.display = "block";
    firstName.placeholder = "";
  } else {
    errorMessageName.classList.add("hidden");
    firstName.classList.remove("error-input");
    errorIconName.style.display = "none";
  }
  if (lastName.value === "") {
    errorMessageSurname.classList.remove("hidden");
    lastName.classList.add("error-input");
    errorIconSurname.style.display = "block";
    lastName.placeholder = "";
  } else {
    errorMessageSurname.classList.add("hidden");
    lastName.classList.remove("error-input");
    errorIconSurname.style.display = "none";
  }
  if (email.value.match(mailformat)) {
    errorMessageEmail.classList.add("hidden");
    email.classList.remove("error-input");
    errorIconEmail.style.display = "none";
  } else {
    errorMessageEmail.classList.remove("hidden");
    email.classList.add("error-input");
    errorIconEmail.style.display = "block";
    email.placeholder = "";
  }
  if (password.value === "") {
    errorMessagePassword.classList.remove("hidden");
    password.classList.add("error-input");
    errorIconPassword.style.display = "block";
    password.placeholder = "";
  } else {
    errorMessagePassword.classList.add("hidden");
    password.classList.remove("error-input");
    errorIconPassword.style.display = "none";
  }
}
submitButton.addEventListener("click", handleSubmit);
