import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from 'react-bootstrap/Image'
import Logo from '../../assets/images/header-logo.png'
// import fb from '../../assets/images/social/Facebook icon.png'
import yt from '../../assets/images/social/youtube.png'
import ins from '../../assets/images/social/insta.png'
import tw from '../../assets/images/social/Twitter.png'
import em from '../../assets/images/social/Email.png'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function NavBar({ history }) {
    return(
        <>
            <Navbar expand="lg" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <div id="topbar-follow-us">
                            <Row className="topbar-follow-us-title-row">
                                <Col lg={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} xs={{span: 12, offset: 0}}>
                                    <p>Follow Us : </p>
                                </Col>
                            </Row>
                        </div>
                        <div id="topbar-follow-us-icon">
                            <Row className="topbar-follow-us-image-row">

                                <Col lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{span: 2, offset: 0}}>
                                    <a target="_blank" rel="noreferrer" href="https://twitter.com/Metal_Roars"><Image width={20} height={20} src={tw} alt="twitter icon"/></a>
                                </Col>
                                <Col lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{span: 2, offset: 0}}>
                                    <a target="_blank" rel="noreferrer" href="/#"><Image width={20} height={20} src={ins} alt="instagram icon"/></a>
                                </Col>
                                <Col lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{span: 2, offset: 0}}>
                                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCNHnVkj0RBT32MG7W6Op_9Q"><Image width={20} height={20} src={yt} alt="youtube icon"/></a>
                                </Col>
                                <Col lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{span: 2, offset: 0}}>
                                    <a target="_blank" rel="noreferrer" href="/#"><Image width={20} height={20} src={em} alt="email icon"/></a>
                                </Col>
                            </Row>
                        </div>
                        <Nav className="navbar-left">
                            <Nav.Link href="#home" className="home-link">Home</Nav.Link>
                            <Nav.Link href="#road-map">Road Map</Nav.Link>
                            <Nav.Link href="#whitepaper">Whitepaper</Nav.Link>
                        </Nav>
                        <div>
                            <Image className="header-logo" loading="lazy" src={Logo} alt="metal roar logo" fluid={true} />
                        </div>
                        <Nav className="navbar-right">
                            <Nav.Link href="#tokonomic">Tokonomic</Nav.Link>
                            <Nav.Link href="#team">Team</Nav.Link>
                            <Nav.Link href="#ido">Ido</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}