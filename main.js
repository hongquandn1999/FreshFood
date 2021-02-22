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

//  Food menu filter

let foodMenuList = document.querySelector('.food-item-wrap');
let foodCategory = document.querySelector('.food-category');
let categories = foodCategory.querySelectorAll('button');

Array.from(categories).forEach((item, index) => {
	item.onclick = (e) => {
		let currentCategory = foodCategory.querySelector('button.active');
		currentCategory.classList.remove('active');
		e.target.classList.add('active');
		foodMenuList.classList = 'food-item-wrap ' + e.target.getAttribute('data-food-type')
	}
})