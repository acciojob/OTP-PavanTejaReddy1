const inputs = document.querySelectorAll(".code");
window.addEventListener("DOMContentLoaded", () => {
  inputs[0].focus();
})

inputs.forEach((input, i) => {
  input.addEventListener("input", (e) => {
    const value = e.target.value;
    if (value && i < inputs.length - 1) {
      inputs[i + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      if (input.value) {
        input.value = "";
      } else if (i > 0) {
        inputs[i - 1].focus();
      }
    }
  });

  input.addEventListener("focus", () => input.select());
});
