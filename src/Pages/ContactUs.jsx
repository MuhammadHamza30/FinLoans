import Navbar from "../Component/Navbar";
import Navbarfading from "../Component/Navbarfading";
import { PiHouseLine } from "react-icons/pi";
import { CiMobile4 } from "react-icons/ci";
import { MdMailOutline } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from '../Component/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

function ContactUs() {

  AOS.init({ duration: 1700, once: true })

  return (<>
    <div className="headerArea">
      <div className="ApplyHeader">
        <div className="ApplyHeader_bg">
          <div className="container">
            <Navbar />
            <div className="row ApplyHeaderR1">
              <div className="col-lg-12 pt-5">
                <h1 className="pb-5">Contact Us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Navbarfading />
    <section className="contact-section section_padding">
      <div className="container">
        <div className="d-none d-sm-block mb-5 pb-4">
          <div id="map" style={{ height: "480px", position: "relative", overflow: "hidden", marginTop: "40px" }}><div className="Error_message" style={{ height: "100%", width: "100%", position: "absolute", padding: "15%", backgroundColor: "rgb(229, 227, 223)", textAlign: "center" }}><div className="gm-err-container"><div className="gm-err-content"><div className="gm-err-icon"><img src="https://maps.gstatic.com/mapfiles/api-3/images/icon_error.png" alt="" draggable="false" style={{ userselect: "none" }} /></div><div className="gm-err-title"><h4>Oops! Something went wrong.</h4></div><div className="gm-err-message">This page didn't load Google Maps correctly. See the JavaScript console for technical details.</div></div></div></div></div>
        </div>
        <div className="row">
          <div className="col-12">
            <h2 className="contact-title">Get in Touch</h2>
          </div>
          <div className="col-lg-8">
            <form className="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <textarea className="form-control w-100" name="message" id="message" cols="30" rows="9" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" placeholder="Enter Message"></textarea>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input className="form-control my-4 py-3" name="name" id="name" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" placeholder="Enter your name" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input className="form-control my-4 py-3" name="email" id="email" type="email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" placeholder="Enter email address" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input className="form-control py-3" name="subject" id="subject" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'" placeholder="Enter Subject" />
                  </div>
                </div>
              </div>
              <div className="form-group mt-3">
                <button type="submit" className="btn Contact-button btn-outlien-success my-4 px-5 py-3">Send Message</button>
              </div>
            </form>
          </div>
          <div className="col-lg-4">
            <div className=" row media contact-info">
              <div className="col-2"><PiHouseLine size={40} color="#7a838b" /></div>
              <div className="col media-body">
                <h5>Buttonwood, California.</h5>
                <p>Rosemead, CA 91770</p>
              </div>
            </div>
            <div className="row media contact-info">
              <span className="col-2"><CiMobile4 size={40} color="#7a838b" /></span>
              <div className="col media-body">
                <h5>00 (440) 9865 562</h5>
                <p>Mon to Fri 9am to 6pm</p>
              </div>
            </div>
            <div className="row media contact-info">
              <span className="col-2"><MdMailOutline size={40} color="#7a838b" /></span>
              <div className=" col media-body">
                <h5>support@colorlib.com</h5>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>)
}
export default ContactUs;