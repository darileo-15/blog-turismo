document.addEventListener("DOMContentLoaded", () => {
	const btn = document.getElementById("hamburger-btn");
	const menu = document.getElementById("menu-links");

	if (!btn || !menu) return;

	btn.addEventListener("click", () => {
		btn.classList.toggle("active");
		menu.classList.toggle("show");
	});
});
