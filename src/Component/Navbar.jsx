import logo from '../assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { MdCall } from "react-icons/md";

function Navbar() {
  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid ">
              <div><img src={logo} alt="Logo" /></div>
              <button className="navbar-toggler"
                type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" >
                </span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav me-4 mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/404NotFound_Loan">Loan</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/About">About</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Page
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="/ApplyLoan">Apply loan</a></li>
                      <li><a className="dropdown-item" href="/Element">Elements</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Blog
                    </a>
                    <ul className="dropdown-menu" >
                      <li><a className="dropdown-item" href="/Blog">Blog</a></li>
                      <li><a className="dropdown-item" href="/SingleBlog">Single Blog</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/404NotFound_FAQ">FAQ</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/ContactUs">Contact</a>
                  </li>
                </ul>
                <form className="d-flex align-items-center" role="search">
                  <div className="m-3">
                    <a href="#">
                      <MdCall className='MdCall' /> +10 673 567 367
                    </a>
                  </div>
                  <div>
                    <a href="/ApplyLoan">
                    <button className="btn Navbar btn-outlier-succes" type="button">Apply For a Loan</button>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </nav>

        </div>
      </div>
    </>
  );
}

export default Navbar;
