import React from 'react'
import { Button, Carousel, Container, Row, Col, Image } from 'react-bootstrap'
import LabelGreen from '../../components/LabelGreen/Index';
import TeamVsTeam from '../../components/TeamsVsTeam/Index';
import bgHome from '../../Assets/bg-home.jpg';
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
      <br />
      <Container>
        <Row>
          <Col className="text-center">
            <h2>Ingressos Para <i className="txt-green">Jogos</i></h2>
          </Col>

        </Row>

        <Row>
          <Col className='text-center'>
            <TeamVsTeam imgTeam='https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/640px-Palmeiras_logo.svg.png' imgTeam2='https://www.imagensempng.com.br/wp-content/uploads/2021/01/52.png' />
          </Col>
        </Row>

        <Row>

          <Col className='text-center'>
            <Button variant="secondary" className="btn-ingressos">Ingressos</Button>
          </Col>
        </Row>

        <br /><br /><br />

      </Container>
      <div className="sobre-bg-main">
        <Container>

          <Row>

            <Col className='text-center'>
              <h1>Sobre n??s</h1>
              O Palmeiras surgiu no dia 26 de agosto de 1914. Fundado por imigrantes italianos, seu primeiro nome foi Societ?? Sportiva Palestra Italia. <br />
              Em 1942, quando estava estabelecida como uma for??a do futebol paulista, a equipe foi obrigada a trocar de nome, passando a se chamar Sociedade Esportiva Palmeiras em decorr??ncia da Segunda Guerra Mundial. <br />
              O Palmeiras foi campe??o paulista logo em sua primeira partida com o novo nome. Foram, ao todo, 22 t??tulos estaduais. <br />
              Um dos times mais famosos da hist??ria do clube alviverde foi o chamado de "Academia de Futebol", das d??cadas de 1960 e 70, liderado por Ademir da Guia - um dos poucos elencos que faziam frente ao Santos de Pel??. <br />
              o Estado de S??o Paulo, o Palmeiras tamb??m ?? um dos principais vencedores, com 24 conquistas do Campeonato Paulista de Futebol e mais dois t??tulos extra da mesma competi????o. Em 1996, o alviverde conquistou o estadual daquele ano com a melhor campanha de uma equipe na era profissional neste campeonato. <br /> 
              Na ocasi??o, foi campe??o com 83 pontos ganhos em 90 poss??veis, com um ??ndice de aproveitamento de 92,2% dos pontos disputados e 102 gols marcados em 30 jogos realizados. Desde ent??o, esta marca jamais foi alcan??ada por qualquer outra equipe na competi????o. <br />

              No mais recente Ranking Nacional de Clubes da CBF, que leva em conta o comportamento das equipes nas ??ltimas cinco temporadas e que foi divulgado em dezembro de 2021, o Palmeiras ?? o segundo colocado, com 14???584 pontos. <br />
               No ??ltimo ranking da confedera????o que levou em conta um per??odo hist??rico mais abrangente do futebol brasileiro e que foi divulgado em 2011, o Palmeiras foi o l??der, com 2???366 pontos. 
               Em 2005, no dia 11 de outubro, foi sancionada na cidade de S??o Paulo a Lei n.?? 14.060, que definiu o dia 20 de setembro como o "Dia da Sociedade Esportiva Palmeiras", que passou a ser lembrado anualmente na capital paulista, j?? que passou a integrar o Calend??rio Oficial do Munic??pio.

            </Col>


          </Row>
          <br /><br /><br /><br /><br />
        </Container>

      </div>

    </>

  )
}
