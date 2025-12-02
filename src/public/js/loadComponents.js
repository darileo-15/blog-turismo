document.addEventListener("DOMContentLoaded", async () => {
	const headerEl = document.getElementById("header-placeholder");
	const footerEl = document.getElementById("footer-placeholder");

	// cargar header
	const headerHtml = await fetch(
		"/blog-turismo/src/views/partials/header.html"
	).then((r) => r.text());
	headerEl.innerHTML = headerHtml;

	// cargar footer
	const footerHtml = await fetch(
		"/blog-turismo/src/views/partials/footer.html"
	).then((r) => r.text());
	footerEl.innerHTML = footerHtml;

	// Inicializar funciones
	initMenu();
	initDarkMode();
});
