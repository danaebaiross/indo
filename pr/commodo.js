// Get the current Unix timestamp (in seconds):
const currentUnixTimestamp = Math.floor(Date.now() / 1000);

// Find the HTML element with the class "unix":
const unixElement = document.querySelector('.unix');

// Set its content to the current Unix timestamp:
if (unixElement) {
  unixElement.textContent = currentUnixTimestamp;
} else {
  console.error('Element with class "unix" not found.');
}
