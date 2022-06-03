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

// function isNan check if value is integer
const isNan = (v) => {
  if (!Number.isInteger(v)) {
    console.log(`${v} is not an integer`);
    return false;
  }
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

//  test 

// check if at least CG is checked
const checkbox = (i) => {
  if (i.checked) {
    return true;
  } else {
    return false;
  }
}

// validate form 
const validateForm = (e) => {

  const firstname = document.getElementById("first").value;
  const lastname = document.getElementById("last").value;
  const email = document.getElementById("email").value;
  const quantity = document.getElementById("quantity").value;
  const locationRadio = document.querySelectorAll('input[name="location"]');
  const checkbox1 = document.getElementById("checkbox1");
  // const checkbox2 = document.getElementById("checkbox2");

  if (firstname.length < 2) {
    alert("Le prénom doit contenir au moins 2 caractères");
    return false;
  }

  else if (lastname.length < 2) {
    alert("Le nom doit contenir au moins 2 caractères");
    return false;
  }

  else if (!validateEmail(email)) {
    alert("Veuillez entrer une adresse email valide");
    return false;
  }

  else if (isNaN(quantity)) {
    alert("La quantité doit être un nombre");
    return false;
  }

  else if (isChecked(locationRadio) === false) {
    alert("Veuillez choisir une option");
    return false;
  }

  else if (checkbox(checkbox1) === false) {
    alert("Veuillez accepter les conditions générales");
    return false;
  }
  return true;
}

const validate = (e) => {
  e.preventDefault()
  if (validateForm()) {

    alert("Votre formulaire a bien été prise en compte");

    console.log(
      "Prénom : " + document.getElementById("first").value +
      "\nNom : " + document.getElementById("last").value +
      "\nEmail : " + document.getElementById("email").value +
      "\nNombre de participations : " + document.getElementById("quantity").value +
      "\nLieu : " + document.querySelector('input[name="location"]:checked').value +
      "\nConditions générales : " + document.getElementById("checkbox1").checked +
      "\nNewletter : " + document.getElementById("checkbox2").checked
    )
    closeModal();
    return true;
  }
  console.log("formulaire non validé")
  return alert('Formulaire incomplet');
}

submitButton.addEventListener("click", (e) => validate(e));


