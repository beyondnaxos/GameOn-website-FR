function editNav() {
  var x = document.getElementById("myTopnav")
  if (x.className === "topnav") {
    x.className += " responsive"
  } else {
    x.className = "topnav"
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground")
const modalBtn = document.querySelectorAll(".modal-btn")
const formData = document.querySelectorAll(".formData")
const closeIcon = document.querySelector(".close")
const submitButton = document.querySelector(".btn-submit");

// OnClick launchModal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))

// launch modal function
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal function
function closeModal() {
  modalbg.style.display = "none";
}

// OnCLick closeModal
closeIcon.addEventListener("click", closeModal);

// regex validate email 
const validateEmail = (email) => {
  const regexTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexTest.test(String(email).toLowerCase());
}

// check if at least one is checked
const isChecked = (radio) => {
  for (let el of radio) {
    if (el.checked) {
      return true;
    }
  }
  return false;
}

// check if at least CG is checked
const checkbox = (i) => {
  if (i.checked) {
    return true;
  } else {
    return false;
  }
}

// handle error(s)
const displayMessage = (x, y, err, ok) => {
  if (x) {
    y.style.color = "red";
    y.innerHTML = err;
    return false
  } 
  y.style.color = "green";
  y.innerHTML = ok;
  return true 
}

// validate form 
const validateForm = () => {

  const firstname = document.getElementById("first").value;
  const lastname = document.getElementById("last").value;
  const email = document.getElementById("email").value;
  const quantity = document.getElementById("quantity").value;
  const locationRadio = document.querySelectorAll('input[name="location"]');
  const checkbox1 = document.getElementById("checkbox1");
  
  const isValidFirstName = displayMessage(firstname.length < 2, document.getElementById("error0"), "Le prénom doit contenir au moins 2 caractères" , "Prénom valide");
  const isValidLastName = displayMessage(lastname.length < 2, document.getElementById("error1"), "Le nom doit contenir au moins 2 caractères", "Nom valide")
  const isValidEmail = displayMessage(!validateEmail(email), document.getElementById("error2"), "Veuillez entrer une adresse email valide", "Email valide")
  const isValidQuantity = displayMessage(quantity < 1, document.getElementById("error4"), "Veuillez entrer un nombre supérieur à 0", "Nombre valide")
  const isValidLocation = displayMessage(!isChecked(locationRadio), document.getElementById("error5"), "Veuillez choisir un lieu", "Lieu valide")
  const isValidCheckbox1 = displayMessage(!checkbox1.checked, document.getElementById("error6"), "Veuillez accepter les conditions générales", "Conditions générales valides")

  if(
    isValidFirstName &&
    isValidLastName &&
    isValidEmail &&
    isValidQuantity &&
    isValidLocation &&
    isValidCheckbox1
  ){
    isValid = true
  }
   return isValid
}

const validate = (e) => {
  e.preventDefault()
  const isValid = validateForm()
  if (isValid) {

    console.log(
      "Prénom : " + document.getElementById("first").value +
      "\nNom : " + document.getElementById("last").value +
      "\nEmail : " + document.getElementById("email").value +
      "\nNombre de participations : " + document.getElementById("quantity").value +
      "\nLieu : " + document.querySelector('input[name="location"]:checked').value +
      "\nConditions générales : " + document.getElementById("checkbox1").checked +
      "\nNewletter : " + document.getElementById("checkbox2").checked
    )
    return true;
  }

  return console.log("Form non valide");
}

submitButton.addEventListener("click", (e) => validate(e))



