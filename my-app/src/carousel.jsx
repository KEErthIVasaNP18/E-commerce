
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselComponents.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselComponent = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: '400px', backgroundColor: '#f8f9fa', marginTop:'-50px' }}
    >
      <Carousel style={{ width: '1300px' }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: '300px', objectFit: 'cover' }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpmCs2VpfURk0-IPkW6B_D7fMT0z6ZYSJ_ww&s"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={{color:'white'}}>Birthday Dress for Women</h3>
            <p style={{color:'white'}}> Light, breezy, and perfect for your sunny days  explore our latest collection of women's summer wear.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: '300px', objectFit: 'cover' }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrwG0GIiJOgHGSb2wCiyGrhU79cgFOiJ2qmQ&s"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Fashions for women</h3>
            <p>Turn heads with this stunning evening dress – where elegance meets confidence in every stitch.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: '300px', objectFit: 'cover' }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFaHVJBwwWlXbzBmHm573XpxUxf1vfitwNFQ&s"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 style={{color:'white'}}>Coats suits for men</h3>
            <p style={{color:'white'}}>Refined tailoring and timeless style – explore our premium collection of men’s coats and suits for every occasion.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
