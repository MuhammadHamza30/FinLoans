import Navbar from "../Component/Navbar";
import Footer from '../Component/Footer';
import HowItWorks from "../Component/HowItWorks";
import serviceCard1 from '../assets/service_1.png';
import serviceCard2 from '../assets/service_2.png';
import serviceCard3 from '../assets/service_3.png';
import Image1 from '../assets/about.png';
import FrequentlyAsk from '../Component/FrequentlyAsk';
import ContentCarousal from '../Component/ContentCarousal';
import SliderCarousal from '../Component/SliderCarousal';
import ApplyForLoan from '../Component/ApplyForLoan';
import Navbarfading from '../Component/Navbarfading';
import AOS from 'aos'
import 'aos/dist/aos.css'

function Home() {

  AOS.init({ duration: 1700, once: true })

  function calculateTotal() {
    const amount = parseFloat(document.getElementById('amount').value);
    const month = parseFloat(document.getElementById('month').value);

    if (amount > 0 && month > 0) {
      const monthlyPayment = amount / month;
      const interest = (month / 100) * amount; // 1% interest per month
      const totalPayment = (monthlyPayment * month) + interest;
      document.getElementById('total').innerText = `You have to pay: $${Math.round(totalPayment)}`;
    } else {
      document.getElementById('total').innerText = 'You have to pay: $0';
    }
  }



  return (
    <>
      <div className="Section_1 headerArea">
        <div className="header">
          <div className="single_slider d-flex header_bg">
            <div className="container">
              <Navbar />
              <div className="row headerR1">
                <div className="col-lg-7 col-sm-12 pt-5 hoveringeffect">
                  <h1 className="pb-5" data-aos="fade-left">Get Loan for your Business growth or startup</h1>
                  <button type="button" data-aos="fade-right" className="System_btn">How It Works</button>
                </div>
                <div className="col-lg-5 col-sm-12 py-2">
                  <form className="bg-white p-4 rounded" data-aos="fade-down">
                    <h2 className="p-3 text-center">How much do you want?</h2>
                    <p className="text-muted text-center">We provide online instant cash loans with quick processing.</p>
                    <select className="form-select py-2 my-2" id="amount" onChange={calculateTotal}>
                      <option selected>Amount</option>
                      <option value="30">$30</option>
                      <option value="40">$40</option>
                      <option value="50">$50</option>
                    </select>
                    <br />
                    <select className="form-select py-2 my-2" id="month" onChange={calculateTotal}>
                      <option selected>Month</option>
                      <option value="3">3 Month</option>
                      <option value="4">4 Month</option>
                      <option value="5">5 Month</option>
                    </select>
                    <p id="total">You have to pay: $0</p>
                    <button type="button" className="System_btn my-3 py-2 w-100">Continue</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbarfading />
      <div className="Sectioin_2 cards my-5 py-5">
        <div className="container">
          <div className="row card_info_section pb-4">
            <div className="col section1">
              <div className="lineTag" data-aos="fade-up"></div>
              <div>
                <h2 className="fs-1 pt-3" data-aos="fade-up">What we offer for you</h2>
                <p data-aos="fade-up">We provide online instant cash loans with quick approval that suit your term</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="card my-3 pt-5" data-aos="fade-right">
                <img src={serviceCard1} className="mx-auto w-25" alt="..." />
                <div className="card-head text-center py-2">
                  <p>Home Loan</p>
                  <h3>$3000-$10000</h3>
                </div>
                <div className="card-body">
                  <ul>
                    <li><h6>Borrow - $350 over 3 months</h6></li>
                    <li><h6>Interest rate - 292% pa fixed</h6></li>
                    <li><h6>Total amount payable - $525.12</h6></li>
                    <li><h6>Representative - 1,286% APR</h6></li>
                  </ul>
                  <div className="card-button pt-3">
                    <button type="button" className="System_btn w-100">Apply Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card my-3 pt-5" data-aos="fade-up">
                <img src={serviceCard2} className="mx-auto w-25" alt="..." />
                <div className="card-head text-center py-2">
                  <p>Car Loan</p>
                  <h3>$3000-$10000</h3>
                </div>
                <div className="card-body">
                  <ul>
                    <li><h6>Borrow - $350 over 3 months</h6></li>
                    <li><h6>Interest rate - 292% pa fixed</h6></li>
                    <li><h6>Total amount payable - $525.12</h6></li>
                    <li><h6>Representative - 1,286% APR</h6></li>
                  </ul>
                  <div className="card-button pt-3">
                    <button type="button" className="System_btn w-100">Apply Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card my-3 pt-5" data-aos="fade-left">
                <img src={serviceCard3} className="mx-auto w-25" alt="..." />
                <div className="card-head text-center py-2">
                  <p>Education Loan</p>
                  <h3>$3000-$10000</h3>
                </div>
                <div className="card-body">
                  <ul>
                    <li><h6>Borrow - $350 over 3 months</h6></li>
                    <li><h6>Interest rate - 292% pa fixed</h6></li>
                    <li><h6>Total amount payable - $525.12</h6></li>
                    <li><h6>Representative - 1,286% APR</h6></li>
                  </ul>
                  <div className="card-button pt-3">
                    <button type="button" className="System_btn w-100">Apply Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                <h1 className='' data-aos="fade-up">Why Choose Us?</h1>
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
  );
}

export default Home;
