// Define the valid purchase codes
const validCodes = new Set([
  "LOL4714",
  "JC7JU5",
  "DGH4D",
  "AG5UI8H",
  "CF537F",
  "PS5DF",

  "1INCH",
]);

// Map for coupon codes associated with each purchase code
const couponCodes = {
  LOL4714: "NOTEBOOK",
  JC7JU5: "HELLSWIFE",
  DGH4D: "TUNTUNI",
  AG5UI8H: "BABU.VALOACHO",
  CF537F: "ARE.MAMA",
  PS5NIMU: "SALA.PS5.NIBE",

  "1INCH": "ONEK.COTO.AMER",
};

// Load used codes from localStorage or initialize an empty Set
const usedCodes = new Set(
  JSON.parse(localStorage.getItem("usedCodes") || "[]")
);

document
  .getElementById("code-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const codeInput = document.getElementById("code");
    const code = codeInput.value.trim();

    // Check if the code is one of the valid codes
    if (!validCodes.has(code)) {
      document.getElementById("message").innerText = "This code is invalid.";
    } else if (usedCodes.has(code)) {
      document.getElementById("message").innerText =
        "This code has already been used.";
    } else {
      // Mark the code as used
      usedCodes.add(code);
      localStorage.setItem("usedCodes", JSON.stringify([...usedCodes]));

      // Show the coupon code in the modal
      const coupon = couponCodes[code];
      document.getElementById("coupon-code").innerText = coupon;
      document.getElementById("coupon-modal").classList.add("modal-open");
    }

    // Clear the input field
    codeInput.value = "";
  });

// Button to close the modal
document.getElementById("close-modal").addEventListener("click", function () {
  document.getElementById("coupon-modal").classList.remove("modal-open");
});

// Copy to clipboard functionality
document.getElementById("copy-button").addEventListener("click", function () {
  const couponCode = document.getElementById("coupon-code").innerText;

  navigator.clipboard.writeText(couponCode).then(
    function () {
      alert("Coupon code copied to clipboard!");
    },
    function () {
      alert("Failed to copy coupon code.");
    }
  );
});

// Button to redirect to shop
document
  .getElementById("redirect-button")
  .addEventListener("click", function () {
    window.location.href = "https://spinstrikepon.vercel.app/"; // Replace with your actual shop URL
  });
