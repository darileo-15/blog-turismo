document.addEventListener("DOMContentLoaded", () => {
	const header = document.getElementById("header-placeholder");
	const footer = document.getElementById("footer-placeholder");

	fetch("./src/views/partials/header.html")
		.then((res) => res.text())
		.then((html) => (header.innerHTML = html))
		.catch((err) => console.error("Error cargando header:", err));

	fetch("./src/views/partials/footer.html")
		.then((res) => res.text())
		.then((html) => (footer.innerHTML = html))
		.catch((err) => console.error("Error cargando footer:", err));
});
