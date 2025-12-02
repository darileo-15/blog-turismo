// loadComponents.js
document.addEventListener("DOMContentLoaded", async () => {
	// cargar header
	const headerPlaceholder = document.getElementById("header-placeholder");
	const header = await fetch("/blog-turismo/src/views/partials/header.html").then(
		(res) => res.text()
	);
	headerPlaceholder.innerHTML = header;

	// cargar footer
	const footerPlaceholder = document.getElementById("footer-placeholder");
	const footer = await fetch("/blog-turismo/src/views/partials/footer.html").then(
		(res) => res.text()
	);
	footerPlaceholder.innerHTML = footer;

	// 🔥 ahora que el header YA EXISTE, inicializamos menú y darkmode
	initMenu();
	initDarkMode();
});
