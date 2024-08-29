
import Navbar from "../Component/Navbar";
import Navbarfading from "../Component/Navbarfading";
import Footer from '../Component/Footer'
import { IoIosSearch } from "react-icons/io";
import postIamge1 from '../assets/post_1.png.webp'
import postIamge2 from '../assets/post_2.png.webp'
import postIamge3 from '../assets/post_3.png.webp'
import postIamge4 from '../assets/post_4.png.webp'
import postIamge5 from '../assets/post_5.png.webp'
import postIamge6 from '../assets/post_6.png.webp'
import postIamge7 from '../assets/post_7.png.webp'
import postIamge8 from '../assets/post_8.png.webp'
import postIamge9 from '../assets/post_9.png.webp'
import postIamge10 from '../assets/post_10.png.webp'
import image1 from '../assets/single_blog_1.png.webp'
import NextImage from '../assets/next.png.webp'
import prevImage from '../assets/preview.png.webp'
import Comment1 from '../assets/comment_1.png.webp'
import Comment2 from '../assets/comment_2.png.webp'
import Comment3 from '../assets/comment_3.png.webp'
import Auther from '../assets/author.png.webp'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'
function SingleBlog() {



  AOS.init({ duration: 1700, once: true })

  return (<>
    <div className="headerArea">
      <div className="AboutHeader">
        <div className="AboutHeader_bg">
          <div className="container">
            <Navbar />
            <div className="row AboutHeaderR1">
              <div className="col-lg-12 pt-5">
                <h1 className="pb-5">Single Blog</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Navbarfading />
    <div className="Blod_Data">
      <div className="container">
        <div className="row my-5">
          <div class="col-lg-8 posts-list">
            <div class="single-post">
              <div class="feature-img">
                <img class="img-fluid" src={image1} alt="" />
              </div>
              <div class="blog_details">
                <h2>Second divided from form fish beast made every of seas
                  all gathered us saying he our
                </h2>
                <ul class="blog-info-link mt-3 mb-4">
                  <li><a href="#"><i class="fa fa-user"></i> Travel, Lifestyle</a></li>
                  <li><a href="#"><i class="fa fa-comments"></i> 03 Comments</a></li>
                </ul>
                <p class="excert">
                  MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                  should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                  fraction of the camp price. However, who has the willpower
                </p>
                <p>
                  MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                  should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                  fraction of the camp price. However, who has the willpower to actually sit through a
                  self-imposed MCSE training. who has the willpower to actually
                </p>
                <div class="quote-wrapper">
                  <div class="quotes">
                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                    should have to spend money on boot camp when you can get the MCSE study materials yourself at
                    a fraction of the camp price. However, who has the willpower to actually sit through a
                    self-imposed MCSE training.
                  </div>
                </div>
                <p>
                  MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                  should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                  fraction of the camp price. However, who has the willpower
                </p>
                <p>
                  MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                  should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                  fraction of the camp price. However, who has the willpower to actually sit through a
                  self-imposed MCSE training. who has the willpower to actually
                </p>
              </div>
            </div>
            <div class="navigation-top">
              <div class="d-sm-flex justify-content-between text-center">
                <p class="like-info"><span class="align-middle"><FaHeart /></span> Lily and 4
                  people like this</p>

                <ul class="social-icons d-flex">
                  <li><a href="#"><FaFacebookF /></a></li>
                  <li><a href="#"><FaTwitter /></a></li>
                  <li><a href="#"><FaDribbble /></a></li>
                  <li><a href="#"><FaBehance /></a></li>
                </ul>
              </div>
              <div class="navigation-area">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                    <div class="thumb">
                      <a href="#">
                        <img class="img-fluid" src={prevImage} alt="" />
                      </a>
                    </div>
                    <div class="arrow">
                      <a href="#">
                        <span class="lnr text-white ti-arrow-left"></span>
                      </a>
                    </div>
                    <div class="detials p-3">
                      <p>Prev Post</p>
                      <a href="#">
                        <h6>Space The Final Frontier</h6>
                      </a>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                    <div class="detials p-3 text-end">
                      <p>Next Post</p>
                      <a href="#">
                        <h6>Telescopes 101</h6>
                      </a>
                    </div>
                    <div class="arrow">
                      <a href="#">
                        <span class="lnr text-white ti-arrow-right"></span>
                      </a>
                    </div>
                    <div class="thumb">
                      <a href="#">
                        <img class="img-fluid" src={NextImage} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="blog-author">
              <div class="media align-items-center">
                <img src={Auther} alt="" />
                <div class="media-body">
                  <a href="#">
                    <h4>Harvard milan</h4>
                  </a>
                  <p>Second divided from form fish beast made. Every of seas all gathered use saying you're, he
                    our dominion twon Second divided from</p>
                </div>
              </div>
            </div>
            <div class="comments-area">
              <h4>05 Comments</h4>
              <div class="comment-list">
                <div class="single-comment justify-content-between d-flex">
                  <div class="user justify-content-between d-flex">
                    <div class="thumb">
                      <img src={Comment1} alt="" />
                    </div>
                    <div class="desc">
                      <p class="comment">
                        Multiply sea night grass fourth day sea lesser rule open subdue female fill which them
                        Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                      </p>
                      <div class="d-flex justify-content-between">
                        <div class="d-flex align-items-center">
                          <h5>
                            <a href="#">Emilly Blunt</a>
                          </h5>
                          <p class="date">December 4, 2017 at 3:12 pm </p>
                        </div>
                        <div class="reply-btn">
                          <a href="#" class="btn-reply text-uppercase">reply</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="comment-list">
                <div class="single-comment justify-content-between d-flex">
                  <div class="user justify-content-between d-flex">
                    <div class="thumb">
                      <img src={Comment2} alt="" />
                    </div>
                    <div class="desc">
                      <p class="comment">
                        Multiply sea night grass fourth day sea lesser rule open subdue female fill which them
                        Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                      </p>
                      <div class="d-flex justify-content-between">
                        <div class="d-flex align-items-center">
                          <h5>
                            <a href="#">Emilly Blunt</a>
                          </h5>
                          <p class="date">December 4, 2017 at 3:12 pm </p>
                        </div>
                        <div class="reply-btn">
                          <a href="#" class="btn-reply text-uppercase">reply</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="comment-list">
                <div class="single-comment justify-content-between d-flex">
                  <div class="user justify-content-between d-flex">
                    <div class="thumb">
                      <img src={Comment3} alt="" />
                    </div>
                    <div class="desc">
                      <p class="comment">
                        Multiply sea night grass fourth day sea lesser rule open subdue female fill which them
                        Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                      </p>
                      <div class="d-flex justify-content-between">
                        <div class="d-flex align-items-center">
                          <h5>
                            <a href="#">Emilly Blunt</a>
                          </h5>
                          <p class="date">December 4, 2017 at 3:12 pm </p>
                        </div>
                        <div class="reply-btn">
                          <a href="#" class="btn-reply text-uppercase">reply</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="comment-form">
              <h4>Leave a Reply</h4>
              <form class="form-contact comment_form" action="#" id="commentForm">
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <textarea class="form-control w-100" name="comment" id="comment" cols="30" rows="9" placeholder="Write Comment"></textarea>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <input class="form-control" name="name" id="name" type="text" placeholder="Name" />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <input class="form-control" name="email" id="email" type="email" placeholder="Email" />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <input class="form-control" name="website" id="website" type="text" placeholder="Website" />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <button type="submit" class="Contact-button rounded-0 py-3 px-4">Send Message</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog_right_sidebar">
              <aside className="single_sidebar_widget search_widget">
                <form action="#" className="p-4">
                  <div className="form-group">
                    <div className="input-group mb-3">
                      <div className=" Blog_Search d-flex w-100 justify-content-between">
                        <div>
                          <input type="text" className="form-control" placeholder="Search Keyword" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Search Keyword'" /></div>
                        <div className="p-2 "><IoIosSearch size={25} /></div>
                      </div>
                    </div>
                  </div>
                  <button className="Contact-button rounded-0 py-2 fs-6 my-2 w-100" type="submit">Search</button>
                </form>
              </aside>
              <aside className="single_sidebar_widget post_category_widget p-4 my-4">
                <h4 className="widget_title">Category</h4>
                <ul className="list cat-list p-0">
                  <li>
                    <a href="#" className="d-flex">
                      <p>Resaurant food</p>
                      <p>(37)</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-flex">
                      <p>Travel news</p>
                      <p>(10)</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-flex">
                      <p>Modern technology</p>
                      <p>(03)</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-flex">
                      <p>Product</p>
                      <p>(11)</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-flex">
                      <p>Inspiration</p>
                      <p>(21)</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-flex">
                      <p>Health Care</p>
                      <p>(09)</p>
                    </a>
                  </li>
                </ul>
              </aside>
              <aside className="single_sidebar_widget popular_post_widget p-4">
                <h3 className="widget_title">Recent Post</h3>
                <div className="media post_item row my-3">
                  <div className="col-4">
                    <img src={postIamge1} alt="post" />
                  </div>
                  <div className="col p-0 media-body">
                    <a href="single-blog.html">
                      <h6>From life was you fish...</h6>
                    </a>
                    <p>January 12, 2019</p>
                  </div>
                </div>
                <div className="media post_item row my-3">
                  <div className="col-4">
                    <img src={postIamge2} alt="post" />
                  </div>
                  <div className="col p-0 media-body">
                    <a href="single-blog.html">
                      <h6>The Amazing Hubble</h6>
                    </a>
                    <p>02 Hours ago</p>
                  </div>
                </div>
                <div className="media post_item row my-3">
                  <div className="col-4">
                    <img src={postIamge3} alt="post" />
                  </div>
                  <div className="col p-0 media-body">
                    <a href="single-blog.html">
                      <h6>Astronomy Or Astrology</h6>
                    </a>
                    <p>03 Hours ago</p>
                  </div>
                </div>
                <div className="media post_item row my-3">
                  <div className="col-4">
                    <img src={postIamge4} alt="post" />
                  </div>
                  <div className="col p-0 media-body">
                    <a href="single-blog.html">
                      <h6>Asteroids telescope</h6>
                    </a>
                    <p>01 Hours ago</p>
                  </div>
                </div>
              </aside>
              <aside className="single_sidebar_widget tag_cloud_widget p-4 my-4">
                <div className="">
                  <h4 className="widget_title">Tag Clouds</h4>
                  <ul className="list">
                    <li>
                      <a href="#">project</a>
                    </li>
                    <li>
                      <a href="#">love</a>
                    </li>
                    <li>
                      <a href="#">technology</a>
                    </li>
                    <li>
                      <a href="#">travel</a>
                    </li>
                    <li>
                      <a href="#">restaurant</a>
                    </li>
                    <li>
                      <a href="#">life style</a>
                    </li>
                    <li>
                      <a href="#">design</a>
                    </li>
                    <li>
                      <a href="#">illustration</a>
                    </li>
                  </ul>
                </div>
              </aside>
              <aside className="single_sidebar_widget instagram_feeds p-4 ">
                <h4 className="widget_title">Instagram Feeds</h4>
                <ul className="instagram_row flex-wrap">
                  <li>
                    <a href="#">
                      <img className="img-fluid" src={postIamge5} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img className="img-fluid" src={postIamge6} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img className="img-fluid" src={postIamge7} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img className="img-fluid" src={postIamge8} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img className="img-fluid" src={postIamge9} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img className="img-fluid" src={postIamge10} alt="" />
                    </a>
                  </li>
                </ul>
              </aside>
              <aside className="single_sidebar_widget newsletter_widget p-4 my-4">
                <h4 className="widget_title">Newsletter</h4>
                <form action="#">
                  <div className="form-group">
                    <input type="email" className="form-control p-3 my-4" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email'" placeholder="Enter email" required="" />
                  </div>
                  <button className="Contact-button rounded-0 py-2 fs-6 my-2 w-100" type="submit">Subscribe</button>
                </form>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>)
}
export default SingleBlog;