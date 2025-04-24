function greetUser() {
  alert("Welcome to my portfolio site!");
}

function validateContactForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !phone || !message) {
    alert("Please fill out all fields.");
    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone)) {
    alert("Phone number must be 10 digits.");
    return false;
  }
const namePattern = /^[A-Za-z ]{2,}$/; // Optional stricter name check


  alert("Form submitted successfully!");
  return true;
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}
