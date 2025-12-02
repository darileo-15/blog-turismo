/* darkMode.js
   Inicializa el toggle y guarda preferencia en localStorage.
*/

function initDarkMode() {
	const toggle = document.getElementById("dark-toggle");
	if (!toggle) return;

	// cargar preferencia
	const isDarkSaved = localStorage.getItem("dark-mode") === "true";
	if (isDarkSaved) {
		document.body.classList.add("dark");
		toggle.textContent = "☀️";
	} else {
		toggle.textContent = "🌙";
	}

	toggle.addEventListener("click", () => {
		const isDark = document.body.classList.toggle("dark");
		toggle.textContent = isDark ? "☀️" : "🌙";
		localStorage.setItem("dark-mode", isDark);
	});
}

document.addEventListener("DOMContentLoaded", initDarkMode);
