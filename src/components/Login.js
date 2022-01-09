import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { Container,Row,Col } from "react-bootstrap";
import SignUp from "./SignUp";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalShow, setModalShow] = React.useState(false);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    // <div className="Login">
    <Container className="login-container" fluid>
       
  <Row>
    <Col>
    <Form  action="home">
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <br/>
        <div className="d-grid gap-2">
            <Button variant="primary" size="lg" type="submit">
                Login
            </Button>
            <Button variant="secondary" size="lg" onClick={() => setModalShow(true)}>
                Signup
            </Button>
             <SignUp
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
      </Form>
    
    </Col>
  </Row>
      
      </Container>
    
  );
}