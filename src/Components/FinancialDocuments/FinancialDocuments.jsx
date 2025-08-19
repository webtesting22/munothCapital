import React, { useState } from "react";
import "./FinancialDocuments.css";
import { FaDownload, FaFolder, FaPlus, FaFilePdf, FaChevronRight, FaArrowLeft, FaEye, FaTimes } from "react-icons/fa";

const FinancialDocuments = () => {
    const [selectedCategory, setSelectedCategory] = useState("Annual Return");
    const [selectedFolder, setSelectedFolder] = useState(null);
    const [pdfViewer, setPdfViewer] = useState({ isOpen: false, url: '', title: '' });

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
            "2023-24",
            "2022-23",
            "2021-22"
        ],
        "Documents and Others": [
            "Policies",
            "Corporate Documents",
            "Other Documents"
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
                title: "Share holding pattern for quarter ending 31st December 2016",
                size: "438 KB",
                type: "PDF",
                filePath: "/Documents/QuarterlyReports/Share holding pattern for quarter ending 31st December 2016.pdf"
            },
            {
                date: "30 Sep, 2016",
                title: "Shareholding Pattern for the Quarter ended on 30th Sep 2016",
                size: "483 KB",
                type: "PDF",
                filePath: "/Documents/QuarterlyReports/Shareholding Pattern for the Quarter ended on 30th Sep 2016.pdf"
            },
            {
                date: "30 Jun, 2016",
                title: "Shareholding Pattern for the Quarter ended on 30th June 2016",
                size: "189 KB",
                type: "PDF",
                filePath: "/Documents/QuarterlyReports/Shareholding Pattern for the Quarter ended on 30th June 2016.pdf"
            },
            {
                date: "31 Mar, 2016",
                title: "Shareholding Pattern for the Quarter ended on 31st Mar 2016",
                size: "183 KB",
                type: "PDF",
                filePath: "/Documents/QuarterlyReports/Shareholding Pattern for the Quarter ended on 31st Mar 2016.pdf"
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
        "Corporate Social Responsibility": [
            {
                date: "01 Jan, 2024",
                title: "Corporate Social Responsibility Policy",
                size: "456.2 KB",
                type: "PDF",
                filePath: "#"
            }
        ],
        "Whistle Blower": [
            {
                date: "15 Dec, 2023",
                title: "Whistle Blower Policy",
                size: "389.7 KB",
                type: "PDF",
                filePath: "#"
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
                title: "Annual Corporate Announcement 2015",
                size: "256 KB",
                type: "PDF",
                filePath: "#"
            },
            {
                date: "25 Sep, 2015",
                title: "Q2 Results Board Meeting Announcement",
                size: "234 KB",
                type: "PDF",
                filePath: "#"
            },
            {
                date: "20 Jun, 2015",
                title: "Corporate Strategy Announcement",
                size: "189 KB",
                type: "PDF",
                filePath: "#"
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
        return documents[folderName] ? documents[folderName].length : 0;
    };

    return (
        <div className="FinancialDocumentsContainer">
            <div className="Container">
                <div className="financial-header">
                    <div className="logo-section">
                        <div className="logo">M</div>
                        <button className="financial-btn">Financial</button>
                    </div>
                </div>

                <div className="financial-content">
                    {/* Left Sidebar - Main Categories */}
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
                                                <span className="file-count">16 files</span>
                                            </div>
                                            <div
                                                className="folder-card"
                                                onClick={() => handleFolderClick("Financial Results")}
                                            >
                                                <FaFolder className="folder-icon-large" />
                                                <h4>Financial Results</h4>
                                                <p className="document-description">Click to view financial results</p>
                                                <span className="file-count">4 files</span>
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
                                ) : !selectedFolder ? (
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
                                ) : (
                                    // Show Documents View for other categories
                                    <>
                                        <div className="documents-header">
                                            <button className="back-btn" onClick={handleBackToFolders}>
                                                <FaArrowLeft /> Back to Folders
                                            </button>
                                            <h3>Documents in {selectedFolder}</h3>
                                        </div>

                                        {documents[selectedFolder] ? (
                                            <div className="documents-grid">
                                                {documents[selectedFolder].map((doc, index) => (
                                                    <div key={index} className="document-card">
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