import React from 'react'
import Logo from '../../assets/diett 2logo.png'
import CloseButton from '../../assets/icons/close.png'
function Navbar() {
  return (
		<nav className="nav">
    	<div className="container">
				<a href='#' className="nav-logo">
					<img src={Logo} alt="diet-yuk-logo" width='100px' height='50px'/>
				</a>

				{/* Links for desktop */}
				<ul className="nav-links hide-for-mobile">
					{link.map(link =>(
						<li className="nav-link"> <a href="#">{link}</a> </li>
					))}
				</ul>

				{/* Hamburger menu for mobile */}
				<button className="hamburger open hide-for-desktop" onClick={openButton}>
					<span className="block"></span>
					<span className="block"></span>
					<span className="block"></span>
				</button>

				{/* Links for mobile */}
				<div className="mobile-links hide-for-desktop">
					<ul className="nav-links-mobile">
						{link.map(link =>(
							<li className="nav-link"> <a href="#">{link}</a> </li>
							))}
					</ul>
					<button className='close' onClick={closeButton}> <img src={CloseButton} alt="" width='20px' height='20px' /> </button>
				</div>
			</div>
		</nav>
  )
}

export default Navbar

const link = [
	"Home",
	"Program",
	"Olahraga",
	"Resep",
	"Nutrision Tracker",
	"Komunitas"
]

function closeButton() {
	var navMobCon = document.querySelector('.mobile-links');
	navMobCon.style.left = "1000px"
}

function openButton() {
	var navMobCon = document.querySelector('.mobile-links');
	navMobCon.style.left = "0px"
}