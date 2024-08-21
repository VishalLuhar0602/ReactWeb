import React from "react";
import web from "../src/imgs/hero.avif"
import "./index.css"
import { NavLink } from "react-router-dom";
import Common from "./Common"

const Home = () => {
  return (
    <>
    <Common
    name="Welcome to our website"
    imgsrc={web}
    visit="/contact"
    btname="Contact Now"
    />
    </>
  );
};

export default Home;
