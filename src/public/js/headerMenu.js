/*document.addEventListener("DOMContentLoaded", () => {
	const btn = document.getElementById("menu-btn");
	const links = document.getElementById("menu-links");

	btn.addEventListener("click", () => {
		btn.classList.toggle("active");
		links.classList.toggle("show");
	});
});
*/

// HEADERMENU.JS

const menuBtn = document.getElementById("menu-btn");
const menuLinks = document.getElementById("menu-links");
const darkToggle = document.getElementById("dark-toggle");

// menú hamburguesa
menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    menuLinks.classList.toggle("show");
});

// modo oscuro
darkToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
});
