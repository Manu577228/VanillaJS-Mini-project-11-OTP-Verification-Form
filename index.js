const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");

inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    const currInput = input;
    const nextInput = input.nextElementSibling;
    const prevInput = input.previousElementSibling;

    if (currInput.value.length > 1) {
      currInput.value = currInput.value.charAt(0);
      return;
    }

    if (nextInput && currInput.value !== "") {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    if (
      prevInput &&
      e.inputType === "deleteContentBackward" &&
      currInput.value === ""
    ) {
      prevInput.focus();
    }

    updateButtonState();
  });
});

function updateButtonState() {
  const filledInputs = Array.from(inputs).filter((input) => input.value !== "");
  if (filledInputs.length === 4) {
    button.classList.add("active");
  } else {
    button.classList.remove("active");
  }
}

window.addEventListener("load", () => inputs[0].focus());
