// headerMenu.js — define initHeaderMenu para ser llamada desde includeHTML.afterIncludes
function initHeaderMenu() {
	const btn = document.getElementById("menu-btn");
	const menu = document.getElementById("menu-links");
	if (!btn || !menu) return;

	// elimina listeners previos (por si acaso se inicializa dos veces)
	btn.replaceWith(btn.cloneNode(true));
	const freshBtn =
		document.getElementById("menu-btn") ||
		document.querySelector(".hamburger#menu-btn");

	// si replaceWith rompió la referencia, re-obtenemos
	const finalBtn = freshBtn || document.getElementById("menu-btn");

	finalBtn.addEventListener("click", () => {
		finalBtn.classList.toggle("active");
		menu.classList.toggle("show");
	});
}
