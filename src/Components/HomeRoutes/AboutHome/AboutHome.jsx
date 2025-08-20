import React from "react";
import "./AboutHome.css";
import { Row, Col } from "antd";
const AboutHome = () => {
    return (
        <div className="AboutHomeContainer paddingTop100px">
            {/* <div className="BackgroundAttachImageContainer">
                <img src="https://cdn.prod.website-files.com/66f7e75deaee2c0e17b0887d/670d54d26bda66dca6c8c77d_Background%203.svg" alt="" />
            </div> */}
            <div className="Container">
                <Row>
                    <Col lg={8}>
                        <div>
                            <h3>Just to clarify</h3>
                        </div>
                    </Col>
                    <Col lg={16}>
                        <div>
                            <h2>At Munoth, we pride ourselves in being an independent Capital Management Company, offering a range of alternative and traditional investment strategies for institutions, private investors, and individuals alike.</h2>
                        </div>
                    </Col>
                </Row>
                <div className="MarqueeTagContainer marginTop80px">
                    <div className="marquee-content">
                        <div className="marquee-text">
                            <span>No need to issue cheques by investors while subscribing to IPO. Just write the bank account number and sign in the application form to authorise your bank to make payment in case of allotment. No worries for refund as the money remains in investor's account</span>
                            <span> | </span>
                            <span>Munoth Capital does not operate any WhatsApp groups or similar platforms for investment advice.</span>
                            <span> | </span>
                            <span>Prevent unauthorised transactions in your account &rarr; Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day.......... Issued in the interest of Investors.</span>
                            <span> | </span>
                            <span>Prevent unauthorized transactions in your demat account &rarr; Update your Mobile Number with your Depository Participant. Receive alerts on your Registered Mobile for all debit and other important transactions in your demat account directly from NSDL/CDSL on the same day..... issued in the interest of investors.</span>
                            <span> | </span>
                            <span>KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary.</span>
                        </div>
                        <div className="marquee-text" aria-hidden="true">
                            <span>No need to issue cheques by investors while subscribing to IPO. Just write the bank account number and sign in the application form to authorise your bank to make payment in case of allotment. No worries for refund as the money remains in investor's account</span>
                            <span> | </span>
                            <span>Munoth Capital does not operate any WhatsApp groups or similar platforms for investment advice.</span>
                            <span> | </span>
                            <span>Prevent unauthorised transactions in your account &rarr; Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day.......... Issued in the interest of Investors.</span>
                            <span> | </span>
                            <span>Prevent unauthorized transactions in your demat account &rarr; Update your Mobile Number with your Depository Participant. Receive alerts on your Registered Mobile for all debit and other important transactions in your demat account directly from NSDL/CDSL on the same day..... issued in the interest of investors.</span>
                            <span> | </span>
                            <span>KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary.</span>
                        </div>
                    </div>
                </div>
                <div className="marginTop80px ">
                    <p className="marginTop20px">We believe in growing with our clients, not by taking risks, but by pacing ourselves with the momentum of the markets. This allows us to gauge prospects best suited for you and to ensure that your returns are always higher. In course of our operations, we have built a closely knit team of investment professionals with significant sector-specific expertise and relationships with leading companies, institutions and individuals. This allows us to engage in and extract value from even complex investments.</p>
                    <p className="marginTop20px">We bring with us the advantage of experience, and the expertise of maturity. Our successes have paved the way for our future and that’s where we’d like to grow with you. There’s always something better and more opportune in the market for you and we are here to guide you every step of the way. After all, it is our promise to be your most trusted capital investment managers.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutHome;