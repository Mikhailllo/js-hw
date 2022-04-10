const cubeRubik = document.getElementById("cube-rubik");
const randomColor = () => {
	return (
		"#" +
		Math.floor(Math.random() * 11111111)
			.toString(16)
			.padStart(6, "0")
			.toUpperCase()
	);
};

setInterval(() => {
	cubeRubik.innerHTML = '';
	for (let i = 0; i < 25; i++) {
		const inner = document.createElement("div");
		cubeRubik.appendChild(inner);
		inner.style.cssText = `height: 50px; width: 50px; background: ${randomColor()}`;
	}
}, 1000);
