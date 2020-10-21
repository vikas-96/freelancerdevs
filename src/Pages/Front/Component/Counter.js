import React from "react";

const Counter = () => {
  return (
    <>
      <section className="ftco-counter img" id="section-counter">
        <div className="container">
          <div className="row pt-md-4">
            <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
              <div className="block-18 py-md-5 mb-md-4">
                <div className="text text-border d-flex align-items-center">
                  <strong className="number" data-number="8">
                    7+
                  </strong>
                  <span>
                    Years of <br />
                    Experience
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
              <div className="block-18 py-md-5 mb-md-4">
                <div className="text text-border d-flex align-items-center">
                  <strong className="number" data-number="100">
                    20+
                  </strong>
                  <span>
                    Project <br />
                    Done
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
              <div className="block-18 py-md-5 mb-md-4">
                <div className="text text-border d-flex align-items-center">
                  <strong className="number" data-number="150">
                    1M+
                  </strong>
                  <span>
                    Coffee <br />
                    Consumed
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
              <div className="block-18 py-md-5 mb-md-4">
                <div className="text d-flex align-items-center">
                  <strong className="number" data-number="150">
                    20+
                  </strong>
                  <span>
                    Happy <br />
                    Customers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
