function initCarousel(carouselElement) {
	const track = carouselElement.querySelector(".carousel-track");
	const slides = Array.from(track.children);
	const btnPrev = carouselElement.querySelector(".carousel-btn.prev");
	const btnNext = carouselElement.querySelector(".carousel-btn.next");
	let index = 0;

	function update() {
		track.style.transform = `translateX(-${index * 100}%)`;
	}

	btnNext.addEventListener("click", () => {
		index = (index + 1) % slides.length;
		update();
	});
	btnPrev.addEventListener("click", () => {
		index = (index - 1 + slides.length) % slides.length;
		update();
	});

	// autopaseo
	setInterval(() => {
		index = (index + 1) % slides.length;
		update();
	}, 5000);
}

document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll(".carousel").forEach(initCarousel);
});
