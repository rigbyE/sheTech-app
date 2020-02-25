import React from 'react'
import Slider from 'infinite-react-carousel'

const baseImgUrl = 'http://localhost:8000/images/'
const yoda = `${baseImgUrl}yoda.jpeg`
const babyYoda = `${baseImgUrl}baby-yoda-craze.jpg`
const yodaWithMug = `${baseImgUrl}yoda-holding-mug.jpeg`

const Carousel = () => {
  return (
    <Slider dots>
      <div>
        <img className="carousel-image" src={yoda} alt="Yoda" />
      </div>
      <div>
        <img className="carousel-image" src={babyYoda} alt="Baby Yoda" />
      </div>
      <div>
        <img
          className="carousel-image"
          src={yodaWithMug}
          alt="Yoda Holding Mug"
        />
      </div>
    </Slider>
  )
}

export { Carousel }
