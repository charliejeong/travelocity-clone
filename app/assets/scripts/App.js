import '../styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/MobileMenu.js'
import RevealOnScroll from './modules/RevealOnScroll.js'
import StickyHeader from './modules/StickyHeader.js'
import ClientArea from './modules/ClientArea'

//React related code goes here//
import React from 'react'
import ReactDOM from 'react-dom'

//import react component that we created
import MyAmazingComponent from './modules/MyAmazingComponent.js'

ReactDOM.render(<MyAmazingComponent />, document.querySelector("#my-react-example"));

new ClientArea();
new StickyHeader();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);
new MobileMenu();
let modal


document.querySelectorAll(".open-modal").forEach(el => {
	el.addEventListener("click", e =>{
		e.preventDefault()
		if (typeof modal == "undefined") {
			import(/* webpackChunkName: "modal" */ './modules/Modal').then(x => {
				modal = new x.default()
				setTimeout( () => modal.openTheModal(), 20)
			}).catch(() => console.log("there was a problem"))
		} else {
			modal.openTheModal()
		}
	})
})




if (module.hot) {
	module.hot.accept()
}