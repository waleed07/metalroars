import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Logo from "../../assets/images/logo.svg";
import insta from '../../assets/images/social/insta.svg'
import linkdin from '../../assets/images/social/linkdin.svg'
import medium from '../../assets/images/social/medium.svg'
import twitter from '../../assets/images/social/twitter.svg'
import tele from '../../assets/images/social/tele.svg'
import scroll from '../../assets/images/social/scoral up.svg'
export default function Footer({ history }) {
    function scrollToTop(){
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return(
        <footer className="footer">
            <Container>
                <Row className="footer_row d-flex justify-content-center">
                    <Col className="footer-logo-col text-center" lg={{ span: 4, offset: 0 }} md={{ span: 4, offset: 0 }} xs={{span: 12, offset: 0}}>
                        <Image className="header-logo" src={Logo} width="150px" height="130px" alt="metal roar logo" />
                        {/*<ul id="footer_ul">*/}
                        {/*    <li><a href="/#">Home</a></li>*/}
                        {/*    <li><a href="/#">RoadMap</a></li>*/}
                        {/*    <li><a href="/#">Whitepaper</a></li>*/}
                        {/*</ul>*/}
                    </Col>
                </Row>
                <Row className="footer_row-2 d-flex justify-content-center">
                    <Col lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{span: 6, offset: 0}}>
                        <a target="_blank" rel="noreferrer" href="/#"><Image className="footer-social-image" src={insta} width="60px" height="60px" alt="instagram logo" /></a>
                        {/*<h4 className="footer-social-link">@metalroars</h4>*/}
                    </Col>
                    <Col lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{span: 6, offset: 0}}>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/metal-roars-86494122b/"><Image className="footer-social-image" src={linkdin} width="60px" height="60px" alt="linkdin logo" /></a>
                        {/*<h4 className="footer-social-link">@metalroars</h4>*/}
                    </Col>
                    <Col lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{span: 6, offset: 0}}>
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/Metal_Roars"><Image className="footer-social-image" src={twitter} width="60px" height="60px" alt="twitter logo" /></a>
                        {/*<h4 className="footer-social-link">@metalroars</h4>*/}
                    </Col>
                    <Col lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{span: 6, offset: 0}}>
                        <a target="_blank" rel="noreferrer" href="/#"><Image className="footer-social-image" src={tele} width="60px" height="60px" alt="tele logo" /></a>
                        {/*<h4 className="footer-social-link">@metalroars</h4>*/}
                    </Col>
                    <Col lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{span: 6, offset: 0}}>
                        <a target="_blank" rel="noreferrer" href="https://medium.com/@metalroars"><Image className="footer-social-image" src={medium} width="60px" height="60px" alt="medium logo" /></a>
                        {/*<h4 className="footer-social-link">@metalroars</h4>*/}
                    </Col>
                </Row>
                <Row className="footer_row-3 d-flex justify-content-center text-center">
                    <Col lg={{ span: 4, offset: 0 }} md={{ span: 4, offset: 0 }} xs={{span: 12, offset: 0}}>
                       <a href="/#" className="footer-links text-center">WHITEPAPER</a>
                    </Col>
                    <Col lg={{ span: 4, offset: 0 }} md={{ span: 4, offset: 0 }} xs={{span: 12, offset: 0}}>
                        <a href="/#" className="footer-links text-center">Tokonomics</a>
                    </Col>
                    <Col lg={{ span: 4, offset: 0 }} md={{ span: 4, offset: 0 }} xs={{span: 12, offset: 0}}>
                        <a href="/#" className="footer-links text-center">Pitch Deck</a>
                    </Col>
                </Row>
                <Row className="footer_row-4 d-flex justify-content-center">
                    <Col lg={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} xs={{span: 12, offset: 0}}>
                        <a href="#top" onClick={scrollToTop}>
                            <Image className="footer-social-image" src={scroll} width="40px" height="40px" alt="scroll logo" />
                            <h4 className="footer-scroll">Scroll To Top</h4>
                        </a>
                    </Col>
                </Row>

            </Container>

        </footer>
    )
}