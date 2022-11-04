import React from 'react'
import Footer from '../components/Footer/Footer'
import CarouselComponent from '../components/homeComponents/Carousel/carousel.component'
import JoinUs from '../components/homeComponents/joinUs/JoinUs'
import Jumbotron from '../components/homeComponents/Jumbotron/Jumbotron'
import Program from '../components/homeComponents/Program/Program'
import WhyUs from '../components/homeComponents/whyChooseUs/WhyUs'
import Navbar from '../components/Navbar/Navbar'

function HomePage() {
  return (
    <>
      <Navbar />
			<Jumbotron />
      <WhyUs />
      <Program />
      <CarouselComponent />
      <JoinUs />
      <Footer />
    </>
  )
}

export default HomePage