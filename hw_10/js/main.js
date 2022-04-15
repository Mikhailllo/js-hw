const cubeRubik = document.getElementById("cube-rubik");



	cubeRubik.innerHTML = '';
	for (let i = 0; i < 10; i++) {
		const inner = document.createElement("div");
		cubeRubik.appendChild(inner);
		inner.style.cssText = `height: 100px; width: 100px; background: #335577`;
	}

