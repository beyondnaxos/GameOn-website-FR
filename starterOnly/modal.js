function editNav() {
  const x = document.getElementById("myTopnav")
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
const submitButton = document.querySelector(".btn-submit")

// launch modal function
function launchModal() { modalbg.style.display = "block" }
// Close modal function
function closeModal() { modalbg.style.display = "none" }
// OnClick launchModal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))
// OnCLick closeModal
closeIcon.addEventListener("click", closeModal)

// regex validate email 
const validateEmail = (email) => {
  const regexTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regexTest.test(String(email).toLowerCase().trim())
}

// check if at least one is checked
const isChecked = (radio) => {
  for (let el of radio) {
    if (el.checked) {
      return true
    }
  }
  return false
}

// check if at least CG is checked
const checkbox = (i) => {
  if (i.checked) {
    return true
  }
  return false
}

// handle error(s)
const displayMessage = (x, y, err, ok) => {
  if (x) {
    y.closest('.formData').dataset.error = err
    y.closest('.formData').dataset.errorVisible = true
    return false
  }
  y.closest('.formData').dataset.error = ""
  y.closest('.formData').dataset.errorVisible = false

  return true
}

const error = document.querySelectorAll(".formData[data-error]::after")
const errorVisible = document.querySelectorAll(".formData[data-error-visible='true']::after")

// validate form 

const validateForm = () => {
  
  const firstname = document.getElementById("first").value
  const lastname = document.getElementById("last").value
  const email = document.getElementById("email").value
  const quantity = document.getElementById("quantity").value
  const locationRadio = document.querySelectorAll('input[name="location"]')
  const checkbox1 = document.getElementById("checkbox1");
  const isValidFirstName = displayMessage(firstname.trim().length < 2, document.getElementById("first"), "Le prénom doit contenir au moins 2 caractères", "Prénom valide")
  const isValidLastName = displayMessage(lastname.trim().length < 2, document.getElementById("last"), "Le nom doit contenir au moins 2 caractères", "Nom valide")
  const isValidEmail = displayMessage(!validateEmail(email), document.getElementById("email"), "Veuillez entrer une adresse email valide", "Email valide")
  const isValidBirthDate = displayMessage(!document.getElementById("birthdate").value, document.getElementById("birthdate"), "Veuillez entrer une date de naissance valide", "Date de naissance valide")
  const isValidQuantity = displayMessage(quantity < 1, document.getElementById("quantity"), "Veuillez entrer un nombre supérieur à 0", "Nombre valide")
  const isValidLocation = displayMessage(!isChecked(locationRadio), document.querySelector("input[name='location']"), "Veuillez choisir un lieu", "Lieu valide")
  const isValidCheckbox1 = displayMessage(!checkbox1.checked, document.getElementById("checkbox1"), "Veuillez accepter les conditions générales", "Conditions générales valides")

  if (isValidFirstName && isValidLastName && isValidEmail && isValidBirthDate && isValidQuantity && isValidLocation && isValidCheckbox1) { isValid = true }
  return isValid
}

const validate = (e) => {
  e.preventDefault()
  const isValid = validateForm()
  if (isValid) {
    formData.forEach((el) => el.style.display = "none")
    document.querySelector(".sendForm").style.display = "none"
    document.querySelector("input[name='closeModal']").classList.remove("closeForm")
    document.querySelector("div[class='success']").style.display = "flex"
    return true;
  } return console.log("Form non valide")
}

submitButton.addEventListener("click", (e) => validate(e))



