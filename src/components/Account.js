import React from 'react';
import Money from '../components/Money';  
import FooterSection from '../components/FooterSection';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

const App = () => {
    // State to track user login status
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState('');
  
    // Function to handle user login
    const handleLogin = (email) => {
      setIsLoggedIn(true);
      setUserEmail(email);
    };
  
    // Function to handle user logout
    const handleLogout = () => {
      setIsLoggedIn(false);
      setUserEmail('');
    };
  }


function RegistrationForm(){
    return (
        <>



  <section className="looks">
      <Container>
        <Row>
          <Col lg={4} className="offset-md-4 look__content">
            <Form>
              <h2>Account</h2>
              <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Joe" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Wallace" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="addressLine1">
                <Form.Label>Address Line 1</Form.Label>
                <Form.Control type="text" placeholder="Address line 1" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="addressLine2">
                <Form.Label>Address Line 2</Form.Label>
                <Form.Control type="text" placeholder="Address line 2" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="City" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="state">
                <Form.Label>State</Form.Label>
                <Form.Select>
                  <option value="">Missouri</option>
                  <option value="Arizona">Arizona</option>
                  <option value="Colorado">Colorado</option>
                  <option value="Delaware">Delaware</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="zipCode">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control type="text" placeholder="Zip Code" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="phoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Phone Number" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="email" userEmail={userEmail} onLogout={handleLogout}  />
              </Form.Group>

              <Button type="submit" variant="primary">
                Submit
              </Button>
              <Button type="reset" variant="primary">
                Reset
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>


        </> 
    )
}

export default RegistrationForm