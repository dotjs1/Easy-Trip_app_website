import React, { useRef, useEffect } from 'react';
import Hero from './Hero';
import DestinationCard from './Destinationcard';
import { Container, Row, Col } from 'react-bootstrap';
import Lastsection from './Lastsection';
import Whychooseuscard from './Whychooseuscard';
import image1 from './Images/china.jpg';
import image2 from './Images/OIP.jpeg';
import image3 from './Images/download.png';
import image4 from './Images/italy.webp';
import Firstpage from './Firstpage';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Mainpage = () => {
  const scrollRef = useRef(null); // for scrolling the destination cards
  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 400;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true, // this prevents repeat animations
      disable: window.innerWidth < 768 // disables AOS on small screens
    });
  }, []);


  const data_app = [
    { id: 1, data: '1K', data_name: 'Unique Tours' },
    { id: 2, data: '10K', data_name: 'Happy Travelers' },
    { id: 3, data: '4.8', data_name: 'App Store Rating' },
  ];
  const whychooseusdata = [
    {
      id: 1,
      Heading1: 'Clear & Simple App Interface',
      why1: 'Buy a tour in just two clicks. It’s possible with our app.',
      bcg: 'violet',
      aos: "fade-right"
    },
    {
      id: 2,
      Heading1: 'The Mobile App is Free for You',
      why1: 'You can use the application without paying a subscription fee.',
      bcg: 'white',
      aos: "zoom-out"
    },
    {
      id: 3,
      Heading1: 'A Lot of Cool Tours & Routes',
      why1: 'Choose the tour you’re interested in with our app.',
      bcg: 'beige',
      aos: "fade-left"
    },
  ];

  return (
    <div className="Landinpage bg-body-tertiary" style={{maxWidth:"100vw"}}>
      <Firstpage />

      {/* App Data Section */}
      <Container className="container_about_app">
        <Row className="justify-content-center" style={{ gap: '150px', display: 'flex', flexWrap: 'wrap' }}>
          {data_app.map((data) => (
            <Col
              key={data.id}
              className="data"
              xs={10}
              sm={6}
              md={4}
              lg={3}
              style={{ textAlign: 'center', boxSizing: 'border-box' }}
              data-aos="zoom-in"
            >
              <h1>{data.data}+</h1>
              <p>{data.data_name}</p>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Review Section */}
      <div className="review_div">
        <div className="sideline" style={{ width: '40%' }} data-aos="zoom-out" >
          <h1>Immense Tours Selection</h1>
          <p>We turn your dreams into unforgettable travel experiences.</p>
          <button className="btn btn-outline-dark rounded-pill" type="button">
            View Reviews
          </button>
        </div>
      </div>

      <Hero />

      {/* Recommended Tours Section */}
      <Container className="py-5" style={{ minWidth: '100%' }}>

        <h2 className="text-center mb-4">Recommended</h2>
        <div className="d-flex justify-content-between align-items-center px-4 py-2">
          <FontAwesomeIcon icon={faArrowLeft} className="arrow-icon" onClick={() => scroll('left')} />
          <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" onClick={() => scroll('right')} />
        </div>

        <div
          className="hide-scrollbar"
          style={{
            display: 'flex',
            overflowX: 'scroll',
            gap: '1rem',
            padding: '0 1rem',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            maxWidth: '100vw'
          }}
          ref={scrollRef}
        >

          <div style={{ flex: '0 0 auto', width: '400px' }}>
            <DestinationCard
              image={image1}
              pricing="From $1330/day"
              hotels="100 Recommended Hotels"
              title="China"
            />
          </div>
          <div style={{ flex: '0 0 auto', width: '400px' }}>
            <DestinationCard
              image={image3}
              pricing="From $130/day"
              hotels="10 Recommended Hotels"
              title="Bali"
            />
          </div>
          <div style={{ flex: '0 0 auto', width: '400px' }}>
            <DestinationCard
              image={image2}
              pricing="From $1500/day"
              hotels="50 Recommended Hotels"
              title="Paris"

            />
          </div>
          <div style={{ flex: '0 0 auto', width: '400px' }}>
            <DestinationCard
              image={image4}
              pricing="From $5330/day"
              hotels="100 Recommended Hotels"
              title="Italy"

            />

          </div>
        </div>

      </Container>

      <Lastsection />

      {/* Why Choose Us Section */}
      <Container className="py-3 container_whychoose" style={{ width: "100%", padding: '0 1rem' }}>
        {whychooseusdata.map((data) => (
          <Whychooseuscard
            key={data.id}
            Heading={data.Heading1}
            why={data.why1}
            bcg={data.bcg}
            aos={data.aos}
          />
        ))}
      </Container>
    </div>
  );
};

export default Mainpage;

