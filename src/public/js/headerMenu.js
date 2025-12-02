/*
function initHeaderMenu() {
	const btn = document.getElementById("menu-btn");
	const menu = document.getElementById("menu-links");

	btn.addEventListener("click", () => {
		menu.classList.toggle("show");
	});
}

document.addEventListener("DOMContentLoaded", initHeaderMenu);
*/

function initHeaderMenu() {
	const btn = document.getElementById("menu-btn");
	const menu = document.getElementById("menu-links");

	btn.addEventListener("click", () => {
		btn.classList.toggle("active");
		menu.classList.toggle("show");
	});
}
