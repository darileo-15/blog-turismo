/*
document.addEventListener("DOMContentLoaded", () => {
	const header = document.getElementById("header-placeholder");
	const footer = document.getElementById("footer-placeholder");

	fetch("src/views/partials/header.html")
		.then((res) => res.text())
		.then((html) => {
			header.innerHTML = html;
			initHeaderMenu(); // 🔥 importante para activar el JS del menú
		})
		.catch((err) => console.error("Error cargando header:", err));

	fetch("src/views/partials/footer.html")
		.then((res) => res.text())
		.then((html) => (footer.innerHTML = html))
		.catch((err) => console.error("Error cargando footer:", err));
});
*/

document.addEventListener("DOMContentLoaded", () => {
	// Cargar HEADER
	fetch("/blog-turismo/src/views/partials/header.html")
		.then((r) => r.text())
		.then((html) => {
			document.getElementById("header").innerHTML = html;
			initHeaderMenu();
			initDarkMode();
		});

	// Cargar FOOTER
	fetch("/blog-turismo/src/views/partials/footer.html")
		.then((r) => r.text())
		.then((html) => {
			document.getElementById("footer").innerHTML = html;
		});
});
