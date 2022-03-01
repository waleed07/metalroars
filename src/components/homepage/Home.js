import React,{Suspense} from 'react';
import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Header from "../partials/Header";
// import Footer from "../partials/Footer";
// import Banner from "./Banner";
// import GamePlay from "./GamePlay";
// import FreePlay from "./FreePlay";
// import RoadMap from "./RoadMap";
// import OurTeam from "./OurTeam";
// import Advisors from "./Advisors";
// import NftCollection from "./NftCollection";
// import NewsFeed from "./NewsFeed";
// import TokonomicsDistribution from "./TokonomicsDistribution";
import Spinner from "../spinner/spinner";
const Header = React.lazy(() => import('../partials/Header'));
const Footer = React.lazy(() => import('../partials/Footer'));
const Banner = React.lazy(() => import('./Banner'));
const GamePlay = React.lazy(() => import('./GamePlay'));
const FreePlay = React.lazy(() => import('./FreePlay'));
const RoadMap = React.lazy(() => import('./RoadMap'));
const OurTeam = React.lazy(() => import('./OurTeam'));
// const Advisors = React.lazy(() => import('./Advisors'));
const NftCollection = React.lazy(() => import('./NftCollection'));
const NewsFeed = React.lazy(() => import('./NewsFeed'));
const TokonomicsDistribution = React.lazy(() => import('./TokonomicsDistribution'));
const Technology = React.lazy(() => import('./Technology'));
const Faq = React.lazy(() => import('./Faq'));

export default function HomePage({ history }) {
    return(
        <>
            <Suspense fallback={<Spinner />}>
                <Container className="d-flex justify-content-center header-div" fluid={true}>
                    <Header />
                </Container>
                <Container className="" fluid={true}>
                    <Banner />
                </Container>
                <Container fluid={true}>
                    <GamePlay/>
                </Container>
                <Container fluid={true} className="freeplay_container">
                    <FreePlay/>
                </Container>
                <Container fluid={true}>
                    <RoadMap/>
                </Container>
                <Container fluid={true} className="nft_container">
                    <NftCollection />
                </Container>
                <Container className="news_feed_container" fluid={true}>
                    <NewsFeed />
                </Container>
                <Container className="tokonomics_container" fluid={true}>
                    <TokonomicsDistribution />
                </Container>
                <Container className="team_container" fluid={true}>
                    <OurTeam/>
                </Container>
                <Container className="technology_container" fluid={true}>
                    <Technology />
                </Container>
                <Container className="faq_container" fluid={true}>
                    <Faq />
                </Container>
                <Footer/>
            </Suspense>

        </>

    )
}