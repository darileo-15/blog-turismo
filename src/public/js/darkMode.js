function initDarkMode() {
	const toggle = document.getElementById("dark-toggle");
	if (!toggle) return;

	const saved = localStorage.getItem("dark") === "true";

	if (saved) {
		document.body.classList.add("dark");
		toggle.textContent = "☀️";
	}

	toggle.addEventListener("click", () => {
		const dark = document.body.classList.toggle("dark");
		toggle.textContent = dark ? "☀️" : "🌙";
		localStorage.setItem("dark", dark);
	});
}
