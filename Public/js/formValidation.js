document.getElementById("furnitureForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;
  const fields = ["name", "type", "price", "description"];

  fields.forEach((field) => {
    const input = document.getElementById(field);
    const error = input.nextElementSibling;
    if (!input.value.trim()) {
      error.textContent = "This field is required";
      isValid = false;
    } else {
      error.textContent = "";
    }

    if (field === "price" && input.value && input.value <= 0) {
      error.textContent = "Price must be greater than 0";
      isValid = false;
    }
  });

  if (isValid) {
    alert("Form submitted successfully!");
    e.target.reset();
  }
});
