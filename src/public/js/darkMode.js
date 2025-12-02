function initDarkMode() {
	const toggle = document.getElementById("dark-toggle");

	// Mantener modo desde LocalStorage
	if (localStorage.getItem("dark-mode") === "true") {
		document.body.classList.add("dark");
		toggle.textContent = "☀️";
	}

	toggle.addEventListener("click", () => {
		document.body.classList.toggle("dark");

		const isDark = document.body.classList.contains("dark");
		toggle.textContent = isDark ? "☀️" : "🌙";

		localStorage.setItem("dark-mode", isDark);
	});
}
