const signupForm = document.querySelector("#sigupForm");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const signupEmail = document.querySelector("#signupEmail");
const signupPassword = document.querySelector("#signupPassword");
const reenterPassword = document.querySelector("#reenterPassword");
const signupBtn = document.querySelector("#signupBtn");
const errorMsg = document.querySelector("#errorMsg");

signupBtn.addEventListener("click", (e) => {
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
    errors = getLoginFormErrors(emailLogin.value, passwordLogin.value);
  }

  if (errors.length > 0) {
    //if there are any errors, prevent form submission and show errors
    e.preventDefault();
    errorMsg.innerText = errors.join(". ");
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

const allInputs = [
  firstName,
  lastName,
  signupEmail,
  signupPassword,
  reenterPassword,
];

allInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.parentElement.classList.contains("incorrect")) {
      input.parentElement.classList.remove("incorrect");
      errorMsg.innerHTML = "";
    }
  });
});
