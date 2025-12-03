// /src/public/js/includeHTML.js
document.addEventListener("DOMContentLoaded", () => {
	loadIncludes();
});

async function loadIncludes() {
	const elements = document.querySelectorAll("[include-html]");
	for (const el of elements) {
		const file = el.getAttribute("include-html");
		try {
			const res = await fetch(file);
			if (!res.ok) throw new Error("No se encontró: " + file);
			const text = await res.text();
			el.innerHTML = text;
		} catch (err) {
			console.error(err);
			el.innerHTML = "<!-- Error cargando " + file + " -->";
		}
	}
	initMenu();
}

function initMenu() {
	const btn = document.getElementById("menu-btn");
	const links = document.getElementById("menu-links");
	if (!btn || !links) return;

	btn.addEventListener("click", () => {
		links.classList.toggle("active");
	});
}
