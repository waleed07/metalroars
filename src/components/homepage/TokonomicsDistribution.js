import React from "react";
// import Carousel from 'react-bootstrap/Carousel';
import Tokonomics1 from '../../assets/images/tokonomics-1.png'
import Tokonomics2 from '../../assets/images/tokonomics-2.png'
import Image from 'react-bootstrap/Image'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
// import Container from "react-bootstrap/Container";
export default function TokonomicsDistribution({ history }) {
    return(
        <>
            <Container>
                <Row className="tokonomics_row" id="tokonomic">
                    <Col className="tokonomic_col_2_mobile" lg={{ span: 6, offset: 0 }} md={{ span: 6, offset: 0 }} xs={{span: 12, offset: 0}} style={{display:'none'}}>
                        <h1 className="tokonomics_heading text-left">TOKENOMICS </h1>
                        <h1 className="tokonomics_span text-left">DISTRUBUTION</h1>
                    </Col>
                    <Col className="tokonomic_col_1" lg={{ span: 6, offset: 0 }} md={{ span: 6, offset: 0 }} xs={{span: 12, offset: 0}}>
                        {/*<div style={{position:"relative"}}>*/}
                        {/*    <Image loading="lazy" src={Tokonomic} alt="tokonomic image icon" fluid={true} />*/}
                        {/*    <Row className="tokonomics_heading_row">*/}
                        {/*        <Col lg={{ span: 4, offset: 0 }} md={{ span: 4, offset: 0 }} xs={{span: 12, offset: 0}}>*/}
                        {/*            <h1 className="tokonomics_heading text-center">TOKENOMICS </h1>*/}
                        {/*            <h1 className="tokonomics_span text-center">DISTRUBUTION</h1>*/}
                        {/*        </Col>*/}
                        {/*    </Row>*/}
                        <Image className="tokonomics_image1" width="640px" loading="lazy" src={Tokonomics1} alt="tokonomic image icon" fluid={true} />
                        {/*</div>*/}

                    </Col>
                    <Col className="tokonomic_col_2" lg={{ span: 6, offset: 0 }} md={{ span: 6, offset: 0 }} xs={{span: 12, offset: 0}}>
                        <h1 id="tokonomics_heading" className="tokonomics_heading text-left">TOKENOMICS </h1>
                        <h1 id="tokonomics_span" className="tokonomics_span text-left">DISTRUBUTION</h1>
                        <div className="tokonomics_image_div">
                            <Image width="600px" className="tokonomics_image" loading="lazy" src={Tokonomics2} alt="tokonomic image icon" fluid={true} />
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )

}