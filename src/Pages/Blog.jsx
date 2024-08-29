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
import image2 from '../assets/single_blog_2.png.webp'
import image3 from '../assets/single_blog_3.png.webp'
import image4 from '../assets/single_blog_4.png.webp'
import image5 from '../assets/single_blog_5.png.webp'
import AOS from 'aos';
import 'aos/dist/aos.css'
function Blog() {

  AOS.init({ duration: 1700, once: true })

  return (<>
    <div className="headerArea">
      <div className="AboutHeader">
        <div className="AboutHeader_bg">
          <div className="container">
            <Navbar />
            <div className="row AboutHeaderR1">
              <div className="col-lg-12 pt-5">
                <h1 className="pb-5">Blog</h1>
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
          <div className="col-lg-8 mb-5 mb-lg-0">
            <div className="blog_left_sidebar">
              <article className="blog_item">
                <div className="blog_item_img">
                  <img className="card-img rounded-0" src={image1} alt="" />
                  <a href="#" className="blog_item_date">
                    <h3>15</h3>
                    <p>Jan</p>
                  </a>
                </div>
                <div className="blog_details py-5">
                  <a className="d-inline-block" href="single-blog.html">
                    <h2>Google inks pact for new 35-storey office</h2>
                  </a>
                  <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                    he earth it first without heaven in place seed it second morning saying.</p>
                  <ul className="blog-info-link">
                    <li><a href="#"><i className="fa fa-user"></i> Travel, Lifestyle</a></li>
                    <li><a href="#"><i className="fa fa-comments"></i> 03 Comments</a></li>
                  </ul>
                </div>
              </article>
              <article className="blog_item">
                <div className="blog_item_img">
                  <img className="card-img rounded-0" src={image2} alt="" />
                  <a href="#" className="blog_item_date">
                    <h3>15</h3>
                    <p>Jan</p>
                  </a>
                </div>
                <div className="blog_details">
                  <a className="d-inline-block" href="single-blog.html">
                    <h2>Google inks pact for new 35-storey office</h2>
                  </a>
                  <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                    he earth it first without heaven in place seed it second morning saying.</p>
                  <ul className="blog-info-link">
                    <li><a href="#"><i className="fa fa-user"></i> Travel, Lifestyle</a></li>
                    <li><a href="#"><i className="fa fa-comments"></i> 03 Comments</a></li>
                  </ul>
                </div>
              </article>
              <article className="blog_item">
                <div className="blog_item_img">
                  <img className="card-img rounded-0" src={image3} alt="" />
                  <a href="#" className="blog_item_date">
                    <h3>15</h3>
                    <p>Jan</p>
                  </a>
                </div>
                <div className="blog_details">
                  <a className="d-inline-block" href="single-blog.html">
                    <h2>Google inks pact for new 35-storey office</h2>
                  </a>
                  <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                    he earth it first without heaven in place seed it second morning saying.</p>
                  <ul className="blog-info-link">
                    <li><a href="#"><i className="fa fa-user"></i> Travel, Lifestyle</a></li>
                    <li><a href="#"><i className="fa fa-comments"></i> 03 Comments</a></li>
                  </ul>
                </div>
              </article>
              <article className="blog_item">
                <div className="blog_item_img">
                  <img className="card-img rounded-0" src={image4} alt="" />
                  <a href="#" className="blog_item_date">
                    <h3>15</h3>
                    <p>Jan</p>
                  </a>
                </div>
                <div className="blog_details">
                  <a className="d-inline-block" href="single-blog.html">
                    <h2>Google inks pact for new 35-storey office</h2>
                  </a>
                  <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                    he earth it first without heaven in place seed it second morning saying.</p>
                  <ul className="blog-info-link">
                    <li><a href="#"><i className="fa fa-user"></i> Travel, Lifestyle</a></li>
                    <li><a href="#"><i className="fa fa-comments"></i> 03 Comments</a></li>
                  </ul>
                </div>
              </article>
              <article className="blog_item">
                <div className="blog_item_img">
                  <img className="card-img rounded-0" src={image5} alt="" />
                  <a href="#" className="blog_item_date">
                    <h3>15</h3>
                    <p>Jan</p>
                  </a>
                </div>
                <div className="blog_details">
                  <a className="d-inline-block" href="single-blog.html">
                    <h2>Google inks pact for new 35-storey office</h2>
                  </a>
                  <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                    he earth it first without heaven in place seed it second morning saying.</p>
                  <ul className="blog-info-link">
                    <li><a href="#"><i className="fa fa-user"></i> Travel, Lifestyle</a></li>
                    <li><a href="#"><i className="fa fa-comments"></i> 03 Comments</a></li>
                  </ul>
                </div>
              </article>
              <nav className="blog-pagination justify-content-center d-flex">
                <ul className="pagination">
                  <li className="page-item">
                    <a href="#" className="page-link" aria-label="Previous">
                      <i className="ti-angle-left"></i>
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">1</a>
                  </li>
                  <li className="page-item active">
                    <a href="#" className="page-link">2</a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link" aria-label="Next">
                      <i className="ti-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
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
export default Blog;