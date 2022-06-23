import React, { HtmlHTMLAttributes, useState } from 'react'
import { Container, FloatingLabel, Form, Col, Row, Button, Image } from 'react-bootstrap';
import escudo from "../../Assets/escudo.png";
import "./style.css";
interface LoginModel {
  email: string,
  password: string
}
export default function Login() {
  const [loginData, setLoginData] = useState<LoginModel>({
    email: "",
    password: ""
  });

  return (
    <div className="login-container">
      <div className="bg">
    <Container className='text-center login-main-container'>
      Logue-se no site do verdão! <br />
      <Image src={escudo} style={{width:300}}/> 
      <Form>
        <Row>
          <div className="form-login">
            <Col>
              <Form.Control type="email" placeholder="Email" value={loginData?.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLoginData({...loginData, email: e.target.value})}/>
            </Col>
            <br />
            <Col>
              <Form.Control type="password" placeholder="Senha" value={loginData?.password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLoginData({...loginData, password: e.target.value})}/>
            </Col>
            <br />
            <Button variant="secondary" className="btn-ingressos btn-login">Entrar</Button>
          </div>
        </Row>

      </Form>
    </Container>
    </div>
    </div>
  )
}
