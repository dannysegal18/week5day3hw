
// Get references to the select element and input boxes
const contactMethodSelect = document.getElementById("contactMethod");
const emailBox = document.getElementById("emailBox");
const phoneBox = document.getElementById("phoneBox");

// Add an event listener to the select element
contactMethodSelect.addEventListener("change", function() {
    // Hide all input boxes
    emailBox.style.display = "none";
    phoneBox.style.display = "none";

    // Get the selected value
    const selectedValue = contactMethodSelect.value;

    // Show the input box corresponding to the selected value
    if (selectedValue === "email") {
        emailBox.style.display = "block";
    } else if (selectedValue === "phone") {
        phoneBox.style.display = "block";
    }
});
