// document.getElementById("contactForm").addEventListener("submit", function (event) {
//   event.preventDefault();

//   let valid = true;

//   // Clear previous errors
//   document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

//   // Name validation
//   const name = document.getElementById("name").value.trim();
//   if (name === "") {
//     document.getElementById("nameError").textContent = "Please enter your name.";
//     valid = false;
//   }

//   // Email validation
//   const email = document.getElementById("email").value.trim();
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailPattern.test(email)) {
//     document.getElementById("emailError").textContent = "Enter a valid email address.";
//     valid = false;
//   }

//   // Subject validation
//   const subject = document.getElementById("subject").value.trim();
//   if (subject === "") {
//     document.getElementById("subjectError").textContent = "Please enter a subject.";
//     valid = false;
//   }

//   // Message validation
//   const message = document.getElementById("message").value.trim();
//   if (message === "") {
//     document.getElementById("messageError").textContent = "Please enter your message.";
//     valid = false;
//   }

//   // If all valid
//   if (valid) {
//     alert("✅ Message sent successfully!");
//     document.getElementById("contactForm").reset();
//   }
// });
