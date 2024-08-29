import Image2 from '../assets/faq.png';

function FrequentlyAsk() {
  return <>
    <div className="FrequentlyAsk">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-6 Image">
            <div >
              <img className="img-fluid" src={Image2} alt="" srcset="" />
            </div>
          </div>
          <div className="col-lg-5 col-md-6 d-flex align-items-center">
            <div className='text'>
              <div className='py-5'>
                <h1 className='' data-aos="fade-left">Frequently ask</h1>
              </div>
              <div>
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item" data-aos="fade-up">
                    <h2 class="accordion-header">
                      <button class="accordion-button custom-accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" data-aos="fade-up">
                        Adieus who direct esteem It esteems luckily?
                      </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item"  >
                    <h2 class="accordion-header" >
                      <button class="accordion-button collapsed custom-accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" data-aos="fade-up">
                        Who direct esteem It esteems?
                      </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item" >
                    <h2 class="accordion-header ">
                      <button class="accordion-button collapsed custom-accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" data-aos="fade-up">
                        Duis consectetur feugiat auctor?
                      </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing.
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item" >
                    <h2 class="accordion-header ">
                      <button class="accordion-button collapsed custom-accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" data-aos="fade-up">
                        Consectetur feugiat auctor?
                      </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default FrequentlyAsk;