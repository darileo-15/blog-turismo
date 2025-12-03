function initCarousels() {
	const carousels = document.querySelectorAll(".carousel");

	carousels.forEach((carousel) => {
		const track = carousel.querySelector(".carousel-track");
		const slides = Array.from(track.children);
		const btnPrev = carousel.querySelector(".carousel-btn.prev");
		const btnNext = carousel.querySelector(".carousel-btn.next");
		const dotsContainer = carousel.querySelector(".carousel-dots");

		let index = 0;

		// Crear puntos
		slides.forEach((_, i) => {
			const dot = document.createElement("button");
			if (i === 0) dot.classList.add("active");
			dotsContainer.appendChild(dot);
		});

		const dots = dotsContainer.querySelectorAll("button");

		function updateCarousel() {
			track.style.transform = `translateX(-${index * 100}%)`;
			dots.forEach((d) => d.classList.remove("active"));
			dots[index].classList.add("active");
		}

		btnNext.addEventListener("click", () => {
			index = (index + 1) % slides.length;
			updateCarousel();
		});

		btnPrev.addEventListener("click", () => {
			index = (index - 1 + slides.length) % slides.length;
			updateCarousel();
		});

		dots.forEach((dot, i) => {
			dot.addEventListener("click", () => {
				index = i;
				updateCarousel();
			});
		});

		// AUTO-SLIDE
		setInterval(() => {
			index = (index + 1) % slides.length;
			updateCarousel();
		}, 5000); // 5 segundos
	});
}

document.addEventListener("DOMContentLoaded", initCarousels);
