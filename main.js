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
