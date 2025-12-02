document.addEventListener("DOMContentLoaded", () => {
	const menuBtn = document.getElementById("menu-btn");
	const menu = document.getElementById("menu-links");

	menuBtn.addEventListener("click", () => {
		menu.classList.toggle("show");
		menuBtn.classList.toggle("active");
	});
});

/*
function initHeaderMenu() {
	const btn = document.getElementById("menu-btn");
	const menu = document.getElementById("menu-links");

	if (!btn || !menu) return; // evita fallos

	btn.addEventListener("click", () => {
		menu.classList.toggle("show");
		btn.classList.toggle("active");
	});
}

initHeaderMenu();*/
