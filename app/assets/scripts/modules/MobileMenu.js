class MobileMenu {
	constructor() {
		this.menuIcon = document.querySelector(".site-header__menu-icon")
		this.menuContent = document.querySelector(".site-header__menu-content")
		this.siteHeader = document.querySelector(".site-header")
		this.events()
	}

	events(){
		this.menuIcon.addEventListener("click", () => this.toggleMenu())
	}

	toggleMenu(){
		this.menuContent.classList.toggle("site-header__menu-content--is-visible")
		this.siteHeader.classList.toggle("site-header--is-expanded")
	}
		/*old way of writing js
		document.querySelector(".site-header__menu-icon").addEventListener("click", function(){
			console.log("test");
		})*/
}

export default MobileMenu;