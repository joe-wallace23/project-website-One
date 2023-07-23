import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

// Login component
const Login = ({ onLogin }) => {
    // State to capture user input
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    // Function to handle user login
    const handleLogin = () => {
      // Implement login logic
      // Here, we're just passing the email to simulate a successful login
      onLogin(email);
    };
}


function LoginForm(){
    return (
        <>
       
      <section className="looks">
      <Container>
        <Row>
          <Col lg={4} className="offset-md-4 look__content">
            <Form>
              <h2>Login</h2>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Joe Wallace" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
              </Form.Group>

              <Button type="submit" onClick={handleLogin} variant="primary">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
   
        </> 
    )
}

export default LoginForm