import React from "react";
// import Carousel from 'react-bootstrap/Carousel';
// import GamePlay from '../../assets/images/game_play.png'
// import Image from 'react-bootstrap/Image'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function GamePlay({ history }) {
    return(
        <>
            <Row className="game_play_row">
                <Col lg={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} xs={{span: 12, offset: 0}}>
                    <Row className="game_play_heading_row mt-lg-5 pt-lg-5 text-center">
                        <Col lg={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} xs={{span: 12, offset: 0}}>
                            <h1 className="game_play_heading">Game Play</h1>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )

}