// VARIAVEIS MOBILE-MENU
const mobile_menu = document.querySelector('.mobile-menu');
const menu_nav_btn = document.querySelector('.mobile-menu-btn');
const fa_bars = document.querySelector('.fa-bars');
const fa_xmark = document.querySelector('.fa-xmark');
const mobile_menu_list = document.querySelector('.mobile-menu-list');
// VARIAVEIS LANGUAGE
const langSelector = document.querySelector('.lang-select');
const langOptions = document.querySelector('.lang-select-options');
const langOptionElements = document.querySelectorAll('.lang-option');
const selectedLangElement = document.querySelector('.selected-lang');
// EVENTOS
const heroButton = document.querySelector('.hero-scroll-button');
heroButton.addEventListener('click', () => {
	// Scroll suave até a seção do main
	document.getElementById('main').scrollIntoView({ behavior: 'smooth' });
	
});

// CODIGO MOBILE-MENU
menu_nav_btn.addEventListener('click', () => {
	// Muda as classes
	fa_bars.classList.toggle('hidden');
	fa_xmark.classList.toggle('hidden');
	mobile_menu.classList.toggle('open');
	mobile_menu_list.classList.toggle('open');
});

// fecha o menu ao clicar fora dele
document.addEventListener('click', (event) => {
	const isClickInside = mobile_menu.contains(event.target) || menu_nav_btn.contains(event.target);
	if (!isClickInside) {
		fa_bars.classList.remove('hidden');
		fa_xmark.classList.add('hidden');
		mobile_menu.classList.remove('open');
		mobile_menu_list.classList.remove('open');
	}	
});

// CODIGO LANGUAGE
langSelector.addEventListener('click', () => {
	langOptions.classList.toggle('active');
});

// Fecha o menu de linguagem ao clicar fora dele
document.addEventListener('click', (event) => {
	const isClickInside = langSelector.contains(event.target);
	if (!isClickInside) {
		langOptions.classList.remove('active');
	}
});

// Seleciona a lingua
langOptionElements.forEach(option => {
	option.addEventListener('click', () => {
		const selectedLang = option.textContent;
		selectedLangElement.textContent = selectedLang;
		langOptions.classList.remove('active');
	});
});

