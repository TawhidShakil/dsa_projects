
const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");


const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})(\s|-)?\d{3}(\s|-)?\d{4}$/;


function validatePhoneNumber() {
  const userInput = input.value.trim();

  if (!userInput) {
    alert("Please provide a phone number");
    return;
  }

  const isValid = phoneRegex.test(userInput);

  resultsDiv.textContent = isValid
    ? `Valid US number: ${userInput}`
    : `Invalid US number: ${userInput}`;
}


function clearResults() {
  resultsDiv.textContent = "";
}


checkBtn.addEventListener("click", validatePhoneNumber);
clearBtn.addEventListener("click", clearResults);
