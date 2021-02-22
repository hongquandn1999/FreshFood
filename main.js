// back to top
let backTopTopBtn = document.querySelector('.back-to-top');
window.onscroll = () => {
	if (
		document.body.scrollTop > 200 ||
		document.documentElement.scrollTop > 200
	) {
		backTopTopBtn.style.display = 'flex';
	} else {
		backTopTopBtn.style.display = 'none';
	}
};

// Top menu change state
let menuItems = document.getElementsByClassName('menu-item');
console.log(menuItems)
Array.from(menuItems).forEach((item, index) => {
	item.onclick = (e) => {
		let currentMenu = document.querySelector('.menu-item.active');
		currentMenu.classList.remove('active');
		item.classList.add('active')
	}
	
})
