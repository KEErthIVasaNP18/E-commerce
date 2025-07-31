
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselComponents.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselComponent = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: '400px', backgroundColor: '#f8f9fa' }}
    >
      <Carousel style={{ width: '1300px' }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: '300px', objectFit: 'cover' }}
            src="https://www.avikalp.com/cdn/shop/products/MWZ3562_wallpaper3.jpg?v=1746037673"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={{color:'black'}}>Birthday Dress for Women</h3>
            <p style={{color:'black', fontWeight:'600'}}> Light, breezy, and perfect for your sunny days  explore our latest collection of women's summer wear.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: '300px', objectFit: 'cover' }}
            src="https://www.avikalp.com/cdn/shop/products/MWZ3564_wallpaper1.jpg?v=1746037669"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3  style={{color:'blue'}}>Fashions for women</h3>
            <p  style={{color:'blue'}}>Turn heads with this stunning evening dress – where elegance meets confidence in every stitch.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: '300px', objectFit: 'cover' }}
            src="https://media.istockphoto.com/id/1293366109/photo/this-one-match-perfect-with-me.jpg?s=612x612&w=0&k=20&c=wJ6yYbRrDfdmoViuQkX39s2z_0lCiNQYgEtLU--0EbY="
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
