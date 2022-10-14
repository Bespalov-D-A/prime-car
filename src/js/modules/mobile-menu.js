const mobile = () => {
  const headerMenu = document.getElementById('header-menu')

  window.onscroll = () => {
    if (window.pageYOffset > 50) {
	    headerMenu.classList.add('menu--scroll')
    } else  headerMenu.classList.remove('menu--scroll')

  }

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
