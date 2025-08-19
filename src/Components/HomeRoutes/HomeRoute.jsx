import React from "react";
import HeroHome from "./HeroHome/HeroHome";
import HeroHomeVideoContainer from "./HeroHomeVideoContainer/HeroHomeVideoContainer";
import AboutHome from "./AboutHome/AboutHome";
import OurServicesHome from "./OurServicesHome/OurServicesHome";
import AttachmentImages from "./AttachmentImages/AttachmentImages";
import ContactSection from "../OtherRoutes/ContactSection/ContactSection";
const HomeRoute = () => {
    return (
        <div>
            <HeroHome />
            <HeroHomeVideoContainer />
            <AboutHome />
            <OurServicesHome />
            <AttachmentImages />
            <ContactSection/>
            {/* <About /> */}
        </div>
    )
}

export default HomeRoute;   