import React, { Component } from "react";
import Container from "react-bootstrap/Container";



class Amber extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="container py-5">
          <div className="row g-0">
            <div className="col-md-6 text-center d-flex flex-column justify-content-center min-vh-50 bg-light">
              <div className="lc-block mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3em"
                  height="3em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  lc-helper="svg-icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98l4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"
                  />
                </svg>
              </div>
              {/* /lc-block */}
              <div className="lc-block mb-4">
                <div editable="rich">
                  <h2 className="fw-bolder">Address</h2>
                </div>
              </div>
              <div className="lc-block">
                <div editable="rich">
                  <p className="lead">
                    121 Burton Avenue - Memphis
                    <br />
                    TN - Tennessee
                    <br />
                    Zip 38128
                  </p>
                </div>
              </div>
              {/* /lc-block */}
            </div>
            {/* /col */}
            <div className="col-md-6 bg-dark text-white d-flex flex-column justify-content-center text-center py-5">
              <div className="lc-block mb-4 border-bottom border-white py-4">
                <div className="lc-block mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3em"
                    height="3em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    style={{}}
                    lc-helper="svg-icon"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                  </svg>
                </div>
                {/* /lc-block */}
                <div className="lc-block mb-4">
                  <div editable="rich">
                    <h2 className="fw-bolder">Phone</h2>
                  </div>
                </div>
                <div className="lc-block">
                  <div editable="rich">
                    <p className="lead">
                      901-773-4045
                      <br />
                    </p>
                  </div>
                </div>
                {/* /lc-block */}
              </div>
              <div className="lc-block py-4">
                <div className="lc-block mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3em"
                    height="3em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    style={{}}
                    lc-helper="svg-icon"
                  >
                    <path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z" />
                    <path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z" />
                  </svg>
                </div>
                {/* /lc-block */}
                <div className="lc-block mb-4">
                  <div editable="rich">
                    <h2 className="fw-bolder">Mail</h2>
                  </div>
                </div>
                <div className="lc-block">
                  <div editable="rich">
                    <p className="lead">
                      mail@yourdomain.com
                      <br />
                    </p>
                  </div>
                </div>
                {/* /lc-block */}
              </div>
              {/* /lc-block */}
            </div>
            {/* /col */}
          </div>
        </div>
      </div>
    );
  }
}

export default Amber;
