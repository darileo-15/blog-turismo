// headerMenu.js (robusto)
document.addEventListener("DOMContentLoaded", () => {
	const menuBtn = document.getElementById("menu-btn");
	const menuLinks = document.getElementById("menu-links");
	const darkToggle = document.getElementById("dark-toggle");

	console.log("headerMenu.js loaded", {
		menuBtn: !!menuBtn,
		menuLinks: !!menuLinks,
		darkToggle: !!darkToggle,
	});

	if (menuBtn && menuLinks) {
		// abrir / cerrar menú
		menuBtn.addEventListener("click", (e) => {
			e.stopPropagation();
			menuBtn.classList.toggle("active");
			menuLinks.classList.toggle("show");
			console.log("menu toggled, show=", menuLinks.classList.contains("show"));
		});

		// cerrar cuando se haga click en un enlace
		menuLinks.querySelectorAll("a").forEach((a) => {
			a.addEventListener("click", () => {
				menuBtn.classList.remove("active");
				menuLinks.classList.remove("show");
			});
		});

		// cerrar al click fuera
		document.addEventListener("click", (ev) => {
			if (
				!menuLinks.contains(ev.target) &&
				ev.target !== menuBtn &&
				!menuBtn.contains(ev.target)
			) {
				if (menuLinks.classList.contains("show")) {
					menuBtn.classList.remove("active");
					menuLinks.classList.remove("show");
					console.log("menu closed by outside click");
				}
			}
		});
	} else {
		console.warn("menuBtn or menuLinks not found in DOM; menu will not work");
	}

	// Dark toggle safe init (if existe)
	if (darkToggle) {
		// si ya usas initDarkMode() en darkmode.js, puedes comentar esto
		darkToggle.addEventListener("click", () => {
			document.documentElement.classList.toggle("dark");
			console.log(
				"dark toggled, dark=",
				document.documentElement.classList.contains("dark")
			);
		});
	}
});
