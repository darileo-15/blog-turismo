/* headerMenu.js
   Inicializa el botón hamburguesa. No debe ejecutarse
   hasta que header.html haya sido insertado en el DOM.
*/

function initHeaderMenu() {
	const btn = document.getElementById("menu-btn");
	const menu = document.getElementById("menu-links");

	if (!btn || !menu) return;

	// al hacer click alterna la clase 'active' y 'show'
	btn.addEventListener("click", (e) => {
		btn.classList.toggle("active");
		menu.classList.toggle("show");
	});

	// cerrar el menú si se hace click en un enlace (útil en móvil)
	menu.querySelectorAll("a").forEach((a) => {
		a.addEventListener("click", () => {
			btn.classList.remove("active");
			menu.classList.remove("show");
		});
	});

	// cerrar el menú al hacer click fuera
	document.addEventListener("click", (e) => {
		if (!menu.contains(e.target) && !btn.contains(e.target)) {
			btn.classList.remove("active");
			menu.classList.remove("show");
		}
	});
}
