// includeHTML.js — carga partials y luego ejecuta afterIncludes()
document.addEventListener("DOMContentLoaded", () => {
	loadIncludes();
});

async function loadIncludes() {
	const elements = document.querySelectorAll("[include-html]");
	for (const el of elements) {
		const file = el.getAttribute("include-html");
		try {
			const res = await fetch(file);
			if (!res.ok) throw new Error("Archivo no encontrado: " + file);
			const text = await res.text();
			el.innerHTML = text;
			el.removeAttribute("include-html");
		} catch (err) {
			console.error(err);
			el.innerHTML = "<!-- Error cargando " + file + " -->";
		}
	}

	// TODO: inicializaciones que dependen de los partials insertados
	afterIncludes();
}

function afterIncludes() {
	// Inicializa menú hamburguesa (si existe)
	if (typeof initHeaderMenu === "function") {
		initHeaderMenu();
	} else {
		// si no existe, log para debugging
		console.warn("initHeaderMenu no definida aún");
	}

	// Inicializa dark mode si está disponible
	if (typeof initDarkMode === "function") initDarkMode();

	// Inicializa carouseles si la función existe
	if (typeof initAllCarousels === "function") initAllCarousels();
}
