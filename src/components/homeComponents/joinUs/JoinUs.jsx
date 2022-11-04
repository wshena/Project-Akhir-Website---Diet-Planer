import React from 'react'
import bg from '../../..//assets/food1.png'

function JoinUs() {
  return (
    <div className="joinUs container">
			<div className="joinUs-text">
				<h3>interested to join?</h3>
				<h1>Get your diet program and start your journy!</h1>
				<a href="#"> <button className='btn btn-register'>Register</button> </a>
			</div>
			<div className="joinUs-image" style={{
				backgroundImage : `url(${bg})`,
			}}></div>
		</div>
  )
}

export default JoinUs