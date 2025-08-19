import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import "./FinancialDocuments.css";
import { FaDownload, FaFolder, FaPlus, FaFilePdf, FaChevronRight, FaArrowLeft, FaEye, FaTimes, FaBars } from "react-icons/fa";

const FinancialDocuments = () => {
    const [selectedCategory, setSelectedCategory] = useState("Annual Return");
    const [selectedFolder, setSelectedFolder] = useState(null);
    const [pdfViewer, setPdfViewer] = useState({ isOpen: false, url: '', title: '' });
    const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile devices and handle resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const categories = [
        "Annual Return",
        "Quarterly Reports",
        "Announcements",
        "Annual Results",
        "Documents and Others",
    ];

    const folderStructure = {
        "Annual Return": [
            "2022-23",
            "2021-22",
            "2020-21",
            "2019-20",
            "2018-19"
        ],
        "Quarterly Reports": [
            "2018",
            "2017",
            "2016",
            "2015"
        ],
        "Announcements": [
            "2024",
            "2020",
            "2019",
            "2018",
            "2017",
            "2016",
            "2015"
        ],
        "Annual Results": [
            "Audited Financial Results",
            "Annual Reports"
        ],
        "Documents and Others": [
            "Policies"
        ]
    };

    const documents = {
        "2022-23": [
            {
                date: "15 Dec, 2022",
                title: "Annual Return for 2022-23",
                size: "276 KB",
                type: "MGT-7",
                filePath: "/Documents/AnnualReturn/Annual Return for 2022-23.pdf"
            }
        ],
        "2021-22": [
            {
                date: "20 Jan, 2022",
                title: "MGT-7 2021-22",
                size: "739 KB",
                type: "MGT-7",
                filePath: "/Documents/AnnualReturn/MGT-7 2021-22.pdf"
            }
        ],
        "2020-21": [
            {
                date: "10 Feb, 2021",
                title: "Annual Return for 2020-21",
                size: "278 KB",
                type: "MGT-7",
                filePath: "/Documents/AnnualReturn/Annual Return for 2020-21.pdf"
            }
        ],
        "2019-20": [
            {
                date: "25 Mar, 2020",
                title: "Annual Return for 2019-20",
                size: "277 KB",
                type: "MGT-7",
                filePath: "/Documents/AnnualReturn/Annual Return for 2019-20.pdf"
            }
        ],
        "2018-19": [
            {
                date: "15 Apr, 2019",
                title: "Annual Return for 2018-19",
                size: "278 KB",
                type: "MGT-7",
                filePath: "/Documents/AnnualReturn/Annual Return for 2018-19.pdf"
            }
        ],
        "2018": [
            {
                date: "30 Sep, 2018",
                title: "Share holding pattern for quarter ending 30th September 2018",
                size: "442 KB",
                type: "PDF",
                filePath: "/Documents/QuarterlyReports/Share holding pattern for quarter ending 30th September 2018.pdf"
            },
            {
                date: "30 Jun, 2018",
                title: "Share holding pattern for quarter ending 30th June 2018",
                size: "442 KB",
                type: "PDF",
                filePath: "/Documents/QuarterlyReports/Share holding pattern for quarter ending 30th June 2018.pdf"
            },
            {
                date: "31 Mar, 2018",
                title: "Share holding pattern for quarter ending 31st March 2018",
                size: "440 KB",
                type: "PDF",
                filePath: "/Documents/QuarterlyReports/Share holding pattern for quarter ending 31st March 2018.pdf"
            }
        ],
        "2017": [
            {
                date: "31 Dec, 2017",
                title: "Share holding pattern for quarter ending 31st December 2017",
                size: "436 KB",
                type: "PDF",
                filePath: "/Documents/QuarterlyReports/Share holding pattern for quarter ending 31st December 2017.pdf"
            },
            {
                date: "30 Sep, 2017",
                title: "Share holding pattern for quarter ending 3oth September 2017",
                size: "436 KB",
                type: "PDF",
                filePath: "/Documents/QuarterlyReports/Share holding pattern for quarter ending 3oth September 2017.pdf"
            },
            {
                date: "30 Jun, 2017",
                title: "Share holding pattern for quarter ending 30th June 2017",
                size: "438 KB",
                type: "PDF",
                filePath: "/Documents/QuarterlyReports/Share holding pattern for quarter ending 30th June 2017.pdf"
            },
            {
                date: "31 Mar, 2017",
                title: "Share holding pattern for quarter ending 31st March 2017",
                size: "438 KB",
                type: "PDF",
                filePath: "/Documents/QuarterlyReports/Share holding pattern for quarter ending 31st March 2017.pdf"
            }
        ],
        "2016": [
            {
                date: "31 Dec, 2016",
                title: "Notice for Annual General Meeting",
                size: "396 KB",
                type: "PDF",
                filePath: "/Documents/Announcements/2016/Notice for Annual General Meeting.pdf"
            },
            {
                date: "30 Jun, 2016",
                title: "Board Meeting to consider unaudited Financial results for Q1 ending 30th June 2016",
                size: "815 KB",
                type: "PDF",
                filePath: "/Documents/Announcements/2016/Board Meeting to consider unaudited Financial results for Q1 ending 30th June 2016.pdf"
            },
            {
                date: "31 Mar, 2016",
                title: "Board Meeting to consider audited Financial results for Q4 ending 31st March 2016",
                size: "360 KB",
                type: "PDF",
                filePath: "/Documents/Announcements/2016/Board Meeting to consider audited Financial results for Q4 ending 31st March 2016 .pdf"
            },
            {
                date: "31 Dec, 2015",
                title: "Board meeting to consider unaudited financial results for Q3 ending 30th Dec 2015",
                size: "360 KB",
                type: "PDF",
                filePath: "/Documents/Announcements/2016/Board meeting to consider unaudited financial results for Q3 ending 30th Dec 2015.docx .pdf"
            },
            {
                date: "30 Sep, 2016",
                title: "Board Meeting to consider unaudited Financial results for Q2 ending 30th Sep 2016",
                size: "70 KB",
                type: "PDF",
                filePath: "/Documents/Announcements/2016/Board Meeting to consider unaudited Financial results for Q2 ending 30th Sep 2016 .pdf"
            },
            {
                date: "15 Sep, 2016",
                title: "Proceedings of AGM",
                size: "723 KB",
                type: "PDF",
                filePath: "/Documents/Announcements/2016/Proceedings of AGM.pdf"
            }
        ],
        "2015": [
            {
                date: "31 Dec, 2015",
                title: "Shareholding Pattern for the Quarter ended on 31st Dec 2015",
                size: "144 KB",
                type: "PDF",
                filePath: "/Documents/QuarterlyReports/Shareholding Pattern for the Quarter ended on 31st Dec 2015.pdf"
            },
            {
                date: "30 Sep, 2015",
                title: "Shareholding Pattern for the Quarter ended on 30th Sept 2015",
                size: "212 KB",
                type: "PDF",
                filePath: "/Documents/QuarterlyReports/Shareholding Pattern for the Quarter ended on 30th Sept 2015.pdf"
            },
            {
                date: "30 Jun, 2015",
                title: "Shareholding Pattern for the Quarter ended on 30th June 2015",
                size: "207 KB",
                type: "PDF",
                filePath: "/Documents/QuarterlyReports/Shareholding Pattern for the Quarter ended on 30th June 2015.pdf"
            }
        ],
        // Policies
        "Policies": [
            {
                date: "01 Jan, 2024",
                title: "Nomination and Remuneration Policy",
                size: "318 KB",
                type: "PDF",
                filePath: "/Documents/DocumentsAndOthers/Nomination and Remuneration Policy.pdf"
            },
            {
                date: "01 Jan, 2024",
                title: "Dividend Distribution Policy",
                size: "320 KB",
                type: "PDF",
                filePath: "/Documents/DocumentsAndOthers/Dividend Distribution Policy.pdf"
            },
            {
                date: "01 Jan, 2024",
                title: "Code of Practices and Procedures for Fair Disclosure",
                size: "489 KB",
                type: "PDF",
                filePath: "/Documents/DocumentsAndOthers/Code of Practices and Procedures for Fair Disclosure.pdf"
            },
            {
                date: "01 Jan, 2024",
                title: "Investors Grievances",
                size: "408 KB",
                type: "PDF",
                filePath: "/Documents/DocumentsAndOthers/Investors Grievances.pdf"
            },
            {
                date: "01 Jan, 2024",
                title: "Policy on Familiarisation of Independent Directors",
                size: "311 KB",
                type: "PDF",
                filePath: "/Documents/DocumentsAndOthers/Policy on Familiarisation of Independent Directors.pdf"
            },
            {
                date: "01 Jan, 2024",
                title: "Materiality on Subsidiaries",
                size: "420 KB",
                type: "PDF",
                filePath: "/Documents/DocumentsAndOthers/Materiality on Subsidiaries.pdf"
            },
            {
                date: "01 Jan, 2024",
                title: "Related Party Policy",
                size: "658 KB",
                type: "PDF",
                filePath: "/Documents/DocumentsAndOthers/Related Party Policy.pdf"
            },
            {
                date: "01 Jan, 2024",
                title: "Policy on Remuneration",
                size: "351 KB",
                type: "PDF",
                filePath: "/Documents/DocumentsAndOthers/Policy on Remuneration.pdf"
            },
            {
                date: "01 Jan, 2024",
                title: "Vigil Mechanism Policy",
                size: "367 KB",
                type: "PDF",
                filePath: "/Documents/DocumentsAndOthers/Vigil Mechanism Policy.pdf"
            },
            {
                date: "01 Jan, 2024",
                title: "Code of Conduct for Board of Directors and Senior Management",
                size: "332 KB",
                type: "PDF",
                filePath: "/Documents/DocumentsAndOthers/Code of Conduct for Board of Directors and Senior Management.pdf"
            },
            {
                date: "01 Jan, 2024",
                title: "Director and Senior Personnel Appointment Policies",
                size: "320 KB",
                type: "PDF",
                filePath: "/Documents/DocumentsAndOthers/Director and Senior Personnel Appointment Policies .pdf"
            }
        ],

        // Announcements by Year
        "2024": [
            {
                date: "15 Mar, 2024",
                title: "Notice of EGM - Munoth Capital",
                size: "1.2 MB",
                type: "PDF",
                filePath: "/Documents/Announcements/2024/Notice of EGM_ Munoth Capital .pdf"
            },
            {
                date: "10 Feb, 2024",
                title: "Valuation Report",
                size: "1.7 MB",
                type: "PDF",
                filePath: "/Documents/Announcements/2024/Valuation Report.pdf"
            }
        ],
        "2020": [
            {
                date: "20 Dec, 2020",
                title: "Notice for AGM",
                size: "405 KB",
                type: "PDF",
                filePath: "/Documents/Announcements/2020/Notice for AGM.pdf"
            }
        ],
        "2019": [
            {
                date: "25 Dec, 2019",
                title: "Public Notice - Physical Share Transfer (English News Paper)",
                size: "1.1 MB",
                type: "PDF",
                filePath: "/Documents/Announcements/2019/Public Notice_Physical Share transfer_English News paper.pdf"
            },
            {
                date: "20 Sep, 2019",
                title: "Public Notice - Physical Share Transfer (News Paper)",
                size: "573 KB",
                type: "PDF",
                filePath: "/Documents/Announcements/2019/Public Notice_Physical Share transfer_News paper.pdf"
            }
        ],
        "2018": [
            {
                date: "30 Dec, 2018",
                title: "Board meeting intimation to consider results of Q3 ending December 2017",
                size: "851 KB",
                type: "PDF",
                filePath: "/Documents/Announcements/2018/Board meeting intimation to consider results of Q3 ending December 2017.pdf"
            },
            {
                date: "25 Sep, 2018",
                title: "Board meeting intimation to consider results of Q2 ending September 2018",
                size: "359 KB",
                type: "PDF",
                filePath: "/Documents/Announcements/2018/Board meeting intimation to consider results of Q2 ending September 2018.pdf"
            },
            {
                date: "20 Jun, 2018",
                title: "Board meeting intimation to consider results of Q1 ending June 2018",
                size: "184 KB",
                type: "PDF",
                filePath: "/Documents/Announcements/2018/Board meeting intimation to consider results of Q1 ending June 2018.pdf"
            },
            {
                date: "15 Mar, 2018",
                title: "Board meeting intimation to consider audited results for year ending March 2018",
                size: "375 KB",
                type: "PDF",
                filePath: "/Documents/Announcements/2018/Board meeting intimation to consider audited results for year ending March 2018.pdf"
            },
            {
                date: "10 Jan, 2018",
                title: "Outcome of AGM",
                size: "267 KB",
                type: "PDF",
                filePath: "/Documents/Announcements/2018/Outcome of AGM.pdf"
            }
        ],
        "2017": [
            {
                date: "28 Dec, 2017",
                title: "Intimation of EGM",
                size: "317 KB",
                type: "PDF",
                filePath: "/Documents/Announcements/2017/Intimation of EGM.pdf"
            },
            {
                date: "22 Sep, 2017",
                title: "Board meeting intimation to consider results of Q2 ending September 2017",
                size: "95 KB",
                type: "PDF",
                filePath: "/Documents/Announcements/2017/Board meeting intimation to consider results of Q2 ending September 2017.pdf"
            },
            {
                date: "18 Jun, 2017",
                title: "Summary of the AGM",
                size: "189 KB",
                type: "PDF",
                filePath: "/Documents/Announcements/2017/Summary of the AGM.PDF"
            },
            {
                date: "15 Jun, 2017",
                title: "Outcome of AGM",
                size: "267 KB",
                type: "PDF",
                filePath: "/Documents/Announcements/2017/Outcome of AGM.pdf"
            },
            {
                date: "10 Jun, 2017",
                title: "Notice of AGM",
                size: "410 KB",
                type: "PDF",
                filePath: "/Documents/Announcements/2017/Notice of AGM.pdf"
            }
        ],
        "2016": [
            {
                date: "31 Dec, 2016",
                title: "Year End Corporate Announcement 2016",
                size: "267 KB",
                type: "PDF",
                filePath: "#"
            },
            {
                date: "25 Sep, 2016",
                title: "Q3 Results Announcement",
                size: "245 KB",
                type: "PDF",
                filePath: "#"
            },
            {
                date: "20 Jun, 2016",
                title: "Corporate Governance Announcement",
                size: "198 KB",
                type: "PDF",
                filePath: "#"
            }
        ],
        "2015": [
            {
                date: "30 Dec, 2015",
                title: "Board meeting to consider unaudited financial results for Q2 ending 30th Sep 2015",
                size: "361 KB",
                type: "PDF",
                filePath: "/Documents/Announcements/2015/Board meeting to consider unaudited financial results for Q2 ending 30th Sep 2015.pdf"
            },
            {
                date: "30 Jun, 2015",
                title: "Board meeting to consider unaudited financial results for Q1 ending 30th June 2015",
                size: "360 KB",
                type: "PDF",
                filePath: "/Documents/Announcements/2015/Board meeting to consider unaudited financial results for Q1 ending 30th June 2015.pdf"
            }
        ],
        // Quarterly Reports - Financial Results
        "Q4 2023": [
            {
                date: "31 Mar, 2024",
                title: "Financial Results for Q4 2023-24",
                size: "512 KB",
                type: "PDF",
                filePath: "#"
            }
        ],
        "Q3 2023": [
            {
                date: "31 Dec, 2023",
                title: "Financial Results for Q3 2023-24",
                size: "498 KB",
                type: "PDF",
                filePath: "#"
            }
        ],
        "Q2 2023": [
            {
                date: "30 Sep, 2023",
                title: "Financial Results for Q2 2023-24",
                size: "487 KB",
                type: "PDF",
                filePath: "#"
            }
        ],
        "Q1 2023": [
            {
                date: "30 Jun, 2023",
                title: "Financial Results for Q1 2023-24",
                size: "476 KB",
                type: "PDF",
                filePath: "#"
            }
        ],

        // Real Financial Results from FinancialResults folder
        "2021-22": [
            {
                date: "31 Dec, 2021",
                title: "Unaudited Financial results for Q3 of 2021-22",
                size: "268 KB",
                type: "PDF",
                filePath: "/Documents/QuarterlyReports/FinancialResults/Unaudited Financial results for Q3 of 2021-22.pdf"
            },
            {
                date: "30 Sep, 2021",
                title: "Unaudited Financial results for Q2 of 2021-22",
                size: "285 KB",
                type: "PDF",
                filePath: "/Documents/QuarterlyReports/FinancialResults/Unaudited Financial results for Q2 of 2021-22.pdf"
            },
            {
                date: "30 Jun, 2021",
                title: "Unaudited Financial results for Q1 of 2021-22",
                size: "203 KB",
                type: "PDF",
                filePath: "/Documents/QuarterlyReports/FinancialResults/Unaudited Financial results for Q1 of 2021-22.pdf"
            }
        ],
        "2020-21": [
            {
                date: "31 Mar, 2021",
                title: "Audited Financial results for Q4 of 2020-21",
                size: "393 KB",
                type: "PDF",
                filePath: "/Documents/QuarterlyReports/FinancialResults/Audited Financial results for Q4 of 2020-21.pdf"
            },
            {
                date: "31 Dec, 2020",
                title: "Unaudited Financial results for Q3 of 2020-21",
                size: "877 KB",
                type: "PDF",
                filePath: "/Documents/QuarterlyReports/FinancialResults/Unaudited Financial results for Q3 of 2020-21.PDF"
            },
            {
                date: "30 Sep, 2020",
                title: "Unaudited Financial results for Q2 of 2020-21",
                size: "877 KB",
                type: "PDF",
                filePath: "/Documents/QuarterlyReports/FinancialResults/Unaudited Financial results for Q2 of 2020-21 .PDF"
            },
            {
                date: "30 Jun, 2020",
                title: "Unaudited Financial results for Q1 of 2020-21",
                size: "1.6 MB",
                type: "PDF",
                filePath: "/Documents/QuarterlyReports/FinancialResults/Unaudited Financial results for Q1 of 2020-21 .pdf"
            }
        ],
        "2019-20": [
            {
                date: "31 Dec, 2019",
                title: "Unaudited Financial Results for Q3 of 2019-20",
                size: "1.5 MB",
                type: "PDF",
                filePath: "/Documents/QuarterlyReports/FinancialResults/Unaudited Financial Results for Q3 of 2019-20.pdf"
            },
            {
                date: "30 Sep, 2019",
                title: "Unaudited Financial Results for Q2 of 2019-20",
                size: "698 KB",
                type: "PDF",
                filePath: "/Documents/QuarterlyReports/FinancialResults/Unaudited Financial Results for Q2 of 2019-20.pdf"
            },
            {
                date: "30 Jun, 2019",
                title: "Unaudited Financial results for Q1 of 2019-20",
                size: "1009 KB",
                type: "PDF",
                filePath: "/Documents/QuarterlyReports/FinancialResults/Unaudited Financial results for Q1 of 2019-20.pdf"
            }
        ],
        "2018-19": [
            {
                date: "31 Dec, 2018",
                title: "Unaudited Financial results for Q3 of 2018-19",
                size: "1.1 MB",
                type: "PDF",
                filePath: "/Documents/QuarterlyReports/FinancialResults/Unaudited Financial results for Q3 of 2018-19.pdf"
            },
            {
                date: "30 Sep, 2018",
                title: "Unaudited Financial results for Q2 of 2018-19",
                size: "1.5 MB",
                type: "PDF",
                filePath: "/Documents/QuarterlyReports/FinancialResults/Unaudited Financial results for Q2 of 2018-19.pdf"
            },
            {
                date: "30 Jun, 2018",
                title: "Unaudited Financial results for Q1 of 2018-19",
                size: "1.2 MB",
                type: "PDF",
                filePath: "/Documents/QuarterlyReports/FinancialResults/Unaudited Financial results for Q1 of 2018-19.pdf"
            }
        ],
        "2017-18": [
            {
                date: "31 Dec, 2017",
                title: "Unaudited Financial results for Q3 of 2017-18",
                size: "748 KB",
                type: "PDF",
                filePath: "/Documents/QuarterlyReports/FinancialResults/Unaudited Financial results for Q3 of 2017-18.pdf"
            },
            {
                date: "30 Sep, 2017",
                title: "Unaudited Financial results for Q2 of 2017-18",
                size: "744 KB",
                type: "PDF",
                filePath: "/Documents/QuarterlyReports/FinancialResults/Unaudited Financial results for Q2 of 2017-18.pdf"
            }
        ],
        "2016-17": [
            {
                date: "30 Sep, 2016",
                title: "Unaudited financial results for Q2 of 2016-17",
                size: "1.4 MB",
                type: "PDF",
                filePath: "/Documents/QuarterlyReports/FinancialResults/Unaudited financial results for Q2 of 2016-17.pdf"
            },
            {
                date: "30 Jun, 2016",
                title: "Unaudited financial results for Q1 of 2016-17",
                size: "1.1 MB",
                type: "PDF",
                filePath: "/Documents/QuarterlyReports/FinancialResults/Unaudited financial results for Q1 of 2016-17.pdf"
            }
        ],
        "2015-16": [
            {
                date: "31 Dec, 2015",
                title: "Unaudited Financial Result for Q3 of 2015-16",
                size: "118 KB",
                type: "PDF",
                filePath: "/Documents/QuarterlyReports/FinancialResults/Unaudited Financial Result for Q3 of 2015-16.pdf"
            },
            {
                date: "30 Sep, 2015",
                title: "Unaudited Financial Result for Q2 of 2015-16",
                size: "152 KB",
                type: "PDF",
                filePath: "/Documents/QuarterlyReports/FinancialResults/Unaudited Financial Result for Q2 of 2015-16.pdf"
            },
            {
                date: "30 Jun, 2015",
                title: "Unaudited Financial Result for Q1 of 2015-16",
                size: "115 KB",
                type: "PDF",
                filePath: "/Documents/QuarterlyReports/FinancialResults/Unaudited Financial Result for Q1 of 2015-16.pdf"
            }
        ],

        // Audited Financial Results from AnnualResults folder
        "Audited Financial Results 2017-18": [
            {
                date: "31 Mar, 2018",
                title: "Audited Financial Results for year ending 2017-18",
                size: "81 KB",
                type: "PDF",
                filePath: "/Documents/AnnualResults/Audited Financial Results/Audited Financial Results for year ending 2017-18.pdf"
            }
        ],
        "Audited Financial Results 2016-17": [
            {
                date: "31 Mar, 2017",
                title: "Audited Financial Results for year ending 2016-17",
                size: "81 KB",
                type: "PDF",
                filePath: "/Documents/AnnualResults/Audited Financial Results/Audited Financial Results for year ending 2016-17.pdf"
            }
        ],
        "Audited Financial Results 2015-16": [
            {
                date: "31 Mar, 2016",
                title: "Audited Financial Results for the year ending 2015-16",
                size: "252 KB",
                type: "PDF",
                filePath: "/Documents/AnnualResults/Audited Financial Results/Audited Financial Results for the year ending 2015-16.pdf"
            }
        ],
        "Audited Financial Results 2014-15": [
            {
                date: "31 Mar, 2015",
                title: "Audited Financial Results for year ending 2014-15",
                size: "298 KB",
                type: "PDF",
                filePath: "/Documents/AnnualResults/Audited Financial Results/Audited Financial Results for year ending 2014-15.pdf"
            }
        ],

        // Annual Reports from AnnualResults folder
        "Annual Report 2023-24": [
            {
                date: "31 Mar, 2024",
                title: "Annual Report for 2023-24",
                size: "1.2 MB",
                type: "PDF",
                filePath: "/Documents/AnnualResults/AnnualReports/Annual Report for 2023-24.pdf"
            }
        ],
        "Annual Report 2022-23": [
            {
                date: "31 Mar, 2023",
                title: "Annual Report for 2022-23",
                size: "1.8 MB",
                type: "PDF",
                filePath: "/Documents/AnnualResults/AnnualReports/Annual Report for 2022-23.pdf"
            }
        ],
        "Annual Report 2021-22": [
            {
                date: "31 Mar, 2022",
                title: "Annual Report for 2021-22",
                size: "764 KB",
                type: "PDF",
                filePath: "/Documents/AnnualResults/AnnualReports/Annual Report for 2021-22.pdf"
            }
        ],
        "Annual Report 2020-21": [
            {
                date: "31 Mar, 2021",
                title: "Annual Report for 2020-21",
                size: "1.2 MB",
                type: "PDF",
                filePath: "/Documents/AnnualResults/AnnualReports/Annual Report for 2020-21.pdf"
            }
        ],
        "Annual Report 2019-20": [
            {
                date: "31 Mar, 2020",
                title: "Annual Report for 2019-20",
                size: "1.6 MB",
                type: "PDF",
                filePath: "/Documents/AnnualResults/AnnualReports/Annual Report for 2019-20.pdf"
            }
        ],
        "Annual Report 2018-19": [
            {
                date: "31 Mar, 2019",
                title: "Annual Report for F.y. 2018-19",
                size: "1.6 MB",
                type: "PDF",
                filePath: "/Documents/AnnualResults/AnnualReports/Annual Report for F.y. 2018-19.pdf"
            }
        ],
        "Annual Report 2017-18": [
            {
                date: "31 Mar, 2018",
                title: "Annual Report for 2017-18",
                size: "1.4 MB",
                type: "PDF",
                filePath: "/Documents/AnnualResults/AnnualReports/Annual Report for 2017-18 .pdf"
            }
        ],
        "Annual Report 2016-17": [
            {
                date: "31 Mar, 2017",
                title: "Annual Report for 2016-17",
                size: "1.5 MB",
                type: "PDF",
                filePath: "/Documents/AnnualResults/AnnualReports/Annual Report for 2016-17.pdf"
            }
        ],
        "Annual Report 2015-16": [
            {
                date: "31 Mar, 2016",
                title: "Annual Report for 2015-16",
                size: "574 KB",
                type: "PDF",
                filePath: "/Documents/AnnualResults/AnnualReports/Annual Report for 2015-16.pdf"
            }
        ],
        "Annual Report 2014-15": [
            {
                date: "31 Mar, 2015",
                title: "Annual Report for 2014-15",
                size: "1.6 MB",
                type: "PDF",
                filePath: "/Documents/AnnualResults/AnnualReports/Annual Report for 2014-15.pdf"
            }
        ]
    };

    // Mobile modal handlers
    const handleMobileModalOpen = () => {
        setIsMobileModalOpen(true);
    };

    const handleMobileModalClose = () => {
        setIsMobileModalOpen(false);
    };

    const handleMobileCategoryClick = (category) => {
        setSelectedCategory(category);
        setSelectedFolder(null);
        setIsMobileModalOpen(false);
    };

    const handleView = (document) => {
        if (document.filePath && document.filePath !== "#") {
            try {
                // Use relative path since files are in public folder
                const pdfUrl = document.filePath;
                console.log(`Opening PDF: ${pdfUrl}`);

                // Simple approach: always try to open in new tab first
                const newWindow = window.open(pdfUrl, '_blank');

                // If window.open fails, show simple modal with direct link
                if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
                    setPdfViewer({
                        isOpen: true,
                        url: pdfUrl,
                        title: document.title
                    });
                }
            } catch (error) {
                console.error('View error:', error);
                // Show modal with direct link as fallback
                setPdfViewer({
                    isOpen: true,
                    url: document.filePath,
                    title: document.title
                });
            }
        } else {
            alert(`View option not available for: ${document.title}`);
        }
    };

    const showPdfModal = (pdfUrl, title) => {
        setPdfViewer({
            isOpen: true,
            url: pdfUrl,
            title: title
        });
    };

    const handleDownload = (document) => {
        if (document.filePath && document.filePath !== "#") {
            try {
                // Create a link element and trigger download for real files
                const link = document.createElement('a');
                link.href = process.env.PUBLIC_URL + document.filePath;
                link.download = document.title + '.pdf';
                link.target = '_blank';

                // Append to body, click, and remove
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                console.log(`Downloading: ${document.title} from ${link.href}`);
            } catch (error) {
                console.error('Download error:', error);
                // Fallback: open in new tab if download fails
                window.open(process.env.PUBLIC_URL + document.filePath, '_blank');
            }
        } else {
            // For placeholder documents, show alert
            console.log(`Downloading: ${document.title}`);
            alert(`Download started for: ${document.title}`);
        }
    };

    const handleFolderClick = (folderName) => {
        setSelectedFolder(folderName);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setSelectedFolder(null); // Reset folder selection when category changes
    };

    const handleBackToFolders = () => {
        setSelectedFolder(null);
    };

    const closePdfViewer = () => {
        setPdfViewer({ isOpen: false, url: '', title: '' });
    };

    // Function to get file count for a folder
    const getFileCount = (folderName) => {
        if (selectedCategory === "Annual Return") {
            // For Annual Return, count total documents across all years
            let totalCount = 0;
            if (documents["2022-23"]) totalCount += documents["2022-23"].length;
            if (documents["2021-22"]) totalCount += documents["2021-22"].length;
            if (documents["2020-21"]) totalCount += documents["2020-21"].length;
            if (documents["2019-20"]) totalCount += documents["2019-20"].length;
            if (documents["2018-19"]) totalCount += documents["2018-19"].length;
            return totalCount;
        } else if (selectedCategory === "Quarterly Reports") {
            // For Quarterly Reports, count documents in specific child folders
            if (folderName === "Shareholding Pattern") {
                let totalCount = 0;
                if (documents["2018"]) totalCount += documents["2018"].length;
                if (documents["2017"]) totalCount += documents["2017"].length;
                if (documents["2016"]) totalCount += documents["2016"].length;
                if (documents["2015"]) totalCount += documents["2015"].length;
                return totalCount;
            } else if (folderName === "Financial Results") {
                let totalCount = 0;
                // Count all the year keys that are actually displayed in Financial Results
                if (documents["2021-22"]) totalCount += documents["2021-22"].length;
                if (documents["2020-21"]) totalCount += documents["2020-21"].length;
                if (documents["2019-20"]) totalCount += documents["2019-20"].length;
                if (documents["2018-19"]) totalCount += documents["2018-19"].length;
                if (documents["2017-18"]) totalCount += documents["2017-18"].length;
                if (documents["2016-17"]) totalCount += documents["2016-17"].length;
                if (documents["2015-16"]) totalCount += documents["2015-16"].length;
                return totalCount;
            }
        } else if (selectedCategory === "Announcements") {
            // For Announcements, count documents in specific year folders
            if (documents[folderName]) {
                return documents[folderName].length;
            }
        } else if (selectedCategory === "Annual Results") {
            // For Annual Results, count documents in specific child folders
            if (folderName === "Audited Financial Results") {
                let totalCount = 0;
                if (documents["Audited Financial Results 2017-18"]) totalCount += documents["Audited Financial Results 2017-18"].length;
                if (documents["Audited Financial Results 2016-17"]) totalCount += documents["Audited Financial Results 2016-17"].length;
                if (documents["Audited Financial Results 2015-16"]) totalCount += documents["Audited Financial Results 2015-16"].length;
                if (documents["Audited Financial Results 2014-15"]) totalCount += documents["Audited Financial Results 2014-15"].length;
                return totalCount;
            } else if (folderName === "Annual Reports") {
                let totalCount = 0;
                if (documents["Annual Report 2023-24"]) totalCount += documents["Annual Report 2023-24"].length;
                if (documents["Annual Report 2022-23"]) totalCount += documents["Annual Report 2022-23"].length;
                if (documents["Annual Report 2021-22"]) totalCount += documents["Annual Report 2021-22"].length;
                if (documents["Annual Report 2020-21"]) totalCount += documents["Annual Report 2020-21"].length;
                if (documents["Annual Report 2019-20"]) totalCount += documents["Annual Report 2019-20"].length;
                if (documents["Annual Report 2018-19"]) totalCount += documents["Annual Report 2018-19"].length;
                if (documents["Annual Report 2017-18"]) totalCount += documents["Annual Report 2017-18"].length;
                if (documents["Annual Report 2016-17"]) totalCount += documents["Annual Report 2016-17"].length;
                if (documents["Annual Report 2015-16"]) totalCount += documents["Annual Report 2015-16"].length;
                if (documents["Annual Report 2014-15"]) totalCount += documents["Annual Report 2014-15"].length;
                return totalCount;
            }
        } else if (selectedCategory === "Documents and Others") {
            // For Documents and Others, count documents in specific folders
            if (folderName === "Policies") {
                if (documents["Policies"]) {
                    return documents["Policies"].length;
                }
            }
        }

        // Default fallback
        return documents[folderName] ? documents[folderName].length : 0;
    };

    return (
        <div className="FinancialDocumentsContainer paddingTop300px">
            {/* Mobile Floating Folder Button */}
            {isMobile && (
                <button 
                    className="mobile-folder-btn"
                    onClick={handleMobileModalOpen}
                    title="Open Categories"
                >
                    <FaBars />
                    <span>Categories</span>
                </button>
            )}

            {/* Mobile Categories Modal */}
            <Modal
                title="Select Category"
                open={isMobileModalOpen}
                onCancel={handleMobileModalClose}
                footer={null}
                width="90%"
                className="mobile-categories-modal"
            >
                <div className="mobile-categories-list">
                    {categories.map((category) => (
                        <div
                            key={category}
                            className="mobile-category-item"
                            onClick={() => handleMobileCategoryClick(category)}
                        >
                            <FaFolder className="folder-icon" />
                            <span>{category}</span>
                            <FaChevronRight className="arrow-icon" />
                        </div>
                    ))}
                </div>
            </Modal>

            <div className="Container ">
                <div className="financial-header">
                    <div className="logo-section">
                        <div className="logo">M</div>
                        <button className="financial-btn">Financial</button>
                    </div>
                </div>

                <div className="financial-content ">
                    {/* Mobile Category Header */}
                    {isMobile && selectedCategory && (
                        <div className="mobile-category-header">
                            <h3>📁 {selectedCategory}</h3>
                            <button 
                                className="mobile-change-category-btn"
                                onClick={handleMobileModalOpen}
                            >
                                <FaBars /> Change Category
                            </button>
                        </div>
                    )}

                    {/* Left Sidebar - Main Categories */}
                    {!isMobile && (
                        <div className="categories-sidebar">
                            <h3>Main Categories</h3>
                            <div className="category-list">
                                {categories.map((category) => (
                                    <div
                                        key={category}
                                        className={`category-item ${selectedCategory === category ? 'active' : ''}`}
                                        onClick={() => handleCategoryClick(category)}
                                    >
                                        <FaFolder className="folder-icon" />
                                        <span>{category}</span>
                                        <FaChevronRight className="arrow-icon" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Right Content - Folders or Documents */}
                    <div className="folders-content">
                        {selectedCategory && (
                            <>
                                {selectedCategory === "Annual Return" ? (
                                    // Show Documents directly for Annual Return
                                    <>
                                        <h3>Annual Return Documents</h3>
                                        <div className="documents-grid">
                                            {documents["2022-23"] && documents["2022-23"].map((doc, index) => (
                                                <div key={`2022-23-${index}`} className="document-card">
                                                    <div className="document-header">
                                                        <FaFilePdf className="pdf-icon" />
                                                        <div className="document-actions">
                                                            <button
                                                                className="view-btn"
                                                                onClick={() => handleView(doc)}
                                                                title="View PDF"
                                                            >
                                                                <FaEye />
                                                            </button>
                                                            <button
                                                                className="download-btn"
                                                                onClick={() => handleDownload(doc)}
                                                                title="Download PDF"
                                                            >
                                                                <FaDownload />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="document-info">
                                                        <h4>{doc.title}</h4>
                                                        <p className="document-date">{doc.date}</p>
                                                        <p className="document-size">{doc.size}</p>
                                                        <p className="document-type">{doc.type}</p>
                                                    </div>
                                                </div>
                                            ))}
                                            {documents["2021-22"] && documents["2021-22"].map((doc, index) => (
                                                <div key={`2021-22-${index}`} className="document-card">
                                                    <div className="document-header">
                                                        <FaFilePdf className="pdf-icon" />
                                                        <div className="document-actions">
                                                            <button
                                                                className="view-btn"
                                                                onClick={() => handleView(doc)}
                                                                title="View PDF"
                                                            >
                                                                <FaEye />
                                                            </button>
                                                            <button
                                                                className="download-btn"
                                                                onClick={() => handleDownload(doc)}
                                                                title="Download PDF"
                                                            >
                                                                <FaDownload />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="document-info">
                                                        <h4>{doc.title}</h4>
                                                        <p className="document-date">{doc.date}</p>
                                                        <p className="document-size">{doc.size}</p>
                                                        <p className="document-type">{doc.type}</p>
                                                    </div>
                                                </div>
                                            ))}
                                            {documents["2020-21"] && documents["2020-21"].map((doc, index) => (
                                                <div key={`2020-21-${index}`} className="document-card">
                                                    <div className="document-header">
                                                        <FaFilePdf className="pdf-icon" />
                                                        <div className="document-actions">
                                                            <button
                                                                className="view-btn"
                                                                onClick={() => handleView(doc)}
                                                                title="View PDF"
                                                            >
                                                                <FaEye />
                                                            </button>
                                                            <button
                                                                className="download-btn"
                                                                onClick={() => handleDownload(doc)}
                                                                title="Download PDF"
                                                            >
                                                                <FaDownload />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="document-info">
                                                        <h4>{doc.title}</h4>
                                                        <p className="document-date">{doc.date}</p>
                                                        <p className="document-size">{doc.size}</p>
                                                        <p className="document-type">{doc.type}</p>
                                                    </div>
                                                </div>
                                            ))}
                                            {documents["2019-20"] && documents["2019-20"].map((doc, index) => (
                                                <div key={`2019-20-${index}`} className="document-card">
                                                    <div className="document-header">
                                                        <FaFilePdf className="pdf-icon" />
                                                        <div className="document-actions">
                                                            <button
                                                                className="view-btn"
                                                                onClick={() => handleView(doc)}
                                                                title="View PDF"
                                                            >
                                                                <FaEye />
                                                            </button>
                                                            <button
                                                                className="download-btn"
                                                                onClick={() => handleDownload(doc)}
                                                                title="Download PDF"
                                                            >
                                                                <FaDownload />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="document-info">
                                                        <h4>{doc.title}</h4>
                                                        <p className="document-date">{doc.date}</p>
                                                        <p className="document-size">{doc.size}</p>
                                                        <p className="document-type">{doc.type}</p>
                                                    </div>
                                                </div>
                                            ))}
                                            {documents["2018-19"] && documents["2018-19"].map((doc, index) => (
                                                <div key={`2018-19-${index}`} className="document-card">
                                                    <div className="document-header">
                                                        <FaFilePdf className="pdf-icon" />
                                                        <div className="document-actions">
                                                            <button
                                                                className="view-btn"
                                                                onClick={() => handleView(doc)}
                                                                title="View PDF"
                                                            >
                                                                <FaEye />
                                                            </button>
                                                            <button
                                                                className="download-btn"
                                                                onClick={() => handleDownload(doc)}
                                                                title="Download PDF"
                                                            >
                                                                <FaDownload />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="document-info">
                                                        <h4>{doc.title}</h4>
                                                        <p className="document-date">{doc.date}</p>
                                                        <p className="document-size">{doc.size}</p>
                                                        <p className="document-type">{doc.type}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                ) : selectedCategory === "Quarterly Reports" && !selectedFolder ? (
                                    // Show Child Folders for Quarterly Reports
                                    <>
                                        <h3>Quarterly Reports - Select Category</h3>
                                        <div className="folders-grid">
                                            <div
                                                className="folder-card"
                                                onClick={() => handleFolderClick("Shareholding Pattern")}
                                            >
                                                <FaFolder className="folder-icon-large" />
                                                <h4>Shareholding Pattern</h4>
                                                <p className="document-description">Click to view shareholding documents</p>
                                                <span className="file-count">{getFileCount("Shareholding Pattern")} files</span>
                                            </div>
                                            <div
                                                className="folder-card"
                                                onClick={() => handleFolderClick("Financial Results")}
                                            >
                                                <FaFolder className="folder-icon-large" />
                                                <h4>Financial Results</h4>
                                                <p className="document-description">Click to view financial results</p>
                                                <span className="file-count">{getFileCount("Financial Results")} files</span>
                                            </div>
                                        </div>
                                    </>
                                ) : selectedCategory === "Quarterly Reports" && selectedFolder ? (
                                    // Show Documents for Quarterly Reports child folders
                                    <>
                                        <div className="documents-header">
                                            <button className="back-btn" onClick={handleBackToFolders}>
                                                <FaArrowLeft /> Back to Quarterly Reports
                                            </button>
                                            <h3>Documents in {selectedFolder}</h3>
                                        </div>

                                        {selectedFolder === "Shareholding Pattern" ? (
                                            <div className="documents-grid">
                                                {documents["2018"] && documents["2018"].map((doc, index) => (
                                                    <div key={`2018-${index}`} className="document-card">
                                                        <div className="document-header">
                                                            <FaFilePdf className="pdf-icon" />
                                                            <div className="document-actions">
                                                                <button
                                                                    className="view-btn"
                                                                    onClick={() => handleView(doc)}
                                                                    title="View PDF"
                                                                >
                                                                    <FaEye />
                                                                </button>
                                                                <button
                                                                    className="download-btn"
                                                                    onClick={() => handleDownload(doc)}
                                                                    title="Download PDF"
                                                                >
                                                                    <FaDownload />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="document-info">
                                                            <h4>{doc.title}</h4>
                                                            <p className="document-date">{doc.date}</p>
                                                            <p className="document-size">{doc.size}</p>
                                                            <p className="document-type">{doc.type}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                                {documents["2017"] && documents["2017"].map((doc, index) => (
                                                    <div key={`2017-${index}`} className="document-card">
                                                        <div className="document-header">
                                                            <FaFilePdf className="pdf-icon" />
                                                            <div className="document-actions">
                                                                <button
                                                                    className="view-btn"
                                                                    onClick={() => handleView(doc)}
                                                                    title="View PDF"
                                                                >
                                                                    <FaEye />
                                                                </button>
                                                                <button
                                                                    className="download-btn"
                                                                    onClick={() => handleDownload(doc)}
                                                                    title="Download PDF"
                                                                >
                                                                    <FaDownload />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="document-info">
                                                            <h4>{doc.title}</h4>
                                                            <p className="document-date">{doc.date}</p>
                                                            <p className="document-size">{doc.size}</p>
                                                            <p className="document-type">{doc.type}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                                {documents["2016"] && documents["2016"].map((doc, index) => (
                                                    <div key={`2016-${index}`} className="document-card">
                                                        <div className="document-header">
                                                            <FaFilePdf className="pdf-icon" />
                                                            <div className="document-actions">
                                                                <button
                                                                    className="view-btn"
                                                                    onClick={() => handleView(doc)}
                                                                    title="View PDF"
                                                                >
                                                                    <FaEye />
                                                                </button>
                                                                <button
                                                                    className="download-btn"
                                                                    onClick={() => handleDownload(doc)}
                                                                    title="Download PDF"
                                                                >
                                                                    <FaDownload />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="document-info">
                                                            <h4>{doc.title}</h4>
                                                            <p className="document-date">{doc.date}</p>
                                                            <p className="document-size">{doc.size}</p>
                                                            <p className="document-type">{doc.type}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                                {documents["2015"] && documents["2015"].map((doc, index) => (
                                                    <div key={`2015-${index}`} className="document-card">
                                                        <div className="document-header">
                                                            <FaFilePdf className="pdf-icon" />
                                                            <div className="document-actions">
                                                                <button
                                                                    className="view-btn"
                                                                    onClick={() => handleView(doc)}
                                                                    title="View PDF"
                                                                >
                                                                    <FaEye />
                                                                </button>
                                                                <button
                                                                    className="download-btn"
                                                                    onClick={() => handleDownload(doc)}
                                                                    title="Download PDF"
                                                                >
                                                                    <FaDownload />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="document-info">
                                                            <h4>{doc.title}</h4>
                                                            <p className="document-date">{doc.date}</p>
                                                            <p className="document-size">{doc.size}</p>
                                                            <p className="document-type">{doc.type}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : selectedFolder === "Financial Results" ? (
                                            <div className="documents-grid">
                                                {documents["2021-22"] && documents["2021-22"].map((doc, index) => (
                                                    <div key={`2021-22-${index}`} className="document-card">
                                                        <div className="document-header">
                                                            <FaFilePdf className="pdf-icon" />
                                                            <div className="document-actions">
                                                                <button
                                                                    className="view-btn"
                                                                    onClick={() => handleView(doc)}
                                                                    title="View PDF"
                                                                >
                                                                    <FaEye />
                                                                </button>
                                                                <button
                                                                    className="download-btn"
                                                                    onClick={() => handleDownload(doc)}
                                                                    title="Download PDF"
                                                                >
                                                                    <FaDownload />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="document-info">
                                                            <h4>{doc.title}</h4>
                                                            <p className="document-date">{doc.date}</p>
                                                            <p className="document-size">{doc.size}</p>
                                                            <p className="document-type">{doc.type}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                                {documents["2020-21"] && documents["2020-21"].map((doc, index) => (
                                                    <div key={`2020-21-${index}`} className="document-card">
                                                        <div className="document-header">
                                                            <FaFilePdf className="pdf-icon" />
                                                            <div className="document-actions">
                                                                <button
                                                                    className="view-btn"
                                                                    onClick={() => handleView(doc)}
                                                                    title="View PDF"
                                                                >
                                                                    <FaEye />
                                                                </button>
                                                                <button
                                                                    className="download-btn"
                                                                    onClick={() => handleDownload(doc)}
                                                                    title="Download PDF"
                                                                >
                                                                    <FaDownload />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="document-info">
                                                            <h4>{doc.title}</h4>
                                                            <p className="document-date">{doc.date}</p>
                                                            <p className="document-size">{doc.size}</p>
                                                            <p className="document-type">{doc.type}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                                {documents["2019-20"] && documents["2019-20"].map((doc, index) => (
                                                    <div key={`2019-20-${index}`} className="document-card">
                                                        <div className="document-header">
                                                            <FaFilePdf className="pdf-icon" />
                                                            <div className="document-actions">
                                                                <button
                                                                    className="view-btn"
                                                                    onClick={() => handleView(doc)}
                                                                    title="View PDF"
                                                                >
                                                                    <FaEye />
                                                                </button>
                                                                <button
                                                                    className="download-btn"
                                                                    onClick={() => handleDownload(doc)}
                                                                    title="Download PDF"
                                                                >
                                                                    <FaDownload />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="document-info">
                                                            <h4>{doc.title}</h4>
                                                            <p className="document-date">{doc.date}</p>
                                                            <p className="document-size">{doc.size}</p>
                                                            <p className="document-type">{doc.type}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                                {documents["2018-19"] && documents["2018-19"].map((doc, index) => (
                                                    <div key={`2018-19-${index}`} className="document-card">
                                                        <div className="document-header">
                                                            <FaFilePdf className="pdf-icon" />
                                                            <div className="document-actions">
                                                                <button
                                                                    className="view-btn"
                                                                    onClick={() => handleView(doc)}
                                                                    title="View PDF"
                                                                >
                                                                    <FaEye />
                                                                </button>
                                                                <button
                                                                    className="download-btn"
                                                                    onClick={() => handleDownload(doc)}
                                                                    title="Download PDF"
                                                                >
                                                                    <FaDownload />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="document-info">
                                                            <h4>{doc.title}</h4>
                                                            <p className="document-date">{doc.date}</p>
                                                            <p className="document-size">{doc.size}</p>
                                                            <p className="document-type">{doc.type}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                                {documents["2017-18"] && documents["2017-18"].map((doc, index) => (
                                                    <div key={`2017-18-${index}`} className="document-card">
                                                        <div className="document-header">
                                                            <FaFilePdf className="pdf-icon" />
                                                            <div className="document-actions">
                                                                <button
                                                                    className="view-btn"
                                                                    onClick={() => handleView(doc)}
                                                                    title="View PDF"
                                                                >
                                                                    <FaEye />
                                                                </button>
                                                                <button
                                                                    className="download-btn"
                                                                    onClick={() => handleDownload(doc)}
                                                                    title="Download PDF"
                                                                >
                                                                    <FaDownload />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="document-info">
                                                            <h4>{doc.title}</h4>
                                                            <p className="document-date">{doc.date}</p>
                                                            <p className="document-size">{doc.size}</p>
                                                            <p className="document-type">{doc.type}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                                {documents["2016-17"] && documents["2016-17"].map((doc, index) => (
                                                    <div key={`2016-17-${index}`} className="document-card">
                                                        <div className="document-header">
                                                            <FaFilePdf className="pdf-icon" />
                                                            <div className="document-actions">
                                                                <button
                                                                    className="view-btn"
                                                                    onClick={() => handleView(doc)}
                                                                    title="View PDF"
                                                                >
                                                                    <FaEye />
                                                                </button>
                                                                <button
                                                                    className="download-btn"
                                                                    onClick={() => handleDownload(doc)}
                                                                    title="Download PDF"
                                                                >
                                                                    <FaDownload />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="document-info">
                                                            <h4>{doc.title}</h4>
                                                            <p className="document-date">{doc.date}</p>
                                                            <p className="document-size">{doc.size}</p>
                                                            <p className="document-type">{doc.type}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                                {documents["2015-16"] && documents["2015-16"].map((doc, index) => (
                                                    <div key={`2015-16-${index}`} className="document-card">
                                                        <div className="document-header">
                                                            <FaFilePdf className="pdf-icon" />
                                                            <div className="document-actions">
                                                                <button
                                                                    className="view-btn"
                                                                    onClick={() => handleView(doc)}
                                                                    title="View PDF"
                                                                >
                                                                    <FaEye />
                                                                </button>
                                                                <button
                                                                    className="download-btn"
                                                                    onClick={() => handleDownload(doc)}
                                                                    title="Download PDF"
                                                                >
                                                                    <FaDownload />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="document-info">
                                                            <h4>{doc.title}</h4>
                                                            <p className="document-date">{doc.date}</p>
                                                            <p className="document-size">{doc.size}</p>
                                                            <p className="document-type">{doc.type}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : null}
                                    </>
                                ) : selectedCategory === "Annual Results" && !selectedFolder ? (
                                    // Show Child Folders for Annual Results
                                    <>
                                        <h3>Annual Results - Select Category</h3>
                                        <div className="folders-grid">
                                            <div
                                                className="folder-card"
                                                onClick={() => handleFolderClick("Audited Financial Results")}
                                            >
                                                <FaFolder className="folder-icon-large" />
                                                <h4>Audited Financial Results</h4>
                                                <p className="document-description">Click to view audited financial results</p>
                                                <span className="file-count">3 files</span>
                                            </div>
                                            <div
                                                className="folder-card"
                                                onClick={() => handleFolderClick("Annual Reports")}
                                            >
                                                <FaFolder className="folder-icon-large" />
                                                <h4>Annual Reports</h4>
                                                <p className="document-description">Click to view annual reports</p>
                                                <span className="file-count">2 files</span>
                                            </div>
                                        </div>
                                    </>
                                ) : selectedCategory === "Annual Results" && selectedFolder ? (
                                    // Show Documents for Annual Results child folders
                                    <>
                                        <div className="documents-header">
                                            <button className="back-btn" onClick={handleBackToFolders}>
                                                <FaArrowLeft /> Back to Annual Results
                                            </button>
                                            <h3>Documents in {selectedFolder}</h3>
                                        </div>

                                        {selectedFolder === "Audited Financial Results" ? (
                                            <div className="documents-grid">
                                                {documents["Audited Financial Results 2017-18"] && documents["Audited Financial Results 2017-18"].map((doc, index) => (
                                                    <div key={`Audited Financial Results 2017-18-${index}`} className="document-card">
                                                        <div className="document-header">
                                                            <FaFilePdf className="pdf-icon" />
                                                            <div className="document-actions">
                                                                <button
                                                                    className="view-btn"
                                                                    onClick={() => handleView(doc)}
                                                                    title="View PDF"
                                                                >
                                                                    <FaEye />
                                                                </button>
                                                                <button
                                                                    className="download-btn"
                                                                    onClick={() => handleDownload(doc)}
                                                                    title="Download PDF"
                                                                >
                                                                    <FaDownload />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="document-info">
                                                            <h4>{doc.title}</h4>
                                                            <p className="document-date">{doc.date}</p>
                                                            <p className="document-size">{doc.size}</p>
                                                            <p className="document-type">{doc.type}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                                {documents["Audited Financial Results 2016-17"] && documents["Audited Financial Results 2016-17"].map((doc, index) => (
                                                    <div key={`Audited Financial Results 2016-17-${index}`} className="document-card">
                                                        <div className="document-header">
                                                            <FaFilePdf className="pdf-icon" />
                                                            <div className="document-actions">
                                                                <button
                                                                    className="view-btn"
                                                                    onClick={() => handleView(doc)}
                                                                    title="View PDF"
                                                                >
                                                                    <FaEye />
                                                                </button>
                                                                <button
                                                                    className="download-btn"
                                                                    onClick={() => handleDownload(doc)}
                                                                    title="Download PDF"
                                                                >
                                                                    <FaDownload />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="document-info">
                                                            <h4>{doc.title}</h4>
                                                            <p className="document-date">{doc.date}</p>
                                                            <p className="document-size">{doc.size}</p>
                                                            <p className="document-type">{doc.type}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                                {documents["Audited Financial Results 2015-16"] && documents["Audited Financial Results 2015-16"].map((doc, index) => (
                                                    <div key={`Audited Financial Results 2015-16-${index}`} className="document-card">
                                                        <div className="document-header">
                                                            <FaFilePdf className="pdf-icon" />
                                                            <div className="document-actions">
                                                                <button
                                                                    className="view-btn"
                                                                    onClick={() => handleView(doc)}
                                                                    title="View PDF"
                                                                >
                                                                    <FaEye />
                                                                </button>
                                                                <button
                                                                    className="download-btn"
                                                                    onClick={() => handleDownload(doc)}
                                                                    title="Download PDF"
                                                                >
                                                                    <FaDownload />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="document-info">
                                                            <h4>{doc.title}</h4>
                                                            <p className="document-date">{doc.date}</p>
                                                            <p className="document-size">{doc.size}</p>
                                                            <p className="document-type">{doc.type}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                                {documents["Audited Financial Results 2014-15"] && documents["Audited Financial Results 2014-15"].map((doc, index) => (
                                                    <div key={`Audited Financial Results 2014-15-${index}`} className="document-card">
                                                        <div className="document-header">
                                                            <FaFilePdf className="pdf-icon" />
                                                            <div className="document-actions">
                                                                <button
                                                                    className="view-btn"
                                                                    onClick={() => handleView(doc)}
                                                                    title="View PDF"
                                                                >
                                                                    <FaEye />
                                                                </button>
                                                                <button
                                                                    className="download-btn"
                                                                    onClick={() => handleDownload(doc)}
                                                                    title="Download PDF"
                                                                >
                                                                    <FaDownload />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="document-info">
                                                            <h4>{doc.title}</h4>
                                                            <p className="document-date">{doc.date}</p>
                                                            <p className="document-size">{doc.size}</p>
                                                            <p className="document-type">{doc.type}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : selectedFolder === "Annual Reports" ? (
                                            <div className="documents-grid">
                                                {documents["Annual Report 2023-24"] && documents["Annual Report 2023-24"].map((doc, index) => (
                                                    <div key={`Annual Report 2023-24-${index}`} className="document-card">
                                                        <div className="document-header">
                                                            <FaFilePdf className="pdf-icon" />
                                                            <div className="document-actions">
                                                                <button
                                                                    className="view-btn"
                                                                    onClick={() => handleView(doc)}
                                                                    title="View PDF"
                                                                >
                                                                    <FaEye />
                                                                </button>
                                                                <button
                                                                    className="download-btn"
                                                                    onClick={() => handleDownload(doc)}
                                                                    title="Download PDF"
                                                                >
                                                                    <FaDownload />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="document-info">
                                                            <h4>{doc.title}</h4>
                                                            <p className="document-date">{doc.date}</p>
                                                            <p className="document-size">{doc.size}</p>
                                                            <p className="document-type">{doc.type}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                                {documents["Annual Report 2022-23"] && documents["Annual Report 2022-23"].map((doc, index) => (
                                                    <div key={`Annual Report 2022-23-${index}`} className="document-card">
                                                        <div className="document-header">
                                                            <FaFilePdf className="pdf-icon" />
                                                            <div className="document-actions">
                                                                <button
                                                                    className="view-btn"
                                                                    onClick={() => handleView(doc)}
                                                                    title="View PDF"
                                                                >
                                                                    <FaEye />
                                                                </button>
                                                                <button
                                                                    className="download-btn"
                                                                    onClick={() => handleDownload(doc)}
                                                                    title="Download PDF"
                                                                >
                                                                    <FaDownload />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="document-info">
                                                            <h4>{doc.title}</h4>
                                                            <p className="document-date">{doc.date}</p>
                                                            <p className="document-size">{doc.size}</p>
                                                            <p className="document-type">{doc.type}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                                {documents["Annual Report 2021-22"] && documents["Annual Report 2021-22"].map((doc, index) => (
                                                    <div key={`Annual Report 2021-22-${index}`} className="document-card">
                                                        <div className="document-header">
                                                            <FaFilePdf className="pdf-icon" />
                                                            <div className="document-actions">
                                                                <button
                                                                    className="view-btn"
                                                                    onClick={() => handleView(doc)}
                                                                    title="View PDF"
                                                                >
                                                                    <FaEye />
                                                                </button>
                                                                <button
                                                                    className="download-btn"
                                                                    onClick={() => handleDownload(doc)}
                                                                    title="Download PDF"
                                                                >
                                                                    <FaDownload />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="document-info">
                                                            <h4>{doc.title}</h4>
                                                            <p className="document-date">{doc.date}</p>
                                                            <p className="document-size">{doc.size}</p>
                                                            <p className="document-type">{doc.type}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                                {documents["Annual Report 2020-21"] && documents["Annual Report 2020-21"].map((doc, index) => (
                                                    <div key={`Annual Report 2020-21-${index}`} className="document-card">
                                                        <div className="document-header">
                                                            <FaFilePdf className="pdf-icon" />
                                                            <div className="document-actions">
                                                                <button
                                                                    className="view-btn"
                                                                    onClick={() => handleView(doc)}
                                                                    title="View PDF"
                                                                >
                                                                    <FaEye />
                                                                </button>
                                                                <button
                                                                    className="download-btn"
                                                                    onClick={() => handleDownload(doc)}
                                                                    title="Download PDF"
                                                                >
                                                                    <FaDownload />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="document-info">
                                                            <h4>{doc.title}</h4>
                                                            <p className="document-date">{doc.date}</p>
                                                            <p className="document-size">{doc.size}</p>
                                                            <p className="document-type">{doc.type}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                                {documents["Annual Report 2019-20"] && documents["Annual Report 2019-20"].map((doc, index) => (
                                                    <div key={`Annual Report 2019-20-${index}`} className="document-card">
                                                        <div className="document-header">
                                                            <FaFilePdf className="pdf-icon" />
                                                            <div className="document-actions">
                                                                <button
                                                                    className="view-btn"
                                                                    onClick={() => handleView(doc)}
                                                                    title="View PDF"
                                                                >
                                                                    <FaEye />
                                                                </button>
                                                                <button
                                                                    className="download-btn"
                                                                    onClick={() => handleDownload(doc)}
                                                                    title="Download PDF"
                                                                >
                                                                    <FaDownload />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="document-info">
                                                            <h4>{doc.title}</h4>
                                                            <p className="document-date">{doc.date}</p>
                                                            <p className="document-size">{doc.size}</p>
                                                            <p className="document-type">{doc.type}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                                {documents["Annual Report 2018-19"] && documents["Annual Report 2018-19"].map((doc, index) => (
                                                    <div key={`Annual Report 2018-19-${index}`} className="document-card">
                                                        <div className="document-header">
                                                            <FaFilePdf className="pdf-icon" />
                                                            <div className="document-actions">
                                                                <button
                                                                    className="view-btn"
                                                                    onClick={() => handleView(doc)}
                                                                    title="View PDF"
                                                                >
                                                                    <FaEye />
                                                                </button>
                                                                <button
                                                                    className="download-btn"
                                                                    onClick={() => handleDownload(doc)}
                                                                    title="Download PDF"
                                                                >
                                                                    <FaDownload />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="document-info">
                                                            <h4>{doc.title}</h4>
                                                            <p className="document-date">{doc.date}</p>
                                                            <p className="document-size">{doc.size}</p>
                                                            <p className="document-type">{doc.type}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                                {documents["Annual Report 2017-18"] && documents["Annual Report 2017-18"].map((doc, index) => (
                                                    <div key={`Annual Report 2017-18-${index}`} className="document-card">
                                                        <div className="document-header">
                                                            <FaFilePdf className="pdf-icon" />
                                                            <div className="document-actions">
                                                                <button
                                                                    className="view-btn"
                                                                    onClick={() => handleView(doc)}
                                                                    title="View PDF"
                                                                >
                                                                    <FaEye />
                                                                </button>
                                                                <button
                                                                    className="download-btn"
                                                                    onClick={() => handleDownload(doc)}
                                                                    title="Download PDF"
                                                                >
                                                                    <FaDownload />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="document-info">
                                                            <h4>{doc.title}</h4>
                                                            <p className="document-date">{doc.date}</p>
                                                            <p className="document-size">{doc.size}</p>
                                                            <p className="document-type">{doc.type}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                                {documents["Annual Report 2016-17"] && documents["Annual Report 2016-17"].map((doc, index) => (
                                                    <div key={`Annual Report 2016-17-${index}`} className="document-card">
                                                        <div className="document-header">
                                                            <FaFilePdf className="pdf-icon" />
                                                            <div className="document-actions">
                                                                <button
                                                                    className="view-btn"
                                                                    onClick={() => handleView(doc)}
                                                                    title="View PDF"
                                                                >
                                                                    <FaEye />
                                                                </button>
                                                                <button
                                                                    className="download-btn"
                                                                    onClick={() => handleDownload(doc)}
                                                                    title="Download PDF"
                                                                >
                                                                    <FaDownload />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="document-info">
                                                            <h4>{doc.title}</h4>
                                                            <p className="document-date">{doc.date}</p>
                                                            <p className="document-size">{doc.size}</p>
                                                            <p className="document-type">{doc.type}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                                {documents["Annual Report 2015-16"] && documents["Annual Report 2015-16"].map((doc, index) => (
                                                    <div key={`Annual Report 2015-16-${index}`} className="document-card">
                                                        <div className="document-header">
                                                            <FaFilePdf className="pdf-icon" />
                                                            <div className="document-actions">
                                                                <button
                                                                    className="view-btn"
                                                                    onClick={() => handleView(doc)}
                                                                    title="View PDF"
                                                                >
                                                                    <FaEye />
                                                                </button>
                                                                <button
                                                                    className="download-btn"
                                                                    onClick={() => handleDownload(doc)}
                                                                    title="Download PDF"
                                                                >
                                                                    <FaDownload />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="document-info">
                                                            <h4>{doc.title}</h4>
                                                            <p className="document-date">{doc.date}</p>
                                                            <p className="document-size">{doc.size}</p>
                                                            <p className="document-type">{doc.type}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                                {documents["Annual Report 2014-15"] && documents["Annual Report 2014-15"].map((doc, index) => (
                                                    <div key={`Annual Report 2014-15-${index}`} className="document-card">
                                                        <div className="document-header">
                                                            <FaFilePdf className="pdf-icon" />
                                                            <div className="document-actions">
                                                                <button
                                                                    className="view-btn"
                                                                    onClick={() => handleView(doc)}
                                                                    title="View PDF"
                                                                >
                                                                    <FaEye />
                                                                </button>
                                                                <button
                                                                    className="download-btn"
                                                                    onClick={() => handleDownload(doc)}
                                                                    title="Download PDF"
                                                                >
                                                                    <FaDownload />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="document-info">
                                                            <h4>{doc.title}</h4>
                                                            <p className="document-date">{doc.date}</p>
                                                            <p className="document-size">{doc.size}</p>
                                                            <p className="document-type">{doc.type}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : null}
                                    </>
                                ) : selectedCategory === "Documents and Others" && !selectedFolder ? (
                                    // Show Child Folders for Documents and Others
                                    <>
                                        <h3>Documents and Others - Select Category</h3>
                                        <div className="folders-grid">
                                            <div
                                                className="folder-card"
                                                onClick={() => handleFolderClick("Policies")}
                                            >
                                                <FaFolder className="folder-icon-large" />
                                                <h4>Policies</h4>
                                                <p className="document-description">Click to view policies</p>
                                                <span className="file-count">11 files</span>
                                            </div>
                                        </div>
                                    </>
                                ) : selectedCategory === "Announcements" && selectedFolder ? (
                                    // Show Documents for Announcements year folders
                                    <>
                                        <div className="documents-header">
                                            <button className="back-btn" onClick={handleBackToFolders}>
                                                <FaArrowLeft /> Back to Announcements
                                            </button>
                                            <h3>Documents in {selectedFolder}</h3>
                                        </div>

                                        {documents[selectedFolder] ? (
                                            <div className="documents-grid">
                                                {documents[selectedFolder].map((doc, index) => (
                                                    <div key={`${selectedFolder}-${index}`} className="document-card">
                                                        <div className="document-header">
                                                            <FaFilePdf className="pdf-icon" />
                                                            <div className="document-actions">
                                                                <button
                                                                    className="view-btn"
                                                                    onClick={() => handleView(doc)}
                                                                    title="View PDF"
                                                                >
                                                                    <FaEye />
                                                                </button>
                                                                <button
                                                                    className="download-btn"
                                                                    onClick={() => handleDownload(doc)}
                                                                    title="Download PDF"
                                                                >
                                                                    <FaDownload />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="document-info">
                                                            <h4>{doc.title}</h4>
                                                            <p className="document-date">{doc.date}</p>
                                                            <p className="document-size">{doc.size}</p>
                                                            <p className="document-type">{doc.type}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="no-documents">
                                                <FaFolder className="empty-folder" />
                                                <p>No documents available in this folder</p>
                                            </div>
                                        )}
                                    </>
                                ) : selectedCategory === "Documents and Others" && selectedFolder ? (
                                    // Show Documents for Documents and Others child folders
                                    <>
                                        <div className="documents-header">
                                            <button className="back-btn" onClick={handleBackToFolders}>
                                                <FaArrowLeft /> Back to Documents and Others
                                            </button>
                                            <h3>Documents in {selectedFolder}</h3>
                                        </div>

                                        {selectedFolder === "Policies" ? (
                                            <div className="documents-grid">
                                                {documents["Policies"] && documents["Policies"].map((doc, index) => (
                                                    <div key={`Policies-${index}`} className="document-card">
                                                        <div className="document-header">
                                                            <FaFilePdf className="pdf-icon" />
                                                            <div className="document-actions">
                                                                <button
                                                                    className="view-btn"
                                                                    onClick={() => handleView(doc)}
                                                                    title="View PDF"
                                                                >
                                                                    <FaEye />
                                                                </button>
                                                                <button
                                                                    className="download-btn"
                                                                    onClick={() => handleDownload(doc)}
                                                                    title="Download PDF"
                                                                >
                                                                    <FaDownload />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="document-info">
                                                            <h4>{doc.title}</h4>
                                                            <p className="document-date">{doc.date}</p>
                                                            <p className="document-size">{doc.size}</p>
                                                            <p className="document-type">{doc.type}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : null}
                                    </>
                                ) : (
                                    // Show Folders View for other categories
                                    <>
                                        <h3>{selectedCategory} Folders</h3>

                                        {folderStructure[selectedCategory] ? (
                                            <div className="folders-grid">
                                                {folderStructure[selectedCategory].map((folderName) => (
                                                    <div
                                                        key={folderName}
                                                        className="folder-card"
                                                        onClick={() => handleFolderClick(folderName)}
                                                    >
                                                        <FaFolder className="folder-icon-large" />
                                                        <h4>{folderName}</h4>
                                                        <p className="document-description">Click to view documents</p>
                                                        <span className="file-count">{getFileCount(folderName)} files</span>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="no-folders">
                                                <FaFolder className="empty-folder" />
                                                <p>No folders available for this category</p>
                                            </div>
                                        )}
                                    </>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* PDF Viewer Modal */}
            {pdfViewer.isOpen && (
                <div className="pdf-viewer-modal">
                    <div className="pdf-viewer-content">
                        <div className="pdf-viewer-header">
                            <h3>{pdfViewer.title}</h3>
                            <button className="close-btn" onClick={closePdfViewer}>
                                <FaTimes />
                            </button>
                        </div>
                        <div className="pdf-viewer-body">
                            <iframe
                                src={pdfViewer.url}
                                title={pdfViewer.title}
                                className="pdf-iframe"
                                width="100%"
                                height="600px"
                                frameBorder="0"
                            />

                            <div className="pdf-actions">
                                <button
                                    className="open-pdf-btn"
                                    onClick={() => window.open(pdfViewer.url, '_blank')}
                                >
                                    Open in New Tab
                                </button>

                                <button
                                    className="download-pdf-btn"
                                    onClick={() => {
                                        const link = document.createElement('a');
                                        link.href = pdfViewer.url;
                                        link.download = pdfViewer.title + '.pdf';
                                        document.body.appendChild(link);
                                        link.click();
                                        document.body.removeChild(link);
                                    }}
                                >
                                    Download PDF
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FinancialDocuments;