document.addEventListener("DOMContentLoaded", () => {
	const btn = document.getElementById("menu-btn");
	const links = document.getElementById("menu-links");

	btn.addEventListener("click", () => {
		btn.classList.toggle("active");
		links.classList.toggle("show");
	});
});
