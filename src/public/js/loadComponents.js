document.addEventListener("DOMContentLoaded", () => {
	const headerTarget = document.getElementById("header-placeholder");
	const footerTarget = document.getElementById("footer-placeholder");

	// carga header
	fetch("src/views/partials/header.html")
		.then((res) => {
			if (!res.ok) throw new Error("No se pudo cargar header");
			return res.text();
		})
		.then((html) => {
			headerTarget.innerHTML = html;
			// inicializar funciones que dependen del header insertado
			if (typeof initHeaderMenu === "function") initHeaderMenu();
			if (typeof initDarkMode === "function") initDarkMode();
		})
		.catch((err) => console.error("Error cargando header:", err));

	// carga footer
	fetch("src/views/partials/footer.html")
		.then((res) => {
			if (!res.ok) throw new Error("No se pudo cargar footer");
			return res.text();
		})
		.then((html) => (footerTarget.innerHTML = html))
		.catch((err) => console.error("Error cargando footer:", err));
});
