const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const signupEmail = document.getElementById("signupEmail");
const signupPassword = document.getElementById("signupPassword");
const reenterPassword = document.getElementById("reenterPassword");
const signupBtn = document.getElementById("signupBtn");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", (e) => {
  //e.preventDefault(); //prevent submit

  let errors = [];

  if (firstName) {
    //if we have a firstname input then we are on the signup page
    errors = getSignupFormErrors(
      firstName.value,
      lastName.value,
      signupEmail.value,
      signupPassword.value,
      reenterPassword.value
    );
  } else {
    //we are on the login page
    errors = getLoginFormErrors(signupEmail.value, signupPassword.value);
  }

  if(errors.length > 0) {
    e.preventDefault();
    errorMsg.innerHTML = errors.join('. ');
  }
});

function getSignupFormErrors(
  firstname,
  lastname,
  email,
  password,
  reEnterPassword
) {
  let errors = [];

  if (firstname === "" || firstname == null) {
    errors.push("First Name is required");
    firstName.parentElement.classList.add("incorrect");
  }
  if (lastname === "" || lastname == null) {
    errors.push("Last Name is required");
    lastName.parentElement.classList.add("incorrect");
  }
  if (email === "" || email == null) {
    errors.push("Email is required");
    signupEmail.parentElement.classList.add("incorrect");
  }
  if (password === "" || password == null) {
    errors.push("Password is required");
    signupPassword.parentElement.classList.add("incorrect");
  }
  if (password.length < 8) {
    errors.push("Password must be at least 8 characters");
    signupPassword.parentElement.classList.add("incorrect");
  }
  if (password !== reEnterPassword) {
    errors.push("Password does not match repeated password");
    signupPassword.parentElement.classList.add("incorrect");
    reenterPassword.parentElement.classList.add("incorrect");
  }
  

  return errors;
}

function getLoginFormErrors(email, password) {
  let errors = [];

  if (email === "" || email == null) {
    errors.push("Email is required");
    signupEmail.parentElement.classList.add("incorrect");
  }
  if (password === "" || password == null) {
    errors.push("Password is required");
    signupPassword.parentElement.classList.add("incorrect");
  }

  return errors;
}

const allInputs = [
  firstName,
  lastName,
  signupEmail,
  signupPassword,
  reenterPassword,
].filter(input => input !== null); //filter out nulls in case we are on login page

allInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.parentElement.classList.contains("incorrect")) {
      input.parentElement.classList.remove("incorrect");
      errorMsg.innerHTML = "";
    }
  });
});


