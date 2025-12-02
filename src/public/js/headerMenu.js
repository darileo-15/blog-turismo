// HEADERMENU.JS

document.addEventListener("DOMContentLoaded", () => {
	const menuBtn = document.getElementById("menu-btn");
	const menuLinks = document.getElementById("menu-links");

	if (menuBtn) {
		menuBtn.addEventListener("click", () => {
			menuBtn.classList.toggle("active");
			menuLinks.classList.toggle("show");
		});
	}
});
