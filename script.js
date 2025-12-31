document.documentElement.classList.add('is-loading');

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

// Smooth scroll for [data-scroll] elements
document.addEventListener('click', (e) => {
	const btn = e.target.closest('[data-scroll]');
	if (!btn) return;
	e.preventDefault();
	const sel = btn.dataset.scroll;
	if (!sel) return;
	const target =
		sel.startsWith('#') || sel.startsWith('.')
			? document.querySelector(sel)
			: document.getElementById(sel) || document.querySelector(sel);
	if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
		})
	);

	document.addEventListener('click', (ev) => {
		const t = ev.target;
		if (mobileMenu && menuBtn && !mobileMenu.contains(t) && !menuBtn.contains(t)) {
			faBars?.classList.remove('hidden');
			faX?.classList.add('hidden');
			mobileMenu.classList.remove('open');
			mobileList?.classList.remove('open');
		}
		if (langSelector && !langSelector.contains(t)) langOptions?.classList.remove('active');
	});
});

// show page and trigger animations after full load
window.addEventListener('load', () => {
	document.documentElement.classList.remove('is-loading');
	document.documentElement.classList.add('is-loaded');
	setTimeout(() => document.body.classList.add('is-ready'), 20);

	$('.hero-content')?.classList.add('animate-in');
	document.querySelector('.hero nav')?.classList.add('nav-animate');
});
