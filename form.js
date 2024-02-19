const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email");
const password2 = document.getElementById("password2");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (checkInputs()) {
    showPopup();
  }
});

function checkInputs() {
  let isValid = true;

  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
    isValid = false;
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
    isValid = false;
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
    isValid = false;
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
    isValid = false;
  } else {
    setSuccessFor(password);
  }

  if (password2Value === "") {
    setErrorFor(password2, "Password check cannot be blank");
    isValid = false;
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Passwords do not match");
    isValid = false;
  } else {
    setSuccessFor(password2);
  }

  return isValid;
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showPopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "block";
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}
