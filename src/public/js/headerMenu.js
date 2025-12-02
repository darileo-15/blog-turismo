function initMenu() {
	const btn = document.getElementById("hamburger-btn");
	const menu = document.getElementById("menu-links");

	if (!btn || !menu) {
		console.warn("⚠️ Menu no encontrado todavía");
		return;
	}

	btn.addEventListener("click", () => {
		btn.classList.toggle("active");
		menu.classList.toggle("show");
	});
}
