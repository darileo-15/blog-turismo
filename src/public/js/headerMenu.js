document.addEventListener("DOMContentLoaded", () => {
	const menuBtn = document.getElementById("menu-btn");
	const menu = document.getElementById("menu-links");

	menuBtn.addEventListener("click", () => {
		menu.classList.toggle("show");
		menuBtn.classList.toggle("active");
	});
});
