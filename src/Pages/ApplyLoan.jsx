import React from 'react';
import Navbar from '../Component/Navbar.jsx'
import Navbarfading from '../Component/Navbarfading.jsx';
import Footer from '../Component/Footer.jsx';
import HowItWorks from '../Component/HowItWorks.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos'
import 'aos/dist/aos.css'

function ApplyLoan() {

  AOS.init({ duration: 1700, once: true })

  return (<>
    <div className="headerArea">
      <div className="ApplyHeader">
        <div className="ApplyHeader_bg">
          <div className="container">
            <Navbar />
            <div className="row ApplyHeaderR1">
              <div className="col-lg-12 pt-5">
                <h1 className="pb-5">Apply Now</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Navbarfading />
    <div className="Applyform py-5 my-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-center align-items-center">
              <div className="card p-5" style={{ width: '100%', maxWidth: '700px' }}>
                <h2 className="text-center">How much do you want?</h2>
                <p className="text-center">
                  We provide online instant cash loans with quick approval that suit your term length
                </p>

                <form>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Your Name" />
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>
                  <div className="mb-3">
                    <input type="tel" className="form-control" placeholder="Phone Number" />
                  </div>

                  <div className="mb-3">
                    <select className="form-select">
                      <option>Amount</option>
                      <option>$30</option>
                      <option>$40</option>
                      <option>$50</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <select className="form-select">
                      <option>Purpose</option>
                      <option>Purpose 1</option>
                      <option>Purpose 2</option>
                      <option>Purpose 3</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <select className="form-select">
                      <option>Month</option>
                      <option>3 months</option>
                      <option>4 months</option>
                      <option>5 months</option>
                    </select>
                  </div>

                  <p className="">You have to pay: $0</p>

                  <div className="mb-5">
                    <textarea className="form-control" rows={8} placeholder="Message"></textarea>
                  </div>

                  <button type="submit" className="System_btn w-100">Apply Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <HowItWorks />
    <Footer />
  </>);
};

export default ApplyLoan;