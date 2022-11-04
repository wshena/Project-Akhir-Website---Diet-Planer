import React from 'react'
import food1 from '../../../assets/food1.png'
import food2 from '../../../assets/food2.png'
import food3 from '../../../assets/food3.png'

function Program() {
  return (
    <div className="program container">
			<h1 className="title">Our Program</h1>
			<p className="titleDescription">
				We provide you with our best diet program
			</p>

			<div className="cards">
				{cardArray}
			</div>
		</div>
  )
}

export default Program

const cardArray = [
	<div className="card" style={{
		backgroundImage: `url(${food1})`
	}}>
		<div className="card-content">
			<h1>Diet Paleo</h1>
			<p>“Diet ini mengacu pada pola makan manusia zaman dulu atau pada masa paleolitikum.”</p>
			<a href="#" className='button-link'> <button className='btn btn-card'>Selengkapnya</button> </a>
		</div>	
	</div>,

	<div className="card" style={{
		backgroundImage: `url(${food2})`
	}}>
		<div	div className="card-content">
			<h1>Diet Mediterania</h1>
			<p>“Program diet ini mengacu pada pola makan rakyat Kreta, Yunani, dan Italia Selatan.”</p>
			<a href="#" className='button-link'> <button className='btn btn-card'>Selengkapnya</button> </a>
		</div>	
	</div>,

	<div className="card" style={{
		backgroundImage: `url(${food3})`
	}}>
		<div className="card-content">
			<h1>Diet DEBM</h1>
			<p>“Diet ini yang menekankan mengkonsumsi makanan rendah karbohidrat tetapi tinggi akan protein.”</p>
			<a href="#" className='button-link'> <button className='btn btn-card'>Selengkapnya</button> </a>
		</div>	
	</div>,
]