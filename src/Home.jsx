import React from "react";
import web from "../src/imgs/main.jpg"
import "./index.css"
import { NavLink } from "react-router-dom";
import Common from "./Common"

const Home = () => {
  return (
    <>
    <Common
    name="Grow Your business with"
    imgsrc={web}
    visit="/services"
    btname="Get Started"
    />
    </>
  );
};

export default Home;
