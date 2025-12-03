function afterInclude() {
	// Inicializa hamburguesa
	const btn = document.getElementById("menu-btn");
	const menu = document.getElementById("menu-links");

	if (btn && menu) {
		btn.addEventListener("click", () => {
			btn.classList.toggle("active");
			menu.classList.toggle("show");
		});
	}

	// Inicializa modo oscuro
	if (typeof initDarkMode === "function") initDarkMode();
}
