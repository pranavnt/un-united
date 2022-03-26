setTimeout(() => {
	let elements = document.getElementsByClassName("uitk-heading-7")

	for (let el of elements) {
		if (el.textContent.startsWith("United flight")) {
			el.parentNode.parentNode.parentNode.parentNode.remove();
		}
	}
}, 5000)