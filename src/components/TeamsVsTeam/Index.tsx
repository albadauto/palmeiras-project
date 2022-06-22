import React from 'react'
import { Image, Row, Col } from 'react-bootstrap'
import "./style.css";
interface imageModel {
    imgTeam?: string,
    imgTeam2?: string,
    nameTeam?: string,
    nameTeam2?: string
}
export default function TeamVsTeam(props: imageModel) {
    return (
        <div className="teamvsteam-main">
            <Row>
                <Col >
                    <Image src={props.imgTeam} className="img-team-one" /> 
                </Col>

                <Col >
                    <h1 style={{marginTop:70}}>X</h1>
                </Col>
                

                <Col>
                    <Image src={props.imgTeam2} className="img-team-one" /> 
                </Col>

            </Row>

        </div>
    )
}
