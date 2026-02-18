const swiper = new Swiper('.mySwiper', {
	slidesPerView: 1,
	spaceBetween: 15,
	loop: true,
	lazy: {
		loadPrevNext: true, // Pré-carrega a imagem anterior e a próxima para suavidade
	},
	zoom: {
		maxRatio: 3, // Máximo de zoom ao clicar
		minRatio: 1, // Mínimo de zoom
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	autoplay: {
		delay: 6000,
		disableOnInteraction: false,
	},
});
