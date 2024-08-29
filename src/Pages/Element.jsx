import Navbarfading from "../Component/Navbarfading";
import Navbar from "../Component/Navbar";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../Component/Footer";
import image1 from '../assets/g1.jpg'
import image2 from '../assets/g2.jpg'
import image3 from '../assets/g3.jpg'
import image4 from '../assets/g4.jpg'
import image5 from '../assets/g5.jpg'
import image6 from '../assets/g6.jpg'
import image7 from '../assets/g7.jpg'
import image8 from '../assets/g8.jpg'
import flag1 from '../assets/f1.jpg'
import flag2 from '../assets/f2.jpg'
import flag3 from '../assets/f3.jpg'
import flag4 from '../assets/f4.jpg'
import flag5 from '../assets/f5.jpg'
import flag6 from '../assets/f6.jpg'
import flag7 from '../assets/f7.jpg'
import flag8 from '../assets/f8.jpg'
import { LuPlane } from "react-icons/lu";
import { FaGlobeAsia } from "react-icons/fa";
import AOS from 'aos'
import 'aos/dist/aos.css'

function Element() {

  AOS.init({ duration: 1700, once: true })

  return (<>
    <div className="headerArea">
      <div className="ApplyHeader">
        <div className="ApplyHeader_bg">
          <div className="container">
            <Navbar />
            <div className="row ApplyHeaderR1">
              <div className="col-lg-12 pt-5">
                <h1 className="pb-5">Element</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Navbarfading />
    <div className="Element_Body">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="text-heading">Text Sample</h3>
            <p className="sample-text">
              Every avid independent filmmaker has <b>Bold</b> about making that <i>Italic</i> interest documentary,
              or short
              film to show off their creative prowess. Many have great ideas and want to “wow”
              the<sup>Superscript</sup> scene,
              or video renters with their big project. But once you have the<sub>Subscript</sub> “in the can” (no easy
              feat), how
              do you move from a <del>Strike</del> through of master DVDs with the <u>“Underline”</u> marked
              hand-written title
              inside a secondhand CD case, to a pile of cardboard boxes full of shiny new, retail-ready DVDs, with UPC
              barcodes
              and polywrap sitting on your doorstep? You need to create eye-popping artwork and have your project
              replicated.
              Using a reputable full service DVD Replication company like PacificDisc, Inc. to partner with is
              certainly a
              helpful option to ensure a professional end result, but to help with your DVD replication project, here
              are 4 easy
              steps to follow for good DVD replication results:
            </p>
          </div>
        </div>
      </div>
      <div className="button-area py-5">
        <div className="container box_1170 border-top-generic">
          <h3 className="text-heading">Sample Buttons</h3>
          <div className="button-group-area">
            <a href="#" className="m-2 btn btn-default">Default</a>
            <a href="#" className="m-2 btn btn-primary">Primary</a>
            <a href="#" className="m-2 btn btn-success">Success</a>
            <a href="#" className="m-2 btn btn-info">Info</a>
            <a href="#" className="m-2 btn btn-warning">Warning</a>
            <a href="#" className="m-2 btn btn-danger">Danger</a>
            <a href="#" className="m-2 btn btn-link">Link</a>
            <a href="#" className="m-2 btn btn-disable">Disable</a>
          </div>
          <div className="button-group-area mt-1">
            <a href="#" className="m-2 btn btn-outline-default">Default</a>
            <a href="#" className="m-2 btn btn-outline-primary">Primary</a>
            <a href="#" className="m-2 btn btn-outline-success">Success</a>
            <a href="#" className="m-2 btn btn-outline-info">Info</a>
            <a href="#" className="m-2 btn btn-outline-warning">Warning</a>
            <a href="#" className="m-2 btn btn-outline-danger">Danger</a>
            <a href="#" className="m-2 btn btn-link">Link</a>
            <a href="#" className="m-2 btn btn-outline-disable">Disable</a>
          </div>
          <div className="button-group-area mt-4">
            <a href="#" className="m-2 btn rounded btn-default">Default</a>
            <a href="#" className="m-2 btn rounded btn-primary">Primary</a>
            <a href="#" className="m-2 btn rounded btn-success">Success</a>
            <a href="#" className="m-2 btn rounded btn-info ">Info</a>
            <a href="#" className="m-2 btn rounded btn-warning">Warning</a>
            <a href="#" className="m-2 btn rounded btn-danger ">Danger</a>
            <a href="#" className="m-2 btn rounded btn-link ">Link</a>
            <a href="#" className="m-2 btn rounded btn-disable">Disable</a>
          </div>
          <div className="button-group-area mt-1">
            <a href="#" className="m-2 btn btn-outline-default rounded">Default</a>
            <a href="#" className="m-2 btn btn-outline-primary rounded">Primary</a>
            <a href="#" className="m-2 btn btn-outline-success rounded">Success</a>
            <a href="#" className="m-2 btn btn-outline-info rounded">Info</a>
            <a href="#" className="m-2 btn btn-outline-warning rounded">Warning</a>
            <a href="#" className="m-2 btn btn-outline-danger rounded">Danger</a>
            <a href="#" className="m-2 btn btn-link rounded">Link</a>
            <a href="#" className="m-2 btn btn-outline-disable  rounded">Disable</a>
          </div>
          <div className="button-group-area mt-4">
            <a href="#" className="m-2 btn btn-default rounded-pill">Default</a>
            <a href="#" className="m-2 btn btn-primary rounded-pill">Primary</a>
            <a href="#" className="m-2 btn btn-success rounded-pill">Success</a>
            <a href="#" className="m-2 btn btn-info    rounded-pill">Info</a>
            <a href="#" className="m-2 btn btn-warning rounded-pill">Warning</a>
            <a href="#" className="m-2 btn btn-danger  rounded-pill">Danger</a>
            <a href="#" className="m-2 btn btn-link    rounded-pill">Link</a>
            <a href="#" className="m-2 btn btn-disable rounded-pill">Disable</a>
          </div>
          <div className="button-group-area mt-1">
            <a href="#" className="m-2 btn btn-outline-default rounded-pill">Default</a>
            <a href="#" className="m-2 btn btn-outline-primary rounded-pill">Primary</a>
            <a href="#" className="m-2 btn btn-outline-success rounded-pill">Success</a>
            <a href="#" className="m-2 btn btn-outline-info rounded-pill">Info</a>
            <a href="#" className="m-2 btn btn-outline-warning rounded-pill">Warning</a>
            <a href="#" className="m-2 btn btn-outline-danger rounded-pill">Danger</a>
            <a href="#" className="m-2 btn btn-link rounded-pill">Link</a>
            <a href="#" className="m-2 btn btn-outline-disable rounded-pill">Disable</a>
          </div>
          <div className="button-group-area mt-4">
            <a href="#" className="btn btn-default rounded-pill m-2">Default<span className="lnr lnr-arrow-right"></span></a>
            <a href="#" className="btn btn-primary rounded-pill m-2">Primary<span className="lnr lnr-arrow-right"></span></a>
            <a href="#" className="btn btn-success rounded-pill m-2">Success<span className="lnr lnr-arrow-right"></span></a>
            <a href="#" className="btn btn-info rounded-pill m-2">info<span className="lnr lnr-arrow-right"></span></a>
            <a href="#" className="btn btn-warning rounded-pill m-2">Warning<span className="lnr lnr-arrow-right"></span></a>
            <a href="#" className="btn btn-danger  rounded-pill m-2">Danger<span className="lnr lnr-arrow-right"></span></a>
          </div>
          <div className="button-group-area mt-1">
            <a href="#" className="m-2 btn rounded-pill btn-outline-default">Default<span className="lnr lnr-arrow-right"></span></a>
            <a href="#" className="m-2 btn rounded-pill btn-outline-primary">Primary<span className="lnr lnr-arrow-right"></span></a>
            <a href="#" className="m-2 btn rounded-pill btn-outline-success">Success<span className="lnr lnr-arrow-right"></span></a>
            <a href="#" className="m-2 btn rounded-pill btn-outline-info">Info<span className="lnr lnr-arrow-right"></span></a>
            <a href="#" className="m-2 btn rounded-pill btn-outline-warning">Warning<span className="lnr lnr-arrow-right"></span></a>
            <a href="#" className="m-2 btn rounded-pill btn-outline-danger">Danger<span className="lnr lnr-arrow-right"></span></a>
          </div>
          <div className="button-group-area mt-4">
            <a href="#" className="m-2  btn btn-primary btn-lg">Extra Large</a>
            <a href="#" className="m-2  btn btn-success btn-lg">Large</a>
            <a href="#" className="m-2  btn btn-primary btn-md">Default</a>
            <a href="#" className="m-2  btn btn-success btn-sm">Medium</a>
            <a href="#" className="m-2  btn btn-primary btn-sm">Small</a>
          </div>
          <div className="button-group-area mt-1">
            <a href="#" className="m-2 btn btn-outline-primary btn-lg">Extra Large</a>
            <a href="#" className="m-2 btn btn-outline-success btn-lg">Large</a>
            <a href="#" className="m-2 btn btn-outline-primary btn-md">Default</a>
            <a href="#" className="m-2 btn btn-outline-success btn-sm">Medium</a>
            <a href="#" className="m-2 btn btn-outline-primary btn-sm">Small</a>
          </div>
        </div>
      </div>
      <div className="whole-wrap py-5">
        <div className="container box_1170">
          <div className="section1 py-4">
            <h3 className="mb-30">Left Aligned</h3>
            <div className="row">
              <div className="col-md-3">
                <div className="fill">
                  <img src={image7} alt="" className="" /></div>
              </div>
              <div className="col-md-9 mt-sm-20">
                <p>Recently, the US Federal government banned online casinos from operating in America by making
                  it illegal to
                  transfer money to them through any US bank or payment system. As a result of this law, most
                  of the popular
                  online casino networks such as Party Gaming and PlayTech left the United States. Overnight,
                  online casino
                  players found themselves being chased by the Federal government. But, after a fortnight, the
                  online casino
                  industry came up with a solution and new online casinos started taking root. These began to
                  operate under a
                  different business umbrella, and by doing that, rendered the transfer of money to and from
                  them legal. A major
                  part of this was enlisting electronic banking systems that would accept this new
                  clarification and start doing
                  business with me. Listed in this article are the electronic banking systems that accept
                  players from the United
                  States that wish to play in online casinos.</p>
              </div>
            </div>
          </div>
          <div className="section2 py-4 text-end">
            <h3 className="mb-30">Right Aligned</h3>
            <div className="row">
              <div className="col-md-9">
                <p className="">Over time, even the most sophisticated, memory packed computer can begin
                  to run slow if we
                  don’t do something to prevent it. The reason why has less to do with how computers are made
                  and how they age and
                  more to do with the way we use them. You see, all of the daily tasks that we do on our PC
                  from running programs
                  to downloading and deleting software can make our computer sluggish. To keep this from
                  happening, you need to
                  understand the reasons why your PC is getting slower and do something to keep your PC
                  running at its best. You
                  can do this through regular maintenance and PC performance optimization programs</p>
                <p className="text-right">Before we discuss all of the things that could be affecting your PC’s
                  performance, let’s
                  talk a little about what symptoms</p>
              </div>
              <div className="col-md-3">
                <div className="fill">
                  <img src={image7} alt="" className="" />
                </div>
              </div>
            </div>
          </div>
          <div className="section3 py-4">
            <h3 className="mb-30">Definition</h3>
            <div className="row">
              <div className="col-md-4">
                <div className="single-defination">
                  <h4 className="mb-20">Definition 01</h4>
                  <p>Recently, the US Federal government banned online casinos from operating in America by
                    making it illegal to
                    transfer money to them through any US bank or payment system. As a result of this law,
                    most of the popular
                    online casino networks</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-defination">
                  <h4 className="mb-20">Definition 02</h4>
                  <p>Recently, the US Federal government banned online casinos from operating in America by
                    making it illegal to
                    transfer money to them through any US bank or payment system. As a result of this law,
                    most of the popular
                    online casino networks</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-defination">
                  <h4 className="mb-20">Definition 03</h4>
                  <p>Recently, the US Federal government banned online casinos from operating in America by
                    making it illegal to
                    transfer money to them through any US bank or payment system. As a result of this law,
                    most of the popular
                    online casino networks</p>
                </div>
              </div>
            </div>
          </div>
          <div className="section4 py-4">
            <h3 className="mb-30">Block Quotes</h3>
            <div className="row">
              <div className="col-lg-12">
                <blockquote className="blockquote">
                  <p>
                    “Recently, the US Federal government banned online casinos from operating in America by
                    making it illegal to
                    transfer money to them through any US bank or payment system. As a result of this law, most
                    of the popular
                    online casino networks such as Party Gaming and PlayTech left the United States. Overnight,
                    online casino
                    players found themselves being chased by the Federal government. But, after a fortnight, the
                    online casino
                    industry came up with a solution and new online casinos started taking root. These began to
                    operate under a
                    different business umbrella, and by doing that, rendered the transfer of money to and from
                    them legal. A major
                    part of this was enlisting electronic banking systems that would accept this new
                    clarification and start doing
                    business with me. Listed in this article are the electronic banking”
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="section5 py-4">
            <h3 className="mb-30">Table</h3>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Country</th>
                    <th scope="col">Visits</th>
                    <th scope="col">Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">01</th>
                    <td><img src={flag1} alt="flag" className="img-fluid" style={{ width: "30px", marginRight: "10px" }} />Canada</td>
                    <td>645032</td>
                    <td>
                      <div className="progress">
                        <div className="progress-bar bg-success" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">02</th>
                    <td><img src={flag2} alt="flag" className="img-fluid" style={{ width: "30px", marginRight: "10px" }} />USA</td>
                    <td>645032</td>
                    <td>
                      <div className="progress">
                        <div className="progress-bar bg-info" role="progressbar" style={{ width: "30%" }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">03</th>
                    <td><img src={flag3} alt="flag" className="img-fluid" style={{ width: "30px", marginRight: "10px" }} />UK</td>
                    <td>645032</td>
                    <td>
                      <div className="progress">
                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: "55%" }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">04</th>
                    <td><img src={flag4} alt="flag" className="img-fluid" style={{ width: "30px", marginRight: "10px" }} />Germany</td>
                    <td>645032</td>
                    <td>
                      <div className="progress">
                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">05</th>
                    <td><img src={flag5} alt="flag" className="img-fluid" style={{ width: "30px", marginRight: "10px" }} />Australia</td>
                    <td>645032</td>
                    <td>
                      <div className="progress">
                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: "40%" }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">06</th>
                    <td><img src={flag6} alt="flag" className="img-fluid" style={{ width: "30px", marginRight: "10px" }} />China</td>
                    <td>645032</td>
                    <td>
                      <div className="progress">
                        <div className="progress-bar bg-secondary" role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">07</th>
                    <td><img src={flag7} alt="flag" className="img-fluid" style={{ width: "30px", marginRight: "10px" }} />Bangladesh</td>
                    <td>645032</td>
                    <td>
                      <div className="progress">
                        <div className="progress-bar bg-dark" role="progressbar" style={{ width: "30%" }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">08</th>
                    <td><img src={flag8} alt="flag" className="img-fluid" style={{ width: "30px", marginRight: "10px" }} />Canada</td>
                    <td>645032</td>
                    <td>
                      <div className="progress">
                        <div className="progress-bar bg-light" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
          <div className="section6 py-4">
            <h3>Image Gallery</h3>
            <div className="row d-flex justify-content-between gy-5">
              <div className="col-lg-4 col-md-6">
                <a href="#"><div className="fill">
                  <img src={image1} className="" alt="" srcset="" />
                </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6">
                <a><div className="fill">
                  <img src={image2} className="" alt="" srcset="" />
                </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6">
                <a><div className="fill">
                  <img src={image3} className="" alt="" srcset="" />
                </div>
                </a>
              </div>
              <div className="col-md-6">
                <a><div className="fill">
                  <img src={image4} className="" alt="" srcset="" />
                </div>
                </a>
              </div>
              <div className="col-md-6">
                <a><div className="fill">
                  <img src={image5} className="" alt="" srcset="" />
                </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6">
                <a><div className="fill">
                  <img src={image6} className="" alt="" srcset="" />
                </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6">
                <a><div className="fill">
                  <img src={image7} className="" alt="" srcset="" />
                </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6">
                <a><div className="fill">
                  <img src={image8} className="" alt="" srcset="" />
                </div>
                </a>
              </div>
            </div>
          </div>
          <div className="section7 py-4">
            <div className="row">
              <div className="col-md-4">
                <h3 className="mb-20">Image Gallery</h3>
                <div className="typography">
                  <h1>This is header 01</h1>
                  <h2>This is header 02</h2>
                  <h3>This is header 03</h3>
                  <h4>This is header 04</h4>
                  <h5>This is header 01</h5>
                  <h6>This is header 01</h6>
                </div>
              </div>
              <div className="col-md-4 mt-sm-30">
                <h3 className="mb-20">Unordered List</h3>
                <div className="">
                  <ul className="unordered-list">
                    <li>Fta Keys</li>
                    <li>For Women Only Your Computer Usage</li>
                    <li>Facts Why Inkjet Printing Is Very Appealing
                      <ul>
                        <li>Addiction When Gambling Becomes
                          <ul>
                            <li>Protective Preventative Maintenance</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>Dealing With Technical Support 10 Useful Tips</li>
                    <li>Make Myspace Your Best Designed Space</li>
                    <li>Cleaning And Organizing Your Computer</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 mt-sm-30">
                <h3 className="mb-20">Ordered List</h3>
                <div className="">
                  <ol className="ordered-list">
                    <li><span>Fta Keys</span></li>
                    <li><span>For Women Only Your Computer Usage</span></li>
                    <li><span>Facts Why Inkjet Printing Is Very Appealing</span>
                      <ol className="ordered-list-alpha">
                        <li><span>Addiction When Gambling Becomes</span>
                          <ol className="ordered-list-roman">
                            <li><span>Protective Preventative Maintenance</span></li>
                          </ol>
                        </li>
                      </ol>
                    </li>
                    <li><span>Dealing With Technical Support 10 Useful Tips</span></li>
                    <li><span>Make Myspace Your Best Designed Space</span></li>
                    <li><span>Cleaning And Organizing Your Computer</span></li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="section8 py-4">
            <div className="row">
              <div className="col-lg-8 col-md-8">
                <h3 className="mb-30">Form Element</h3>
                <form action="#" className="">
                  <div className="mt-10">
                    <input type="text" name="first_name" placeholder="First Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'First Name'" required="" className="single-input" />
                  </div>
                  <div className="mt-10">
                    <input type="text" name="last_name" placeholder="Last Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Last Name'" required="" className="single-input" />
                  </div>
                  <div className="mt-10">
                    <input type="text" name="last_name" placeholder="Last Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Last Name'" required="" className="single-input" />
                  </div>
                  <div className="mt-10">
                    <input type="email" name="EMAIL" placeholder="Email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email address'" required="" className="single-input" />
                  </div>
                  <div className="input-group-icon mt-10">
                    <div className="icon"><i className="fa fa-thumb-tack" aria-hidden="true"></i></div>
                    <input type="text" name="address" placeholder="Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Address'" required="" className="single-input" />
                  </div>
                  <div className="SelectOption">
                    <div className="icon"><LuPlane /></div>
                    <select >
                      <option value=" 1">City</option>
                      <option value="1">Dhaka</option>
                      <option value="1">Dilli</option>
                      <option value="1">Newyork</option>
                      <option value="1">Islamabad</option>
                    </select>
                  </div>
                  <div className="SelectOption">
                    <div className="icon"><FaGlobeAsia /></div>
                    <select >
                      <option value=" 1">Country</option>
                      <option value="1">Bangladesh</option>
                      <option value="1">India</option>
                      <option value="1">England</option>
                      <option value="1">Australia</option>
                    </select>
                  </div>
                  <div className="Text_Area">
                    <div className="mt-10">
                      <textarea className="single-textarea" placeholder="Message" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Message'" required=""></textarea>
                    </div>


                    <div className="mt-10">
                      <input type="text" name="first_name" placeholder="Primary color" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Primary color'" required="" className="single-input-primary" />
                    </div>
                    <div className="mt-10">
                      <input type="text" name="first_name" placeholder="Accent color" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Accent color'" required="" className="single-input-accent" />
                    </div>
                    <div className="mt-10">
                      <input type="text" name="first_name" placeholder="Secondary color" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Secondary color'" required="" className="single-input-secondary" />
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-3 col-md-4 mt-sm-30">
                <div className="single-element-widget">
                  <h3 className="mb-30">Switches</h3>
                  <div className="switch-wrap d-flex justify-content-between">
                    <p>01. Sample Switch</p>
                    <div className="primary-switch">
                      <input type="checkbox" id="default-switch" />
                      <label for="default-switch"></label>
                    </div>
                  </div>
                  <div className="switch-wrap d-flex justify-content-between">
                    <p>02. Primary Color Switch</p>
                    <div className="primary-switch">
                      <input type="checkbox" id="primary-switch" checked="" />
                      <label for="primary-switch"></label>
                    </div>
                  </div>
                  <div className="switch-wrap d-flex justify-content-between">
                    <p>03. Confirm Color Switch</p>
                    <div className="confirm-switch">
                      <input type="checkbox" id="confirm-switch" checked="" />
                      <label for="confirm-switch"></label>
                    </div>
                  </div>
                </div>
                <div className="single-element-widget mt-30">
                  <h3 className="mb-30">Selectboxes</h3>
                  <div className="default-select" id="default-select">
                    <select className="w-100 p-2 my-2">
                      <option value=" 1">English</option>
                      <option value="1">Spanish</option>
                      <option value="1">Arabic</option>
                      <option value="1">Portuguise</option>
                      <option value="1">Bengali</option>
                    </select>
                  </div>
                </div>
                <div className="single-element-widget mt-30">
                  <h3 className="mb-30">Checkboxes</h3>
                  <div className="switch-wrap d-flex justify-content-between">
                    <p>01. Sample Checkbox</p>
                    <div className="primary-checkbox">
                      <input type="checkbox" id="default-checkbox" />
                      <label for="default-checkbox"></label>
                    </div>
                  </div>
                  <div className="switch-wrap d-flex justify-content-between">
                    <p>02. Primary Color Checkbox</p>
                    <div className="primary-checkbox">
                      <input type="checkbox" id="primary-checkbox" checked="" />
                      <label for="primary-checkbox"></label>
                    </div>
                  </div>
                  <div className="switch-wrap d-flex justify-content-between">
                    <p>03. Confirm Color Checkbox</p>
                    <div className="confirm-checkbox">
                      <input type="checkbox" id="confirm-checkbox" />
                      <label for="confirm-checkbox"></label>
                    </div>
                  </div>
                  <div className="switch-wrap d-flex justify-content-between">
                    <p>04. Disabled Checkbox</p>
                    <div className="disabled-checkbox">
                      <input type="checkbox" id="disabled-checkbox" disabled="" />
                      <label for="disabled-checkbox"></label>
                    </div>
                  </div>
                  <div className="switch-wrap d-flex justify-content-between">
                    <p>05. Disabled Checkbox active</p>
                    <div className="disabled-checkbox">
                      <input type="checkbox" id="disabled-checkbox-active" checked="" disabled="" />
                      <label for="disabled-checkbox-active"></label>
                    </div>
                  </div>
                </div>
                <div className="single-element-widget mt-30">
                  <h3 className="mb-30">Radios</h3>
                  <div className="switch-wrap d-flex justify-content-between">
                    <p>01. Sample radio</p>
                    <div className="primary-radio">
                      <input type="checkbox" id="default-radio" />
                      <label for="default-radio"></label>
                    </div>
                  </div>
                  <div className="switch-wrap d-flex justify-content-between">
                    <p>02. Primary Color radio</p>
                    <div className="primary-radio">
                      <input type="checkbox" id="primary-radio" checked="" />
                      <label for="primary-radio"></label>
                    </div>
                  </div>
                  <div className="switch-wrap d-flex justify-content-between">
                    <p>03. Confirm Color radio</p>
                    <div className="confirm-radio">
                      <input type="checkbox" id="confirm-radio" checked="" />
                      <label for="confirm-radio"></label>
                    </div>
                  </div>
                  <div className="switch-wrap d-flex justify-content-between">
                    <p>04. Disabled radio</p>
                    <div className="disabled-radio">
                      <input type="checkbox" id="disabled-radio" disabled="" />
                      <label for="disabled-radio"></label>
                    </div>
                  </div>
                  <div className="switch-wrap d-flex justify-content-between">
                    <p>05. Disabled radio active</p>
                    <div className="disabled-radio">
                      <input type="checkbox" id="disabled-radio-active" checked="" disabled="" />
                      <label for="disabled-radio-active"></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div >
        </div >
      </div ></div>
    <Footer />
  </>)
}
export default Element;