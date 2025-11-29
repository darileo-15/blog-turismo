/*function initHeaderMenu() {
	const btn = document.getElementById("menu-btn");
	const menu = document.getElementById("menu-links");

	btn.addEventListener("click", () => {
		if (menu.style.display === "block") {
			menu.style.display = "none";
		} else {
			menu.style.display = "block";
		}
	});
}
*/

function initHeaderMenu() {
	const btn = document.getElementById("menu-btn");
	const menu = document.getElementById("menu-links");

	btn.addEventListener("click", () => {
		menu.classList.toggle("show");
	});
}

document.addEventListener("DOMContentLoaded", initHeaderMenu);
