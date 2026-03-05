function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  const timeString = `${hours}:${minutes}:${seconds}`;
  const clockElement = document.getElementById("clock");

  if (clockElement) {
    clockElement.textContent = timeString;
  }
}

setInterval(updateClock, 1000);
updateClock();
// Contact Form Validation
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop normal form submission
    alert("Thank you for reaching out! We'll get back to you shortly. ☕");
    contactForm.reset(); // Clear the form
  });
}
// Wait for the page to load first
document.addEventListener("DOMContentLoaded", function () {

  // Add placeholders dynamically
  document.getElementById("name").placeholder = "Enter your full name";
  document.getElementById("email").placeholder = "Enter your email address";
  document.getElementById("message").placeholder = "Write your message here...";

  // You can also set a default select option text (if needed)
  document.getElementById("subject").options[0].text = "Select a subject";
});
// Wait until the page fully loads
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Stops the page from refreshing

    alert("Your message has been sent successfully!"); // Optional: confirmation popup

    form.reset(); // 💥 Clears all input fields and text areas
  });
});
