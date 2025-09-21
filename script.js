const inputs = document.querySelectorAll(".code");

inputs.forEach((input, i) => {
	input.addEventListener("input", ()=>{
		if(input.value.length == 1) {
			inputs[i + 1].focus();
		} else if (input.value == "") {
			inputs[i - 1].focus();
		}
	})
})