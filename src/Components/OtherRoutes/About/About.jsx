import React from "react";
import "./About.css";
import AboutHome from "../../HomeRoutes/AboutHome/AboutHome";
import Promotors from "../Promotors/Promotors";
const About = () => {
    return <div className="about-container ">
        <AboutHome />
        <Promotors />
    </div>;
};

export default About;