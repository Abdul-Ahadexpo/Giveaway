// Define the valid codes
const validCodes = new Set([
  "LOL4714",
  "JC7JU5",
  "DGH4D",
  "AG5UI8H",
  "CF537F",
  "PS5DF",
  "4I54",
  "1INCH",
]);

// Load used codes from localStorage or initialize an empty Set
const usedCode = localStorage.getItem("usedCode") || null;

document
  .getElementById("code-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const codeInput = document.getElementById("code");
    const code = codeInput.value.trim();

    // Check if the code is one of the valid codes
    if (!validCodes.has(code)) {
      document.getElementById("message").innerText = "This code is invalid.";
    } else if (usedCode) {
      document.getElementById("message").innerText =
        "This code has already been used.";
    } else {
      // Mark the code as used
      localStorage.setItem("usedCode", code);

      // Redirect to a different URL (replace with your desired URL)
      window.location.href = "https://example.com"; // Replace with your target URL
    }

    // Clear the input field
    codeInput.value = "";
  });
