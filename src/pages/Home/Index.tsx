import React from 'react'
import { Button, Carousel, Container, Row, Col } from 'react-bootstrap'
import LabelGreen from '../../components/LabelGreen/Index';
import TeamVsTeam from '../../components/TeamsVsTeam/Index';
import "./style.css";
export default function Home() {
  return (
    <>
      <Carousel className='caroulsel-main'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://conteudo.imguol.com.br/c/esporte/7b/2022/06/21/gabriel-menino-foi-cobrado-por-reinaldo-apos-o-apito-final-da-partida-entre-sao-paulo-e-palmeiras-1655811665892_v2_900x506.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.verdazzo.com.br/wp-content/uploads/2022/05/20220504_veron-rony-veiga-ze.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blte4583e06c803fb4b/628d8689cd92380f57a2c4a2/palmeiras.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        <br/>
      <Container>
        <Row>
          <Col className="text-center">
            <h2>Ingressos Para <i className="txt-green">Jogos</i></h2>
          </Col>

        </Row>

        <Row>
          <Col className='text-center'>
            <TeamVsTeam imgTeam='https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/640px-Palmeiras_logo.svg.png' imgTeam2='https://www.imagensempng.com.br/wp-content/uploads/2021/01/52.png'/>
          </Col>
        </Row>

        <Row>

          <Col className='text-center'>
            <Button variant="secondary" className="btn-ingressos">Ingressos</Button>
          </Col>
        </Row>

      </Container>
      <br /><br /><br /><br />

    </>

  )
}
