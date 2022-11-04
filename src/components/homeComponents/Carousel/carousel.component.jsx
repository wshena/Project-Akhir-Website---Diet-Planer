import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import food1 from '../../../assets/food1.png'
import food2 from '../../../assets/food2.png'
import food3 from '../../../assets/food3.png'

// var Carousel = require('react-responsive-carousel').Carousel;

function CarouselComponent() {
  return (
    <div className="carousel container">
			<div className="top-text">
				<div className="heading">
					<h1>Your next healthy life, made posible by Diet Planner!</h1>
				</div>
				<div className="paragraf">
					<h1>Share your experience</h1>
					<p>Share your experience using our program, so others can also have a healthy life.</p>
				</div>
				<div className="paragraf">
					<h1>Share your experience</h1>
					<p>Share your experience using our program, so others can also have a healthy life.</p>
				</div>
			</div>

			<Carousel>
        {carouselItem}
      </Carousel>
		</div>
  )
}

export default CarouselComponent

const carouselItem = [
  <div className='carousel-item'>
    <div className="carousel-image">
      <img src={food1} width='100%' height='100%' />
    </div>
    <div className="carousel-text">
      <p>"Dalam 3 bulan mengikuti program diet pada Diet Planner, saya telah kehilangan berat badan hingga 5 Kg. Diet Planner sangat membantuku. Jngan takut untuk memulai"</p>
      <div className="people">
        <p>Nama orang</p>
        <p>Pekerjaan orang</p>
      </div>
    </div>
  </div>,

  <div className='carousel-item'>
    <div className="carousel-image">
      <img src={food2} width='100%' height='100%' />
    </div>
    <div className="carousel-text">
      <p>"Dalam 3 bulan mengikuti program diet pada Diet Planner, saya telah kehilangan berat badan hingga 5 Kg. Diet Planner sangat membantuku. Jngan takut untuk memulai"</p>
      <div className="people">
        <p>Nama orang</p>
        <p>Pekerjaan orang</p>
      </div>
    </div>
  </div>,

  <div className='carousel-item'>
    <div className="carousel-image">
      <img src={food3} width='100%' height='100%' />
    </div>
    <div className="carousel-text">
      <p>"Dalam 3 bulan mengikuti program diet pada Diet Planner, saya telah kehilangan berat badan hingga 5 Kg. Diet Planner sangat membantuku. Jngan takut untuk memulai"</p>
      <div className="people">
        <p>Nama orang</p>
        <p>Pekerjaan orang</p>
      </div>
    </div>
  </div>
]