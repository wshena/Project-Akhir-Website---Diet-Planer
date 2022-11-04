import React from 'react'
import cardBg1 from '../../../assets/Rectangle36.png'
import cardBg2 from '../../../assets/Rectangle38Diet.png'
import cardBg3 from '../../../assets/Rectangle40Diet.png'

function WhyUs() {
  return (
    <div className="whyUs container">
        <h1 className='title'>Why Choose Us</h1>
        <p className="titleDescription">
        We handpick the best exercise and healthty from across the country to make sure you get the most personalized diet program you deserve.
        </p>

				<div className="cards">
					{cardsComponnetArray}
				</div>
    </div>
  )
}

export default WhyUs

const cardsComponnetArray = [
	<div className="card" style={{
		backgroundImage : `url(${cardBg1})`
	}}>
		<div className="card-content">
			<div className="card-logo">LOGO</div>
			<div className="card-text">
				<h1>Nutrition Strategies</h1>
				<p>Finding a workout is as easy as scrolling down, picking out the session that matches your goals, andgetting your butt to the gym!</p>
			</div>
		</div>
	</div>,

	<div className="card" style={{
		backgroundImage : `url(${cardBg2})`
	}}>
		<div className="card-content">
			<div className="card-logo">LOGO</div>
			<div className="card-text">
				<h1>Nutrition Strategies</h1>
				<p>Finding a workout is as easy as scrolling down, picking out the session that matches your goals, andgetting your butt to the gym!</p>
			</div>
		</div>
	</div>,

	<div className="card" style={{
		backgroundImage : `url(${cardBg3})`
	}}>
		<div className="card-content">
			<div className="card-logo">LOGO</div>
			<div className="card-text">
				<h1>Nutrition Strategies</h1>
				<p>Finding a workout is as easy as scrolling down, picking out the session that matches your goals, andgetting your butt to the gym!</p>
			</div>
		</div>
	</div>,
]