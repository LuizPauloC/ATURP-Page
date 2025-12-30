const mobile_menu = document.querySelector('.mobile-menu');
const menu_nav_btn = document.querySelector('.mobile-menu-btn');
const fa_bars = document.querySelector('.fa-bars');
const fa_xmark = document.querySelector('.fa-xmark');
const mobile_menu_list = document.querySelector('.mobile-menu-list');

menu_nav_btn.addEventListener('click', () => {
	// Muda as classes
	fa_bars.classList.toggle('hidden');
	fa_xmark.classList.toggle('hidden');
	mobile_menu.classList.toggle('open');
	mobile_menu_list.classList.toggle('open');
});
