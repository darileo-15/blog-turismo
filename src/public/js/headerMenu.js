function initHeaderMenu() {
	const btn = document.getElementById("menu-btn");
	const menu = document.getElementById("menu-links");

	btn.addEventListener("click", () => {
		menu.classList.toggle("show");
	});
}

document.addEventListener("DOMContentLoaded", initHeaderMenu);
