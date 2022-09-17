import React from "react";
import {Container, Row} from 'react-bootstrap';

const HeroBanner = () => {
  return (
    <>
      <Container className='mt-4'>
        <Row className='no-gutters'>
            <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner" >
              <div className="carousel-item active">
              <img
                  src="https://d20g9rk0b3pszo.cloudfront.net/images/abt__ut2/banners/all/486/MicrosoftTeams-image__94_.png?t=1662609830"
                  className="d-block w-100 "
                  alt="..."
                />
                
              </div>
              <div className="carousel-item">
              <img
                  src="https://d20g9rk0b3pszo.cloudfront.net/images/abt__ut2/banners/all/312/MicrosoftTeams-image__101_.png?t=1662959898"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
              <img
                  src="https://d20g9rk0b3pszo.cloudfront.net/images/abt__ut2/banners/all/315/MicrosoftTeams-image__81_.png?t=1662699314"
                  className="d-block w-100 "
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
              style={{opacity:0}}
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden" >Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
              style={{opacity:0}}
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
            </Row>
      </Container>

    </>
  );
};

export default HeroBanner;
