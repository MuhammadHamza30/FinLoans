import Image3 from '../assets/author.png';


function ContentCarousal(){
  return <>
        <div className="Section_5">
        <div className="container py-5 my-5">
          <div className="row">
            <div className='col-lg-12 col-md-6'>
              <div id="Authercarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner row">
                  <div className="carousel-item active">
                    <div id='item' className="d-lg-flex ">
                      <img
                        src={Image3}
                        className="rounded-circle"
                        alt="..."
                      />
                      <div className="quote-content pt-5 mt-5">
                        <p className="quote-text w-75">
                          "Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering through animal welfare when people might depend on livestock as their only source of income or food."
                        </p>
                        <p className="quote-author">- Micky Mouse</p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div id='item' className="d-lg-flex">
                      <img
                        src={Image3}
                        className="rounded-circle"
                        alt="..."
                      />
                      <div className="quote-content pt-5 mt-5">
                        <p className="quote-text w-75">
                          "Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering through animal welfare when people might depend on livestock as their only source of income or food."
                        </p>
                        <p className="quote-author">- Micky Mouse</p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <div id='item' className="d-lg-flex ">
                      <img
                        src={Image3}
                        className="rounded-circle"
                        alt="..."
                      />
                      <div className="quote-content pt-5 mt-5">
                        <p className="quote-text w-75">
                          "Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering through animal welfare when people might depend on livestock as their only source of income or food."
                        </p>
                        <p className="quote-author">- Micky Mouse</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#Authercarousel"
                  data-bs-slide="prev"
                >
                  <span aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0A8CFF" className="bi bi-chevron-left" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                    </svg>
                  </span>
                </button>
                <button
                  className="carousel-control-next "
                  type="button"
                  data-bs-target="#Authercarousel"
                  data-bs-slide="next"
                >
                  <span aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0A8CFF" className="bi bi-chevron-right" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div >
  </>
}
export default ContentCarousal;