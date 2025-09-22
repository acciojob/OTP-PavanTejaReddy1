const inputs = document.querySelectorAll(".code");

inputs.forEach((input, i) => {
	input.addEventListener("input", (e) => {
		e.preventDefault();
		if (e.inputType === "insertText" && input.value.length === 1 && i < inputs.length - 1) {
			inputs[i + 1].focus();
		}
	});

	input.addEventListener("keydown", (e) => {
		if (e.key === "Backspace") {
			e.preventDefault();
			if (input.value) {
				input.value="";
			} else {
				if(inputs[i-1]){
					inputs[i-1].focus();
				}
			}
		}
	});
	input.addEventListener("focus", () => {
		input.select();
	});

});