import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import image from './images/pexels-asad-photo-maldives-457882.jpg';

function  Costsection(){
    return (
        <>
         <section className="cost">
      <Container>
        <Row>
          <Col lg={4} className="cost__content">
            <div className="cost__image">
            <img
              src={image}
              className="cost__image"
              alt="Logo"
            />
            </div>
            <p className="cost__para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsum consequuntur, architecto amet qui maxime aperiam laboriosam obcaecati saepe veniam!
            </p>

            <div className="cost__button">
              <a href="#" className="cost__link">More Info</a>
            </div>
          </Col>
          <Col lg={4} className="cost__content">
            <div className="cost__image">
            <img
              src={image}
              className="cost__image"
              alt="Logo"
            />
            </div>
            <p className="cost__para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsum consequuntur, architecto amet qui maxime aperiam laboriosam obcaecati saepe veniam!
            </p>

            <div className="cost__button">
              <a href="#" className="cost__link">More Info</a>
            </div>
          </Col>
          <Col lg={4} className="cost__content">
            <div className="cost__image">
            <img
              src={image}
              className="cost__image"
              alt="Logo"
            />
            </div>
            <p className="cost__para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsum consequuntur, architecto amet qui maxime aperiam laboriosam obcaecati saepe veniam!
            </p>

            <div className="cost__button">
              <a href="#" className="cost__link">More Info</a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
        </> 
    )
}

export default Costsection