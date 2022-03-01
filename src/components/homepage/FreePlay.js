import React from "react";
// import Carousel from 'react-bootstrap/Carousel';
import FreeToPlay from '../../assets/images/free_to_play.png'
import Image from 'react-bootstrap/Image'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Container} from "react-bootstrap";
export default function FreePlay({ history }) {
    return(
        <>
            <Container>
                <Row className="free_play_row">
                    <Col className="" lg={{ span: 6, offset: 0 }} md={{ span: 6, offset: 0 }} xs={{span: 12, offset: 0}}>
                        <Image src={FreeToPlay} alt='KissFrosting' fluid={true} loading="lazy" />
                    </Col>
                    <Col className="mt-lg-5 pt-lg-5" lg={{ span: 6, offset: 0 }} md={{ span: 6, offset: 0 }} xs={{span: 12, offset: 0}}>
                        <h1 className="free_play_heading">
                            {`FREE-TO-PLAY `}
                        </h1>
                        <h1 className="free_play_heading">
                            {`PLAY-TO-EARN`}
                        </h1>
                        <p className="free_play_text">Our aim is to everyone to start playing the METAL ROARS game without having to pay a
                            large amount of money to acquire NFTs at the beginning. We give all users the ability
                            to claim and use a simple & generic NFT Monster Truck with the same basic stats, although
                            NFT cars that are more unique or in special collections will have more advantages than the free,
                            generic NFT Monster Truck.</p>
                    </Col>
                </Row>
            </Container>

        </>
    )

}