import React from 'react';
import Navbar from '../Component/Navbar'
import Image1 from '../assets/about.png';
import HowItWorks from '../Component/HowItWorks';
import FrequentlyAsk from '../Component/FrequentlyAsk'
import ContentCarousal from '../Component/ContentCarousal'
import SliderCarousal from '../Component/SliderCarousal'
import ApplyForLoan from '../Component/ApplyForLoan'
import Footer from '../Component/Footer'
import Navbarfading from '../Component/Navbarfading';
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {

  AOS.init({ duration: 1700, once: true })

  return (
    <>
      <div className="headerArea">
        <div className="AboutHeader">
          <div className="AboutHeader_bg">
            <div className="container">
              <Navbar />
              <div className="row AboutHeaderR1">
                <div className="col-lg-12 pt-5">
                  <h1 className="pb-5">About Us</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbarfading />
      <div className='Section_3'>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6 ">
              <div data-aos="fade-right">
                <img className="img-fluid" src={Image1} alt="" srcset="" />
              </div>
            </div>
            <div className="col-lg-5 col-md-6 d-flex  align-items-center">
              <div className='text'>
                <h1 className='' data-aos="fade-up">We provide loan for any purpose</h1>
                <p data-aos="fade-up">Esteem spirit temper too say adieus who direct esteem.It esteems luckily or picture placing drawing. Apartments frequently or motionless on reasonable.</p>
                <ul >
                  <li data-aos="fade-left"><p>Loans with quick approval.</p></li>
                  <li data-aos="fade-left"><p>Customize a loan based on the amount.</p></li>
                  <li data-aos="fade-left"><p>Good credit profile and you have built your loan.</p></li>
                  <li data-aos="fade-left"><p>We provide online instant cash loans.</p></li>
                </ul>
                <button type="button" data-aos="fade-left" className="System_btn w-50">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HowItWorks />
      <FrequentlyAsk />
      <ContentCarousal />
      <SliderCarousal />
      <ApplyForLoan />
      <Footer />
    </>
  )
}

export default About