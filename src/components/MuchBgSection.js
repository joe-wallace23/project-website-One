import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function MuchBgSection(){
    return (
        <>
  <section className="muchbg">
      <Container>
        <Row>
          <Col lg={4} className="muchbg__content">
            <div className="muchbg__head">
              <h1 className="title">Welcome to your Dream</h1>
            </div>
            <p className="para">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
              fugit magni. Voluptatibus quibusdam pariatur nobis facere iste
              voluptates sapiente laudantium?
            </p>

            <div className="button">
              <a href="#" className="link">
                Learn More
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
        </> 
    )
}

export default MuchBgSection