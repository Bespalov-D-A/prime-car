const mobile = () => {
  const mobileMenuBtn = document.getElementById(
    'mobile-menu-btn'
  )

	const menu = document.getElementById('menu-nav')

const openMenu = () => {
	menu.classList.toggle('menu-nav-open')	
	mobileMenuBtn.classList.toggle('mobile-menu-btn--open')
}

	mobileMenuBtn.addEventListener('click', openMenu)
}

module.exports = mobile
