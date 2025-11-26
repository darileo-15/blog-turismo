document.addEventListener("DOMContentLoaded", () => {
	includeHTML("header", "/blog-turismo/views/partials/header.html");
	includeHTML("footer", "/blog-turismo/views/partials/footer.html");
});

function includeHTML(id, file) {
	fetch(file)
		.then((response) => response.text())
		.then((data) => {
			document.getElementById(id).innerHTML = data;

			// Si se cargó el header, activar el menú
			if (id === "header") {
				initHeaderMenu();
			}
		})
		.catch((err) => console.error("Error cargando", file, err));
}
