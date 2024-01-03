const inputs = document.querySelectorAll("input"),
  button = document.querySelector("button");

inputs.forEach((input, index1) => {
  input.addEventListener("keyup", (e) => {
    const currInput = input;
    (nextInput = input.nextElementSibling),
      (prevInput = input.previousElementSibling);

    if (currInput.value.length > 1) {
      currInput.value = "";
      return;
    }

    if (
      nextInput &&
      nextInput.hasAttribute("disabled") &&
      currInput.value !== ""
    ) {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    if (e.key === "Backspace") {
      inputs.forEach((input, index2) => {
        if (index1 <= index2 && prevInput) {
          input.setAttribute("disabled", true);
          currInput.value = "";
          prevInput.focus();
        }
      });
    }
    if (!inputs[3].disabled && inputs[3].value !== "") {
      button.classList.add("active");
      return;
    }
    button.classList.remove("active");
  });
});

window.addEventListener("load", () => inputs[0].focus());
