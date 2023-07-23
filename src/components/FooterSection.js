import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';



function FooterSection(){
    return (
        <>
         <footer className="footer">
      <Container>
        <Row>
          <Col lg={4} className="footer__content">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="https://www.youtube.com/watch?v=DGIXT7ce3vQ" className="footer__link" rel="noreferrer noopener" target="_blank">
                  Active link to External pages
                </a>
              </li>
              <li className="footer__item">
                <a href="https://www.youtube.com/watch?v=Xn8tufsbSz0" className="footer__link" rel="noreferrer noopener" target="_blank">
                  Active link to External pages
                </a>
              </li>
              <li className="footer__item">
                <a href="https://www.youtube.com/watch?v=nzlF71hXgV0" className="footer__link" rel="noreferrer noopener" target="_blank">
                  Active link to External pages
                </a>
              </li>
              <li className="footer__item">
                <a href="https://www.youtube.com/watch?v=ySL3NllIhfA" className="footer__link" rel="noreferrer noopener" target="_blank">
                  Active link to External pages
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={4} className="footer__content">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link" rel="noreferrer noopener" target="_blank">
                  Home
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link" rel="noreferrer noopener" target="_blank">
                  Registration
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link" rel="noreferrer noopener" target="_blank">
                  Login
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link" rel="noreferrer noopener" target="_blank">
                  Account
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={4} className="footer__content">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link" rel="noreferrer noopener" target="_blank">
                  Home
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link" rel="noreferrer noopener" target="_blank">
                  Registration
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link" rel="noreferrer noopener" target="_blank">
                  Login
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link" rel="noreferrer noopener" target="_blank">
                  Account
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
        </> 
    )
}

export default FooterSection