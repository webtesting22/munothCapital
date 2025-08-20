import React from "react";
import "./Promotors.css";
import { Row, Col } from "antd";

const Promotors = () => {
    return (
        <>
            <div className="PromotorsContainer">
                <div className="Container">
                    <Row>
                        <Col lg={8}>
                            <div>
                                <h3>Our Leadership</h3>
                            </div>
                        </Col>
                        <Col lg={16}>
                            <div>
                                <h2>Meet the visionary leaders who have built Munoth Capital into a trusted name in capital management, with decades of experience in financial markets and a commitment to excellence.</h2>
                            </div>
                        </Col>
                    </Row>

                    <div className="promotors-content">
                        <div className="promotors-grid">
                            {/* First Promoter */}
                            <div className="promoter-card">
                                <div className="promoter-image">
                                    <img
                                        src="/promotorsImages/shantilal_jain.jpg"
                                        alt="Shantilal Misrimal Jain"
                                        className="promoter-photo"
                                    />
                                </div>
                                <div className="promoter-info">
                                    <h3 className="promoter-name">Shantilal Misrimal Jain</h3>
                                    <p className="promoter-title">Non Executive Chairman</p>
                                    <div className="promoter-bio">
                                        <p>
                                            He is the founder of the Munoth Group that comprises of private and public limited companies. Originally in Import business, the group has expanded to Financial Markets, Real Estate, Ware Housing, Leasing and Construction. Active in business since an early age of 17 years, his strategic guidance has helped the group in year on year progress. Many charities and philanthropic activities are credited to his name. He is also a proud recipient of "Glory of Gujarat" award by hands of the Governor of Gujarat.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Second Promoter */}
                            <div className="promoter-card">
                                <div className="promoter-image">
                                    <img
                                        src="/promotorsImages/siddharth_jain.jpg"
                                        alt="Siddharth Jain"
                                        className="promoter-photo"
                                    />
                                </div>
                                <div className="promoter-info">
                                    <h3 className="promoter-name">Siddharth Jain</h3>
                                    <p className="promoter-title">Managing Director</p>
                                    <div className="promoter-bio">
                                        <p>
                                            He is the Managing Director of Munoth Group based in Ahmedabad, that has interests in Equities, Debt, Real Estate, Leasing, Private Investments and Run a Hedge fund - AIF Category III. Members of NSE, BSE and CDSL, he has been a part of the group's investment business for the last 20 years. He has been responsible for setting up the financial services business which included an arbitrage desk, sub-broker and remisser network, advised base premium brokerage desk and trading/investment in proprietary book. He is a believer in fundamental analysis and the rich learning on understanding fundamentals of the companies has come to him in legacy. Apart from these he is the Member of GCCI and Founder Chief Patron of JITO. He Attended Prestigious eurekahedge conference in New York as speaker on the ASIA Panel. He is also on the Investors Panel of Centre of Innovation, Incubation and Entrepreneurship at IIM Ahmedabad.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Promotors;