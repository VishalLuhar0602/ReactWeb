import React from "react";
import "./index.css"
import { NavLink } from "react-router-dom";

const Home = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                  {props.name}
                  <br />
                  <strong className="brand-name">
                    <span> <span>V</span>ishal.</span>
                  </strong>
                </h1>
                <h2 className="my-3">
                  We are team of talented developers making websites.
                </h2>
                <div className="mt-3">
                  <NavLink className="btn btn-get-started" to={props.visit} role="button">
                    {props.btname}
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img" >
                <img src={props.imgsrc} className="img-fluid animated" alt="Home Img" />
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
