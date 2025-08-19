import React from "react";
import "./OurServicesHome.css";
import { Row, Col, Collapse } from "antd";
import { GoPlus } from "react-icons/go";

const OurServicesHome = () => {
    const items = [
        {
            key: '1',
            label: <div className="flex items-center gap-2">
                <div className="serviceImageContainer">
                    <img src="/ServicesImages/Advisory Desk.jpg" alt="Advisory Desk" />
                </div>
                <GoPlus />
                <h2>Advisory Desk</h2>
            </div>,
            children: <p>We know time is money; 'more t/han money' when you are high networth individual. The reason why we have set up an Advice Based Broking Desk. This premium service helps monitor your portfolio very closely. Simultaneously, we workout the best solution for you, based upon our thorough equity research.</p>,
            icon: <GoPlus />,
        },
        {
            key: '2',
            label: <div className="flex items-center gap-2">
                <div className="serviceImageContainer">
                    <img src="/ServicesImages/ Depository.jpg" alt="Depository" />
                </div>
                <GoPlus />
                <h2>Depository</h2>
            </div>,
            children: <p>Transacting in securities is not easy, especially when you have segmented or scattered investments. That's why we provide you with a full-fledged Depository Service, to handle your securities' transactions absolutely hassle free. We are a CDSL Depository Participant.</p>,
            icon: <GoPlus />,
        },
        {
            key: '3',
            label: <div className="flex items-center gap-2">
                <div className="serviceImageContainer">
                    <img src="/ServicesImages/ Hedge Fund.jpg" alt="Hedge Fund" />
                </div>
                <GoPlus />
                <h2>Hedge Fund</h2>
            </div>,
            children: <>
                <p>By definition, A Hedge Fund or Alternative Investment Fund is a financial vehicle that pools capital from a number of investors and invests it in securities and other instruments. It is administered by a professional management firm, and often structured as a limited partnership or a limited liability company or a similar business model. In India, Hedge Fund investment was legalized in 2012 as Sebi Registered Alternative Investment Fund Category III.</p> <p>Contrary to traditional investments, Hedge Funds depend on the skills, foresight and sheer acumen of your Hedge Fund Manager rather than the performance of the market or the asset class. Therefore, Hedge Funds can provide opportunities to manage risk as well as diversify in both bull and bear markets.</p>
                <br />
                <p>While most misconceive Hedge Funds to be a high risk, we consider them as investments without boundaries, and rightly so, because the possibilities and margins of returns. As your Hedge Fund managers, we employ a diverse and constantly evolving range of trading strategies to generate better returns. We provide investors with greater control and independence as well as enhanced transparency and liquidity matched to their underlying investments. We have made significant investment in technology and infrastructure to ensure we have the right insights to make informed investments of the funds you have entrusted us with. Our flexible investment platform allows us to work closely work with you to good ends.</p>
                <br />
                <h3>Munoth Alternative Investment Fund Highlights:</h3>
                <br />
                <p><b>SEBI Registered Alternative Investment Fund Company (Under Category 3)</b></p>
                <br />
                <ul>
                    <li>Fund Advisor- KPMG
                    </li>
                    <li>Custodian of Funds –HDFC Bank
                    </li>
                    <li>Legal Advisors – IC Legal, Mumbai
                    </li>
                    <li>Fund Sponsor – Chairman, Munoth Capital
                    </li>
                    <li>Settler – Siddharth Jain</li>
                </ul>
            </>,

            icon: <GoPlus />,
        },
        {
            key: '4',
            label: <div className="flex items-center gap-2">
                <div className="serviceImageContainer">
                    <img src="/ServicesImages/Margin Funding.jpg" alt="Margin Funding" />
                </div>
                <GoPlus />
                <h2>Margin Funding</h2>
            </div>,
            children: <p>When there is a sudden availability of the opportunity of your choice, shortterm funding need might come up. That's why at Munoth, we leverage your investments, not just with our expertise, but also by contributing our resources to meet your investment needs. For this purpose, we provide organize comprehensive Margin Funding that bridges the financial gap between you and your investments, so your expectations never have to fall short of reality.</p>,
            icon: <GoPlus />,
        },

    ];
    const onChange = (key) => {
        console.log(key);
    };
    return (
        <div className="OurServicesHomeContainer paddingTop200px">
            <div className="Container">
                <Row>
                    <Col lg={8}>
                        <div>
                            <h3>Our Services</h3>
                        </div>
                    </Col>
                    <Col lg={16}>
                        <div>
                            <h2>Comprehensive Wealth Solutions: From Research-Driven Broking to Seamless Depository, Hedge Funds & Margin Funding</h2>
                        </div>
                    </Col>
                </Row>
                <div className="OurServicesCollapseContainer marginTop80px">
                    <Collapse
                        items={items}
                        onChange={onChange}
                    />
                </div>
            </div>
        </div>
    )
}

export default OurServicesHome;