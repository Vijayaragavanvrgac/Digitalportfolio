// Get references to the elements
const readMoreButton = document.getElementById("read-more-button");
const additionalText = document.getElementById("additional-text");

// Add a click event listener to the "Read More" button
readMoreButton.addEventListener("click", function () {
    // Toggle the visibility of the additional text
    if (additionalText.style.display === "none" || additionalText.style.display === "") {
        additionalText.style.display = "block";
        readMoreButton.textContent = "Read Less";
    } else {
        additionalText.style.display = "none";
        readMoreButton.textContent = "Read More";
    }
});

// Submit button functionality
const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting (for demonstration purposes)

    // Get the user's inputs
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    // Perform your desired action with the form data, e.g., send it to a server
    // You can add your own logic here

    // Reset the form fields (for demonstration purposes)
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";

    alert("Form submitted. This is for demonstration purposes, and the data is not actually sent.");
});
