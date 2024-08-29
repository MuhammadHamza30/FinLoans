import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/footer_logo.png'
import { FaHeart } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa6";


function Footer() {
  return (
    <div className="footer">
      <div className="container" >
        <div className="row S1">
          <div className="col-md-6 col-lg-3" data-aos="fade-right">
            <h1><img src={logo} alt="" /></h1>
            <p>finloan@support.com<br />
              +10 873 672 6782<br />
              600/D, Green road, NewYork</p>
            <div className=''>
              <ul className='iconslist d-flex p-0 pt-5'>
                <li><a href=""><FaFacebookF size={15} /></a></li>
                <li><a href=""><FaGooglePlusG size={15} /></a></li>
                <li><a href=""><FaTwitter size={15} /></a></li>
                <li><a href=""><FaInstagram size={15} /></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" data-aos="fade-up">
            <h1 className=''>Services</h1>
            <ul className='p-0'>
              <li className="ClassName"><a href="">SEO/SEM</a></li>
              <li className="ClassName"><a href="">Web design</a></li>
              <li className="ClassName"><a href="">Ecommerce</a></li>
              <li className="ClassName"><a href="">Digital marketing</a></li>
              <li className="ClassName"><a href="">Rooms</a></li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-2" data-aos="fade-up">
            <h1 className=''>Useful Links</h1>
            <ul className='p-0'>
              <li className="ClassName"><a href="">About</a></li>
              <li className="ClassName"><a href="">Blog</a></li>
              <li className="ClassName"><a href="">Contact</a></li>
              <li className="ClassName"><a href="">Support</a></li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-4 Subscribe" data-aos="fade-up">
            <h1 className=''>Subscribe</h1>
            <form className=''>
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Enter your mail.." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button">Subscribe</button>
                </div>
              </div>
            </form>
            <p className=''>Esteem spirit temper too say adieus who direct esteem esteems luckily.</p>
          </div>
        </div>
      </div>
      <div className='row S2 text-center m-5'>
        <div className='col-12'>
          <p> Copyright © 2024 All rights reserved | This template is made with <FaHeart /> by  <a href="http://"> Colorlib</a></p>
        </div>
      </div>
    </div>
  )
}

export default Footer;