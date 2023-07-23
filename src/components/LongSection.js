import React from 'react';

import {Container, Row, Col } from 'react-bootstrap';
import time from './images/pexels-asad-photo-maldives-1268855.jpg';

function LongSection(){
    return (
        <>
          <section className="long">
      <Container>
        <Row>
          <Col lg={4} className="long__content">
            <div className="long__image">
            <img
              src={time}
              className="cost__image"
              alt="Logo"
            />
            </div>
          </Col>
          <Col lg={8} className="long__content">
            <br /><br />
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

export default LongSection