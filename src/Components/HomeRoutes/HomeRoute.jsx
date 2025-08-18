import React from "react";
import HeroHome from "./HeroHome/HeroHome";
import HeroHomeVideoContainer from "./HeroHomeVideoContainer/HeroHomeVideoContainer";
import AboutHome from "./AboutHome/AboutHome";
import OurServicesHome from "./OurServicesHome/OurServicesHome";
import AttachmentImages from "./AttachmentImages/AttachmentImages";
const HomeRoute = () => {
    return (
        <div>
            <HeroHome />
            <HeroHomeVideoContainer />
            <AboutHome />
            <OurServicesHome />
            <AttachmentImages />
            {/* <About /> */}
        </div>
    )
}

export default HomeRoute;   