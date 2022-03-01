import React from "react";
// import Carousel from 'react-bootstrap/Carousel';
import RoadMapIcon from '../../assets/images/roadmap-icon.svg'
// import RoadMapClock from '../../assets/images/roadmap-clock.svg'
import RoadMapSmocky from '../../assets/images/road_map_smoky_back.png'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
export default function RoadMap({ history }) {

    // function translateSmokeImage(){
    //     let smoke = document.getElementById('road_map_smocke');
    //     // console.log(smoke)
    //     smoke.style.transform  = 'translate(-162px, -30px)'
    // }
    // function translateBackSmokeImage(){
    //     let smoke = document.getElementById('road_map_smocke');
    //     smoke.style.transform  = 'translate(-200px, -40px)'
    // }
    return(
        <>
            <Container id="road-map">
                <Row className="road_map_row mb-5">
                    <Col lg={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} xs={{span: 12, offset: 0}}>
                        <Row className="road_map_heading_row">
                            <Col lg={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} xs={{span: 12, offset: 0}}>
                                <h1 className="road_map_heading text-center">
                                    {`RoadMap `}
                                </h1>

                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="road_map_row-2">
                    <Col lg={{ span: 3, offset: 0 }} md={{ span: 3, offset: 0 }} xs={{span: 3, offset: 0}}>
                        <h4 className="road_map_q">Q1  <span className="road_map_date">/ 2022</span></h4>
                    </Col>
                    <Col lg={{ span: 3, offset: 0 }} md={{ span: 3, offset: 0 }} xs={{span: 3, offset: 0}}>
                        <h4 className="road_map_q">Q2  <span className="road_map_date">/ 2022</span></h4>
                    </Col>
                    <Col lg={{ span: 3, offset: 0 }} md={{ span: 3, offset: 0 }} xs={{span: 3, offset: 0}}>
                        <h4 className="road_map_q">Q3  <span className="road_map_date">/ 2022</span></h4>
                    </Col>
                    <Col lg={{ span: 3, offset: 0 }} md={{ span: 3, offset: 0 }} xs={{span: 3, offset: 0}}>
                        <h4 className="road_map_q">Q4  <span className="road_map_date">/ 2022</span></h4>
                    </Col>
                </Row>
                <Row className="road_map_row-3">
                    <Col lg={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} xs={{span: 12, offset: 0}}>
                        <hr id="road_map_hr"/>
                    </Col>
                </Row>
                <Row className="road_map_row-4">
                    <Col lg={{ span: 3, offset: 0 }} md={{ span: 3, offset: 0 }} xs={{span: 3, offset: 0}}>
                        <Image width="20px" height="20px" className="road_map_hr_image" src={RoadMapIcon} alt="road map hr image" />
                    </Col>
                    <Col lg={{ span: 3, offset: 0 }} md={{ span: 3, offset: 0 }} xs={{span: 3, offset: 0}}>
                        <Image width="20px" height="20px" className="road_map_hr_image" src={RoadMapIcon} alt="road map hr image" />
                    </Col>
                    <Col lg={{ span: 3, offset: 0 }} md={{ span: 3, offset: 0 }} xs={{span: 3, offset: 0}}>
                        <Image width="20px" height="20px" className="road_map_hr_image" src={RoadMapIcon} alt="road map hr image" />
                    </Col>
                    <Col lg={{ span: 3, offset: 0 }} md={{ span: 3, offset: 0 }} xs={{span: 3, offset: 0}}>
                        <Image width="20px" height="20px" className="road_map_hr_image" src={RoadMapIcon} alt="road map hr image" />
                    </Col>
                </Row>

                <Row className="road_map_row-5 mt-lg-3">
                    <Col lg={{ span: 3, offset: 0 }} md={{ span: 3, offset: 0 }} xs={{span: 6, offset: 0}}>
                        <ul className="road_map_ul">
                            <li>Smart Contract / Audit </li>
                            <li>Whitepaper/pitchdeck </li>
                            <li>Website Launch </li>
                            <li>Social media Presence</li>
                            <li>Character Introduce </li>
                            <li>Gameplay Video </li>
                        </ul>
                    </Col>
                    <Col lg={{ span: 3, offset: 0 }} md={{ span: 3, offset: 0 }} xs={{span: 6, offset: 0}}>
                        <ul className="road_map_ul">
                            <li>Marketing Round 1 </li>
                            <li>Game trailer </li>
                            <li>Seed/Private Round </li>
                            <li>IDO's  / INO's Launch</li>
                            <li>NFT Character Release </li>
                        </ul>
                    </Col>
                    <Col lg={{ span: 3, offset: 0 }} md={{ span: 3, offset: 0 }} xs={{span: 6, offset: 0}}>
                        <ul className="road_map_ul">
                            <li>Game alpha On Web GL </li>
                            <li>Nft Marketplace </li>
                            <li>Nft Airdrop </li>
                            <li>CMC/ CG Listing </li>
                            <li>Marketing Round 2 </li>
                            <li>Nft Staking </li>
                        </ul>
                    </Col>
                    <Col lg={{ span: 3, offset: 0 }} md={{ span: 3, offset: 0 }} xs={{span: 6, offset: 0}}>
                        <ul className="road_map_ul">
                            <li>Game Beta Android & ios </li>
                            <li>Garage  & Truck Upgrade</li>
                            <li>Stunt / Race mode intro </li>
                            <li>Introducing 1st city </li>
                        </ul>
                    </Col>
                </Row>
                <Row className="road_map_row-6 mt-lg-3">
                    <Col className="text-center" lg={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} xs={{span: 12, offset: 0}}>
                        <Image loading="lazy" width="800px" height="500px" className="road_map_smocky_truck" src={RoadMapSmocky} alt="road map smocky truck" fluid={true}/>
                    </Col>
                </Row>
            </Container>


        </>
    )

}