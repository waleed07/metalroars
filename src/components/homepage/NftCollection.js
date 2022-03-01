import React,{useState,useEffect,useRef} from "react";
import Image from 'react-bootstrap/Image'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "react-bootstrap/Container";
import Truck1 from '../../assets/images/Truck-1.png'
import Truck2 from '../../assets/images/Truck-2.png'
import Truck3 from '../../assets/images/Truck-3.png'
import Model1 from '../../assets/images/360/model1.mp4'
import Model2 from '../../assets/images/360/model2.mp4'
import Model3 from '../../assets/images/360/model3.mp4'
import BlackTruck from '../../assets/images/Black-Truck.png'

export default function NftCollection({ history }) {
    const [slideCount,setSlideCount] = useState([1,2,3,4,5])
    const [activeSlide,setActiveSlide] = useState(1)
    const [activeElement,setActiveElement] = useState(null)
    const [nav1,setnav1] = useState(null)
    const [nav2,setnav2] = useState(null)
    // const [slickF,setSlickF] = useState('')
    let slide1 = useRef(null);
    let slide2 = useRef(null);

    useEffect(()=>{
        // let slide1 = document.getElementById('truck_image_1');
        // let slide2 = document.getElementById('truck_image_2');
        // let slide3 = document.getElementById('truck_image_3');
        // let slide4 = document.getElementById('truck_image_4');
        // let slide5 = document.getElementById('truck_image_5');
        // if(activeSlide === 1){
        //     slide2.src = BlackTruck
        //
        // }

        //
        // console.log(activeElement)
        setnav1(slide1)
        setnav2(slide2)

        let activeE = document.getElementsByClassName('slick-current')[1];
        if(activeE){
            setActiveElement(activeE)
            activeE.previousElementSibling.classList.add('inactive_truck')
            activeE.nextElementSibling.classList.add('inactive_truck')
        }

    },[nav1,nav2,activeElement])
    const settings = {
        dots: false,
        infinite: true,
        lazyLoad: true,
        className: "center",
        centerMode: true,
        focusOnSelect: true,
        speed: 100,
        // initialSlide: 2,
        slidesToShow: 3,
        slidesToScroll: 1,
        // beforeChange: (current, next) => {
        //     let currentSlide = current+1;
        //     if(!slideCount.includes(currentSlide)){
        //         console.log(currentSlide)
        //     }
        // },
        afterChange: function(index) {
           setActiveSlide(index + 1)
            let activeE = document.getElementsByClassName('slick-current')[1];
            if(activeE){
                setActiveElement(activeE)
                activeE.previousElementSibling.classList.add('inactive_truck')
                activeE.nextElementSibling.classList.add('inactive_truck')
            }
        },
        responsive: [

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const settings2 = {
        dots: false,
        infinite: true,
        lazyLoad: true,
        className: "center",
        centerMode: true,
        focusOnSelect: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => {
            // console.log('before',current,next)
            // let currentSlide = current+1;
            // if(!slideCount.includes(currentSlide)){
            //     console.log(currentSlide)
            // }
        },
        afterChange: function(index) {
            setActiveSlide(index + 1)
        },
        responsive: [

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 390,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    function slicPrev(e){
        slide1.slickPrev()
        slide2.slickPrev()
    }
    function slicNext(e){
        // console.log(slide1.slickNext())
        slide1.slickNext()
        slide2.slickNext()
    }
    let trucks = {};
    trucks[1] = Truck1;
    trucks[2] = Truck2;
    trucks[3] = Truck3;

    let models = {};
    models[1] = Model1;
    models[2] = Model2;
    models[3] = Model3;
    models[4] = Model1;
    models[5] = Model2;

    return(
        <>
            <Container className="nft_collection_container">
                <Row className="nft_collection_row">
                    <Col lg={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} xs={{span: 12, offset: 0}}>
                        <Row className="nft_collection_heading_row mt-lg-5 pt-lg-5">
                            <Col lg={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} xs={{span: 12, offset: 0}}>
                                <h1 className="nft_collection_heading text-center">Nft <span className="nft_collection_monster_heading">Monster</span> Collection</h1>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className="nft_collection_row-2">
                    <Col lg={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} xs={{span: 12, offset: 0}}>
                        <Slider {...settings}
                            asNavFor={nav2}
                            // ref={slide1}
                            ref={(d)=>{
                                slide1 = d
                            }}

                        >
                            {
                                slideCount.map((value,key)=>{
                                    return(
                                        <div key={key} className="d-flex justify-content-center">
                                            <Image
                                                className="d-block truck_image"
                                                src={activeSlide === value ? trucks[value] ? trucks[value] : Truck1 : BlackTruck}
                                                alt="First slide"
                                                width="185px"
                                                // height="50px"
                                                id={`truck_image_${value}`}
                                                fluid={true}
                                                loading="lazy"
                                            />
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                        <hr id="nft_collection_hr"/>
                        {/*<p id="nft_collection_p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>*/}
                    </Col>
                </Row>
                <Row>

                    <Col lg={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} xs={{span: 12, offset: 0}} style={{position: 'relative'}}>
                        <button id="slickPrev" onClick={((e) => slicPrev(e))}></button>
                        <Slider
                            {...settings2}
                            asNavFor={nav1}
                            // ref={slide2}
                            ref={(d)=>{
                                slide2 = d
                            }}
                            slidesToShow={1}
                            swipeToSlide={true}
                            focusOnSelect={true}

                        >
                            {
                                slideCount.map((value,key)=>{
                                    return(
                                        <div key={key} className={activeSlide === value ? "d-flex justify-content-center truck_image_div active_truck" : "d-flex justify-content-center truck_image_div inactive_truck"}>
                                            {/*onClick={slide2.slickPrev()}*/}
                                            {/*<Image src={Flipper1} alt="First slide" width="200px"*/}
                                            {/*       onClick={((e) => slicPrev(e))}*/}
                                            {/*/>*/}
                                            <video
                                                id={`truck_image_bottom_${value}`}
                                                className="d-block truck_image_bottom"
                                                src={models[activeSlide]}
                                                width="600"
                                                height="400"
                                                controls={false}
                                                autoPlay={true}
                                                playsInline={true}
                                                preload="none"
                                                loop={true}
                                                muted={true}
                                            />
                                            {/*<Image*/}
                                            {/*    className="d-block truck_image_bottom"*/}
                                            {/*    src={Truck1}*/}
                                            {/*    alt="First slide"*/}
                                            {/*    width="700px"*/}
                                            {/*    // height="50px"*/}
                                            {/*    id={`truck_image_bottom_${value}`}*/}
                                            {/*    fluid={true}*/}
                                            {/*    loading="lazy"*/}

                                            {/*/>*/}
                                            {/*onClick={slide2.slickNext()}*/}
                                            {/*<Image src={Flipper2} alt="First slide" width="200px" onClick={((e) => slicNext(e))} />*/}
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                        <button id="slickNext" onClick={((e) => slicNext(e))}></button>
                    </Col>

                </Row>

            </Container>

        </>
    )

}