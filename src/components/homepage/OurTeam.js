import React from "react";
// import Carousel from 'react-bootstrap/Carousel';
// import Profile from '../../assets/images/team.jpg'
import Ahmed from '../../assets/images/team/ahmed.jpeg'
import Ars from '../../assets/images/team/arsalan.jpg'
import Rao from '../../assets/images/team/rao.jpg'
import Profile from '../../assets/images/team/avatar.gif'
// import Image from 'react-bootstrap/Image'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
export default function OurTeam({ history }) {
    return(
        <>
            <Container id="team">
                <Row className="our_team_heading_row">
                    <Col lg={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} xs={{span: 12, offset: 0}}>
                        <h1 className="our_team_heading text-center">metal roars team</h1>
                    </Col>
                </Row>
                <Row className="our_team_row">
                    <Col lg={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} xs={{span: 12, offset: 0}}>

                        <Container>
                            <Row className="our_team_image_row">
                                <Col className="" lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{span: 6, offset: 0}}>
                                    <Card>
                                        <Card.Img className="team-image" alt="profile icon" loading="lazy" fluid={true} src={Profile} />
                                    </Card>

                                </Col>
                                <Col lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{span: 6, offset: 0}}>
                                    <span className="team_title">CEO</span>
                                    <p className="team_designation">Vincent R</p>
                                </Col>
                                <Col lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{span: 6, offset: 0}}>
                                    <Card>
                                        <Card.Img className="team-image" alt="profile icon" loading="lazy" fluid={true} src={Profile} />
                                    </Card>
                                </Col>
                                <Col lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{span: 6, offset: 0}}>
                                    <span className="team_title">CO-Founder</span>
                                    <p className="team_designation">Faran q</p>
                                </Col>
                                <Col lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{span: 6, offset: 0}}>
                                    <Card>
                                        <Card.Img className="team-image" alt="profile icon" loading="lazy" fluid={true} src={Profile} />
                                    </Card>
                                </Col>
                                <Col lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{span: 6, offset: 0}}>
                                    <span className="team_title">CTO</span>
                                    <p className="team_designation">M.Marwat</p>
                                </Col>
                            </Row>
                            <Row className="our_team_image_row">
                                <Col lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{span: 6, offset: 0}}>
                                    <Card>
                                        <Card.Img className="team-image" alt="profile icon" loading="lazy" fluid={true} src={Rao} />
                                    </Card>
                                </Col>
                                <Col lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{span: 6, offset: 0}}>
                                    <span className="team_title">CCO</span>
                                    <p className="team_designation">M.Sajjad</p>
                                </Col>
                                <Col lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{span: 6, offset: 0}}>
                                    <Card>
                                        <Card.Img className="team-image" alt="profile icon" loading="lazy" fluid={true} src={Ars} />
                                    </Card>
                                </Col>
                                <Col lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{span: 6, offset: 0}}>
                                    <span className="team_title">Game Developer</span>
                                    <p className="team_designation">Arsalan Q</p>
                                </Col>
                                <Col lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{span: 6, offset: 0}}>
                                    <Card>
                                        <Card.Img className="team-image" alt="profile icon" loading="lazy" fluid={true} src={Profile} />
                                    </Card>
                                </Col>
                                <Col lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{span: 6, offset: 0}}>
                                    <span className="team_title">CMO</span>
                                    <p className="team_designation">M Bhatti</p>
                                </Col>
                            </Row>
                            <Row className="our_team_image_row">
                                <Col className="" lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{span: 6, offset: 0}}>
                                    <Card>
                                        <Card.Img className="team-image" alt="profile icon" loading="lazy" fluid={true} src={Profile} />
                                    </Card>

                                </Col>
                                <Col lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{span: 6, offset: 0}}>
                                    <span className="team_title">Web Dev</span>
                                    <p className="team_designation">Waleed K</p>
                                </Col>
                                <Col lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{span: 6, offset: 0}}>
                                    <Card>
                                        <Card.Img className="team-image" alt="profile icon" loading="lazy" fluid={true} src={Ahmed} />
                                    </Card>
                                </Col>
                                <Col lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{span: 6, offset: 0}}>
                                    <span className="team_title">Junior Dev</span>
                                    <p className="team_designation">Ahmed Q</p>
                                </Col>
                                <Col className="pt-5" lg={{ span: 1, offset: 0 }} md={{ span: 1, offset: 0 }} xs={{span: 2, offset: 0}}>
                                    <h1 className="team_h">+5 </h1>
                                </Col>
                                <Col className="pt-5" lg={{ span: 3, offset: 0 }} md={{ span: 3, offset: 0 }} xs={{span: 10, offset: 0}}>
                                    <h1 className="team_h2">OTHER MONSTER ROARS SMART TEAM MEMBERS</h1>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>

        </>
    )

}