document.addEventListener("DOMContentLoaded", () => {
	const elements = document.querySelectorAll("[include-html]");

	elements.forEach(async (el) => {
		const file = el.getAttribute("include-html");

		try {
			const res = await fetch(file);
			if (!res.ok) throw new Error("Archivo no encontrado");

			const text = await res.text();
			el.innerHTML = text;
			el.removeAttribute("include-html");
		} catch (e) {
			el.innerHTML = "Error cargando: " + file;
		}
	});
});
