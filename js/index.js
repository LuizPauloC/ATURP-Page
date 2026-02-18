// Trigger animations after full load
window.addEventListener('app-ready', () => {
	$('.hero-content')?.classList.add('animate-in');
	document.querySelector('.hero nav')?.classList.add('nav-animate');
});

// UI behaviors (mobile menu, lang, page show + animations)
document.addEventListener('DOMContentLoaded', () => {
	const menuBtn = $('.mobile-menu-btn');
	const mobileMenu = $('.mobile-menu');
	const mobileList = $('.mobile-menu-list');
	const faBars = $('.fa-bars');
	const faX = $('.fa-xmark');
	const langSelector = $('.lang-select');
	const langOptions = $('.lang-select-options');
	const langItems = $$('.lang-option');
	const selectedLang = $('.selected-lang');

	menuBtn?.addEventListener('click', () => {
		faBars?.classList.toggle('hidden');
		faX?.classList.toggle('hidden');
		mobileMenu?.classList.toggle('open');
		mobileList?.classList.toggle('open');
	});

	langSelector?.addEventListener('click', () => langOptions?.classList.toggle('active'));
	langItems.forEach((li) =>
		li.addEventListener('click', () => {
			if (selectedLang) selectedLang.textContent = li.textContent;
			langOptions?.classList.remove('active');
		}),
	);

	document.addEventListener('click', (ev) => {
		const t = ev.target;
		if (mobileMenu && menuBtn && !mobileMenu.contains(t) && !menuBtn.contains(t)) {
			faBars?.classList.remove('hidden');
			faX?.classList.add('hidden');
			mobileMenu?.classList.remove('open');
			mobileList?.classList.remove('open');
		}
		if (langSelector && !langSelector.contains(t)) langOptions?.classList.remove('active');
	});
});