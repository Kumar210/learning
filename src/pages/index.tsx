/* eslint-disable import/default */
import React from "react";
// import Head from "next/head";
// import { HeaderMegaMenu } from '../components/Header/NavBar/index'
import { Step, Stepper } from 'react-form-stepper';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
export default function Home(): JSX.Element {
  return (
    <>
      <Stepper activeStep={1}>
        <Step label="Children Step 1" />
        <Step label="Children Step 2" />
        <Step label="Children Step 3" />
        <Step label="Children Step 1" />
        <Step label="Children Step 2" />
        <Step label="Children Step 3" />
        <Step label="Children Step 1" />
        <Step label="Children Step 2" />
        <Step label="Children Step 3" />
      </Stepper>

      <Carousel
        infiniteLoop
        autoPlay
        interval={3000}
        swipeable
        showThumbs={false}
      >
        <div>
          <img src="https://5.imimg.com/data5/AK/RA/MY-68428614/apple.jpg" style={{
            height: '50px',
            width: '100px'
          }} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img style={{
            height: '50px',
            width: '100px'
          }} src="https://yt3.googleusercontent.com/05lhMeAH6tZrPIUsp2yHNz3DwzhKbDUQcxcY0_qeXVyZttR_pktBzw0FcLUSR6D4fVqsEgL3ZO0=s900-c-k-c0x00ffffff-no-rj" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img style={{
            height: '50px',
            width: '100px'
          }} src="https://images.everydayhealth.com/images/apples-101-about-1440x810.jpg?sfvrsn=f86f2644_1" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>


    </>
  );
}
