const swiper = new Swiper('.mySwiper', {
	slidesPerView: 1,
	spaceBetween: 15,
	loop: true,
	lazy: {
		loadPrevNext: 1, // Pré-carrega a imagem anterior e a próxima para suavidade
	},
	pagination: {
		el: '.swiper-pagination',
		dynacmicBullets: true,
		clickable: true,
	},
	autoplay: {
		delay: 6000,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
