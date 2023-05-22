import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

const ProductCarousel = () => {
  const navigate = useNavigate()
  const handleClick = (category) => {
    navigate(`/products?path=${category}`)
  }
  return (
    <Carousel pause='hover' className='bg-dark'>
      {carouselDetails.map(({ image, title, category }, idx) => (
        <Carousel.Item onClick={() => handleClick(category)} key={idx} >
          <img
            className="d-block w-100"
            src={image}
            alt="First slide"
          />
          {title &&
            <Carousel.Caption>
              <h3>Mega Sale is Back 🚀 | Shop Now </h3>
            </Carousel.Caption>}
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ProductCarousel;

const carouselDetails = [
  {
    image: 'https://i.postimg.cc/cCCXJVXj/applePC2.png',
    title: 'Mega Sale is Back 🚀 | Shop Now',
    category: 'electronics'
  },
  {
    image: 'https://i.postimg.cc/cCJdTMcY/6jzd-BZiqh4l-HIf-Pm.png',
    category: 'cloth'
  },
  {
    image: 'https://i.postimg.cc/tg2rH3j2/advantages-to-buy-from-online-grocery-store-250453-1000x.png',
    category: 'grocery'
  },
]