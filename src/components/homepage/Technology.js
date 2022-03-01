import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Binance from '../../assets/images/binance.png'
import Unity from '../../assets/images/unity.png'
export default function Technology() {
    return(
        <>
        <Container>
            <Row>
                <Col lg={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} xs={{span: 12, offset: 0}}>
                    <h1 className="technology_heading text-center">Technology</h1>
                </Col>
            </Row>
            <Row className="">
                <Col className="text-center" lg={{ span: 6, offset: 0 }} md={{ span: 6, offset: 0 }} xs={{span: 6, offset: 0}}>
                    <Image className="binance_image" src={Binance} alt="binance logo" fluid={true} />
                </Col>
                <Col className="text-center" lg={{ span: 6, offset: 0 }} md={{ span: 6, offset: 0 }} xs={{span: 6, offset: 0}}>
                    <Image className="unity_image" src={Unity} alt="unity logo" fluid={true} />
                </Col>
            </Row>
        </Container>
        </>
    )
}