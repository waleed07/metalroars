import React from "react";
// import Carousel from 'react-bootstrap/Carousel';
// import Profile from '../../assets/images/profile_Icon_SVG_fagpav.png'
// import Image from 'react-bootstrap/Image'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Profile from "../../assets/images/team/avatar.gif";
export default function Advisors({ history }) {
    return(
        <>
            <Container>
                <Row className="advisor_row">
                    <Col lg={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} xs={{span: 12, offset: 0}}>
                        <Row className="advisor_heading_row mt-lg-5 pt-lg-5 mb-5">
                            <Col lg={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} xs={{span: 12, offset: 0}}>
                                <h1 className="advisor_heading text-center">Advisors</h1>
                            </Col>
                        </Row>
                        <Container>
                            <Row className="advisor_image_row mt-lg-2 mb-3">
                                <Col className="mb-3" lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{span: 6, offset: 0}}>
                                    <Card>
                                        <Card.Img alt="profile icon" fluid={true} loading="lazy" src={Profile} />
                                    </Card>

                                </Col>
                                <Col lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{span: 6, offset: 0}}>
                                    <span className="team_title">CEO, FOUNDER</span>
                                    <p className="team_designation">Saad Bhatti</p>
                                </Col>
                                <Col lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{span: 6, offset: 0}}>
                                    <Card>
                                        <Card.Img alt="profile icon" fluid={true} loading="lazy" src={Profile} />
                                    </Card>
                                </Col>
                                <Col lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{span: 6, offset: 0}}>
                                    <span className="team_title">CEO, FOUNDER</span>
                                    <p className="team_designation">Saad Bhatti</p>
                                </Col>
                                <Col lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{span: 6, offset: 0}}>
                                    <Card>
                                        <Card.Img alt="profile icon" fluid={true} loading="lazy" src={Profile} />
                                    </Card>
                                </Col>
                                <Col lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{span: 6, offset: 0}}>
                                    <span className="team_title">CEO, FOUNDER</span>
                                    <p className="team_designation">Saad Bhatti</p>
                                </Col>
                            </Row>

                        </Container>
                    </Col>
                </Row>
            </Container>

        </>
    )

}