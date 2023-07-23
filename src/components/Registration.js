import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
// // Registration component
 const Registration = () => {
//     // State to capture user input
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
  
//     // Function to handle user registration (you can implement the actual registration logic here)
     const handleRegistration = () => {
//       // Implement registration logic
       console.log('Registered:', email, password);
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
              <h2>Registration</h2>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Joe Wallace" />
              </Form.Group>


              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Email</Form.Label>
                <Form.Control type="Email" placeholder="Email"   value={email}  onChange={(e) => setEmail(e.target.value)}/>
              </Form.Group>


              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="repeatPassword">
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control type="password" placeholder="Repeat Password" />
              </Form.Group>

              <Button type="submit" variant="primary"  onClick={handleRegistration}>
                       Register
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