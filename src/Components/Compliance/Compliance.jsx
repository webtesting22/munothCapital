import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import { motion } from "framer-motion";
import "./Compliance.css";

const Compliance = () => {
    const [selectedCategory, setSelectedCategory] = useState("Investor Charters");
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
        "Investor Charters",
        "Investor Complaints Data",
        "Documents"
    ];

    const folderStructure = {
        "Investor Charters": [
            "2024",
            "2023",
            "2022",
            "2021"
        ],
        "Investor Complaints Data": [
            "2024",
            "2023",
            "2022",
            "2021"
        ],
        "Documents": [
            "Policies",
            "Guidelines",
            "Reports"
        ]
    };

    const documents = {
        // Investor Charters
        "2024": [
            {
                date: "01 Jan, 2024",
                title: "Investor Charter 2024",
                size: "245 KB",
                type: "PDF",
                filePath: "/Documents/Compliance/InvestorCharters/Investor Charter 2024.pdf"
            }
        ],
        "2023": [
            {
                date: "01 Jan, 2023",
                title: "Investor Charter 2023",
                size: "238 KB",
                type: "PDF",
                filePath: "/Documents/Compliance/InvestorCharters/Investor Charter 2023.pdf"
            }
        ],
        "2022": [
            {
                date: "01 Jan, 2022",
                title: "Investor Charter 2022",
                size: "241 KB",
                type: "PDF",
                filePath: "/Documents/Compliance/InvestorCharters/Investor Charter 2022.pdf"
            }
        ],
        "2021": [
            {
                date: "01 Jan, 2021",
                title: "Investor Charter 2021",
                size: "239 KB",
                type: "PDF",
                filePath: "/Documents/Compliance/InvestorCharters/Investor Charter 2021.pdf"
            }
        ],

        // Investor Complaints Data
        "Complaints 2024": [
            {
                date: "31 Mar, 2024",
                title: "Investor Complaints Data Q1 2024",
                size: "156 KB",
                type: "PDF",
                filePath: "/Documents/Compliance/ComplaintsData/Investor Complaints Data Q1 2024.pdf"
            }
        ],
        "Complaints 2023": [
            {
                date: "31 Dec, 2023",
                title: "Investor Complaints Data Q4 2023",
                size: "152 KB",
                type: "PDF",
                filePath: "/Documents/Compliance/ComplaintsData/Investor Complaints Data Q4 2023.pdf"
            },
            {
                date: "30 Sep, 2023",
                title: "Investor Complaints Data Q3 2023",
                size: "148 KB",
                type: "PDF",
                filePath: "/Documents/Compliance/ComplaintsData/Investor Complaints Data Q3 2023.pdf"
            },
            {
                date: "30 Jun, 2023",
                title: "Investor Complaints Data Q2 2023",
                size: "151 KB",
                type: "PDF",
                filePath: "/Documents/Compliance/ComplaintsData/Investor Complaints Data Q2 2023.pdf"
            },
            {
                date: "31 Mar, 2023",
                title: "Investor Complaints Data Q1 2023",
                size: "149 KB",
                type: "PDF",
                filePath: "/Documents/Compliance/ComplaintsData/Investor Complaints Data Q1 2023.pdf"
            }
        ],
        "Complaints 2022": [
            {
                date: "31 Dec, 2022",
                title: "Investor Complaints Data Q4 2022",
                size: "147 KB",
                type: "PDF",
                filePath: "/Documents/Compliance/ComplaintsData/Investor Complaints Data Q4 2022.pdf"
            },
            {
                date: "30 Sep, 2022",
                title: "Investor Complaints Data Q3 2022",
                size: "145 KB",
                type: "PDF",
                filePath: "/Documents/Compliance/ComplaintsData/Investor Complaints Data Q3 2022.pdf"
            },
            {
                date: "30 Jun, 2022",
                title: "Investor Complaints Data Q2 2022",
                size: "146 KB",
                type: "PDF",
                filePath: "/Documents/Compliance/ComplaintsData/Investor Complaints Data Q2 2022.pdf"
            },
            {
                date: "31 Mar, 2022",
                title: "Investor Complaints Data Q1 2022",
                size: "144 KB",
                type: "PDF",
                filePath: "/Documents/Compliance/ComplaintsData/Investor Complaints Data Q1 2022.pdf"
            }
        ],
        "Complaints 2021": [
            {
                date: "31 Dec, 2021",
                title: "Investor Complaints Data Q4 2021",
                size: "143 KB",
                type: "PDF",
                filePath: "/Documents/Compliance/ComplaintsData/Investor Complaints Data Q4 2021.pdf"
            },
            {
                date: "30 Sep, 2021",
                title: "Investor Complaints Data Q3 2021",
                size: "141 KB",
                type: "PDF",
                filePath: "/Documents/Compliance/ComplaintsData/Investor Complaints Data Q3 2021.pdf"
            },
            {
                date: "30 Jun, 2021",
                title: "Investor Complaints Data Q2 2021",
                size: "142 KB",
                type: "PDF",
                filePath: "/Documents/Compliance/ComplaintsData/Investor Complaints Data Q2 2021.pdf"
            },
            {
                date: "31 Mar, 2021",
                title: "Investor Complaints Data Q1 2021",
                size: "140 KB",
                type: "PDF",
                filePath: "/Documents/Compliance/ComplaintsData/Investor Complaints Data Q1 2021.pdf"
            }
        ],

        // Documents
        "Policies": [
            {
                date: "01 Jan, 2024",
                title: "Compliance Policy",
                size: "325 KB",
                type: "PDF",
                filePath: "/Documents/Compliance/Documents/Compliance Policy.pdf"
            },
            {
                date: "01 Jan, 2024",
                title: "Regulatory Compliance Framework",
                size: "298 KB",
                type: "PDF",
                filePath: "/Documents/Compliance/Documents/Regulatory Compliance Framework.pdf"
            },
            {
                date: "01 Jan, 2024",
                title: "Risk Management Policy",
                size: "312 KB",
                type: "PDF",
                filePath: "/Documents/Compliance/Documents/Risk Management Policy.pdf"
            }
        ],
        "Guidelines": [
            {
                date: "01 Jan, 2024",
                title: "Compliance Guidelines",
                size: "287 KB",
                type: "PDF",
                filePath: "/Documents/Compliance/Documents/Compliance Guidelines.pdf"
            },
            {
                date: "01 Jan, 2024",
                title: "Regulatory Reporting Guidelines",
                size: "301 KB",
                type: "PDF",
                filePath: "/Documents/Compliance/Documents/Regulatory Reporting Guidelines.pdf"
            }
        ],
        "Reports": [
            {
                date: "31 Mar, 2024",
                title: "Compliance Report Q1 2024",
                size: "445 KB",
                type: "PDF",
                filePath: "/Documents/Compliance/Documents/Compliance Report Q1 2024.pdf"
            },
            {
                date: "31 Dec, 2023",
                title: "Annual Compliance Report 2023",
                size: "1.2 MB",
                type: "PDF",
                filePath: "/Documents/Compliance/Documents/Annual Compliance Report 2023.pdf"
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
                const pdfUrl = document.filePath;
                console.log(`Opening PDF: ${pdfUrl}`);

                const newWindow = window.open(pdfUrl, '_blank');

                if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
                    setPdfViewer({
                        isOpen: true,
                        url: pdfUrl,
                        title: document.title
                    });
                }
            } catch (error) {
                console.error('View error:', error);
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
                const link = document.createElement('a');
                link.href = process.env.PUBLIC_URL + document.filePath;
                link.download = document.title + '.pdf';
                link.target = '_blank';

                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                console.log(`Downloading: ${document.title} from ${link.href}`);
            } catch (error) {
                console.error('Download error:', error);
                window.open(process.env.PUBLIC_URL + document.filePath, '_blank');
            }
        } else {
            console.log(`Downloading: ${document.title}`);
            alert(`Download started for: ${document.title}`);
        }
    };

    const handleFolderClick = (folderName) => {
        setSelectedFolder(folderName);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setSelectedFolder(null);
    };

    const handleBackToFolders = () => {
        setSelectedFolder(null);
    };

    const closePdfViewer = () => {
        setPdfViewer({ isOpen: false, url: '', title: '' });
    };

    // Function to get file count for a folder
    const getFileCount = (folderName) => {
        if (selectedCategory === "Investor Charters") {
            if (documents[folderName]) {
                return documents[folderName].length;
            }
        } else if (selectedCategory === "Investor Complaints Data") {
            if (documents[`Complaints ${folderName}`]) {
                return documents[`Complaints ${folderName}`].length;
            }
        } else if (selectedCategory === "Documents") {
            if (documents[folderName]) {
                return documents[folderName].length;
            }
        }
        return 0;
    };

    return (
        <div className="ComplianceContainer paddingTop300px">
            {/* Mobile Floating Folder Button */}
            {isMobile && (
                <motion.button
                    className="mobile-menu-btn"
                    onClick={handleMobileModalOpen}
                    initial={{ opacity: 0, scale: 0, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span>Menu</span>
                </motion.button>
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
                            <span>{category}</span>
                            <div className="arrow">→</div>
                        </div>
                    ))}
                </div>
            </Modal>

            <div className="compliance-wrapper">
                <motion.div
                    className="compliance-header"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="header-content">
                        <div className="title-section">
                            <h2>Compliance</h2>
                            <p>Regulatory documents and investor information</p>
                        </div>
                    </div>
                </motion.div>

                <div className="compliance-content">
                    {/* Mobile Category Header */}
                    {isMobile && selectedCategory && (
                        <motion.div
                            className="mobile-category-header"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <h3>{selectedCategory}</h3>
                            <button
                                className="mobile-change-category-btn"
                                onClick={handleMobileModalOpen}
                            >
                                Change Category
                            </button>
                        </motion.div>
                    )}

                    {/* Left Sidebar - Main Categories */}
                    {!isMobile && (
                        <motion.div
                            className="categories-sidebar"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <h3>Categories</h3>
                            <div className="category-list">
                                {categories.map((category, index) => (
                                    <motion.div
                                        key={category}
                                        className={`category-item ${selectedCategory === category ? 'active' : ''}`}
                                        onClick={() => handleCategoryClick(category)}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.3 + (index * 0.1),
                                            ease: "easeOut"
                                        }}
                                        whileHover={{ x: 5, scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span>{category}</span>
                                        <div className="arrow">→</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Right Content - Folders or Documents */}
                    <div className="content-section">
                        {selectedCategory && (
                            <>
                                {selectedCategory === "Investor Charters" ? (
                                    // Show Documents directly for Investor Charters
                                    <>
                                        <h3 style={{ marginBottom: "20px" }}>Investor Charter Documents</h3>
                                        <motion.div
                                            className="documents-grid"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                        >
                                            {documents["2024"] && documents["2024"].map((doc, index) => (
                                                <div key={`2024-${index}`} className="document-card">
                                                    <div className="document-content">
                                                        <div className="document-info">
                                                            <h4>{doc.title}</h4>
                                                            <div className="document-meta">
                                                                <span className="date">{doc.date}</span>
                                                                <span className="size">{doc.size}</span>
                                                            </div>
                                                        </div>
                                                        <div className="document-actions">
                                                            <button
                                                                className="action-btn view-btn"
                                                                onClick={() => handleView(doc)}
                                                                title="View PDF"
                                                            >
                                                                View
                                                            </button>
                                                            <button
                                                                className="action-btn download-btn"
                                                                onClick={() => handleDownload(doc)}
                                                                title="Download PDF"
                                                            >
                                                                Download
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            {documents["2023"] && documents["2023"].map((doc, index) => (
                                                <div key={`2023-${index}`} className="document-card">
                                                    <div className="document-content">
                                                        <div className="document-info">
                                                            <h4>{doc.title}</h4>
                                                            <div className="document-meta">
                                                                <span className="date">{doc.date}</span>
                                                                <span className="size">{doc.size}</span>
                                                            </div>
                                                        </div>
                                                        <div className="document-actions">
                                                            <button
                                                                className="action-btn view-btn"
                                                                onClick={() => handleView(doc)}
                                                                title="View PDF"
                                                            >
                                                                View
                                                            </button>
                                                            <button
                                                                className="action-btn download-btn"
                                                                onClick={() => handleDownload(doc)}
                                                                title="Download PDF"
                                                            >
                                                                Download
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            {documents["2022"] && documents["2022"].map((doc, index) => (
                                                <div key={`2022-${index}`} className="document-card">
                                                    <div className="document-content">
                                                        <div className="document-info">
                                                            <h4>{doc.title}</h4>
                                                            <div className="document-meta">
                                                                <span className="date">{doc.date}</span>
                                                                <span className="size">{doc.size}</span>
                                                            </div>
                                                        </div>
                                                        <div className="document-actions">
                                                            <button
                                                                className="action-btn view-btn"
                                                                onClick={() => handleView(doc)}
                                                                title="View PDF"
                                                            >
                                                                View
                                                            </button>
                                                            <button
                                                                className="action-btn download-btn"
                                                                onClick={() => handleDownload(doc)}
                                                                title="Download PDF"
                                                            >
                                                                Download
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            {documents["2021"] && documents["2021"].map((doc, index) => (
                                                <div key={`2021-${index}`} className="document-card">
                                                    <div className="document-content">
                                                        <div className="document-info">
                                                            <h4>{doc.title}</h4>
                                                            <div className="document-meta">
                                                                <span className="date">{doc.date}</span>
                                                                <span className="size">{doc.size}</span>
                                                            </div>
                                                        </div>
                                                        <div className="document-actions">
                                                            <button
                                                                className="action-btn view-btn"
                                                                onClick={() => handleView(doc)}
                                                                title="View PDF"
                                                            >
                                                                View
                                                            </button>
                                                            <button
                                                                className="action-btn download-btn"
                                                                onClick={() => handleDownload(doc)}
                                                                title="Download PDF"
                                                            >
                                                                Download
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </motion.div>
                                    </>
                                ) : selectedCategory === "Investor Complaints Data" ? (
                                    // Show Documents directly for Investor Complaints Data
                                    <>
                                        <h3 style={{ marginBottom: "20px" }}>Investor Complaints Data Documents</h3>
                                        <motion.div
                                            className="documents-grid"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                        >
                                            {documents["Complaints 2024"] && documents["Complaints 2024"].map((doc, index) => (
                                                <div key={`complaints-2024-${index}`} className="document-card">
                                                    <div className="document-content">
                                                        <div className="document-info">
                                                            <h4>{doc.title}</h4>
                                                            <div className="document-meta">
                                                                <span className="date">{doc.date}</span>
                                                                <span className="size">{doc.size}</span>
                                                            </div>
                                                        </div>
                                                        <div className="document-actions">
                                                            <button
                                                                className="action-btn view-btn"
                                                                onClick={() => handleView(doc)}
                                                                title="View PDF"
                                                            >
                                                                View
                                                            </button>
                                                            <button
                                                                className="action-btn download-btn"
                                                                onClick={() => handleDownload(doc)}
                                                                title="Download PDF"
                                                            >
                                                                Download
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            {documents["Complaints 2023"] && documents["Complaints 2023"].map((doc, index) => (
                                                <div key={`complaints-2023-${index}`} className="document-card">
                                                    <div className="document-content">
                                                        <div className="document-info">
                                                            <h4>{doc.title}</h4>
                                                            <div className="document-meta">
                                                                <span className="date">{doc.date}</span>
                                                                <span className="size">{doc.size}</span>
                                                            </div>
                                                        </div>
                                                        <div className="document-actions">
                                                            <button
                                                                className="action-btn view-btn"
                                                                onClick={() => handleView(doc)}
                                                                title="View PDF"
                                                            >
                                                                View
                                                            </button>
                                                            <button
                                                                className="action-btn download-btn"
                                                                onClick={() => handleDownload(doc)}
                                                                title="Download PDF"
                                                            >
                                                                Download
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            {documents["Complaints 2022"] && documents["Complaints 2022"].map((doc, index) => (
                                                <div key={`complaints-2022-${index}`} className="document-card">
                                                    <div className="document-content">
                                                        <div className="document-info">
                                                            <h4>{doc.title}</h4>
                                                            <div className="document-meta">
                                                                <span className="date">{doc.date}</span>
                                                                <span className="size">{doc.size}</span>
                                                            </div>
                                                        </div>
                                                        <div className="document-actions">
                                                            <button
                                                                className="action-btn view-btn"
                                                                onClick={() => handleView(doc)}
                                                                title="View PDF"
                                                            >
                                                                View
                                                            </button>
                                                            <button
                                                                className="action-btn download-btn"
                                                                onClick={() => handleDownload(doc)}
                                                                title="Download PDF"
                                                            >
                                                                Download
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            {documents["Complaints 2021"] && documents["Complaints 2021"].map((doc, index) => (
                                                <div key={`complaints-2021-${index}`} className="document-card">
                                                    <div className="document-content">
                                                        <div className="document-info">
                                                            <h4>{doc.title}</h4>
                                                            <div className="document-meta">
                                                                <span className="date">{doc.date}</span>
                                                                <span className="size">{doc.size}</span>
                                                            </div>
                                                        </div>
                                                        <div className="document-actions">
                                                            <button
                                                                className="action-btn view-btn"
                                                                onClick={() => handleView(doc)}
                                                                title="View PDF"
                                                            >
                                                                View
                                                            </button>
                                                            <button
                                                                className="action-btn download-btn"
                                                                onClick={() => handleDownload(doc)}
                                                                title="Download PDF"
                                                            >
                                                                Download
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </motion.div>
                                    </>
                                ) : selectedCategory === "Documents" ? (
                                    // Show Documents directly for Documents
                                    <>
                                        <h3 style={{ marginBottom: "20px" }}>Compliance Documents</h3>

                                        <motion.div
                                            className="documents-grid"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                        >
                                            {documents["Policies"] && documents["Policies"].map((doc, index) => (
                                                <div key={`policies-${index}`} className="document-card">
                                                    <div className="document-content">
                                                        <div className="document-info">
                                                            <h4>{doc.title}</h4>
                                                            <div className="document-meta">
                                                                <span className="date">{doc.date}</span>
                                                                <span className="size">{doc.size}</span>
                                                            </div>
                                                        </div>
                                                        <div className="document-actions">
                                                            <button
                                                                className="action-btn view-btn"
                                                                onClick={() => handleView(doc)}
                                                                title="View PDF"
                                                            >
                                                                View
                                                            </button>
                                                            <button
                                                                className="action-btn download-btn"
                                                                onClick={() => handleDownload(doc)}
                                                                title="Download PDF"
                                                            >
                                                                Download
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            {documents["Guidelines"] && documents["Guidelines"].map((doc, index) => (
                                                <div key={`guidelines-${index}`} className="document-card">
                                                    <div className="document-content">
                                                        <div className="document-info">
                                                            <h4>{doc.title}</h4>
                                                            <div className="document-meta">
                                                                <span className="date">{doc.date}</span>
                                                                <span className="size">{doc.size}</span>
                                                            </div>
                                                        </div>
                                                        <div className="document-actions">
                                                            <button
                                                                className="action-btn view-btn"
                                                                onClick={() => handleView(doc)}
                                                                title="View PDF"
                                                            >
                                                                View
                                                            </button>
                                                            <button
                                                                className="action-btn download-btn"
                                                                onClick={() => handleDownload(doc)}
                                                                title="Download PDF"
                                                            >
                                                                Download
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            {documents["Reports"] && documents["Reports"].map((doc, index) => (
                                                <div key={`reports-${index}`} className="document-card">
                                                    <div className="document-content">
                                                        <div className="document-info">
                                                            <h4>{doc.title}</h4>
                                                            <div className="document-meta">
                                                                <span className="date">{doc.date}</span>
                                                                <span className="size">{doc.size}</span>
                                                            </div>
                                                        </div>
                                                        <div className="document-actions">
                                                            <button
                                                                className="action-btn view-btn"
                                                                onClick={() => handleView(doc)}
                                                                title="View PDF"
                                                            >
                                                                View
                                                            </button>
                                                            <button
                                                                className="action-btn download-btn"
                                                                onClick={() => handleDownload(doc)}
                                                                title="Download PDF"
                                                            >
                                                                Download
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </motion.div>
                                    </>
                                ) : (
                                    // Show folders for other categories
                                    <>
                                        <motion.div
                                            className="content-header"
                                            initial={{ opacity: 0, y: -20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                        >
                                            <button
                                                className="back-btn"
                                                onClick={handleBackToFolders}
                                                style={{ display: selectedFolder ? 'flex' : 'none' }}
                                            >
                                                ← Back
                                            </button>
                                            <h3>
                                                {selectedFolder ? selectedFolder : `${selectedCategory} Folders`}
                                            </h3>
                                        </motion.div>

                                        {!selectedFolder ? (
                                            <motion.div
                                                className="folders-grid"
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6, ease: "easeOut" }}
                                            >
                                                {folderStructure[selectedCategory]?.map((folder, index) => (
                                                    <motion.div
                                                        key={folder}
                                                        className="folder-card"
                                                        onClick={() => handleFolderClick(folder)}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{
                                                            duration: 0.5,
                                                            delay: index * 0.1,
                                                            ease: "easeOut"
                                                        }}
                                                        whileHover={{ y: -5, scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                    >
                                                        <div className="folder-content">
                                                            <div className="folder-info">
                                                                <h4>{folder}</h4>
                                                                <p>{getFileCount(folder)} files</p>
                                                            </div>
                                                            <div className="arrow">→</div>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                className="documents-grid"
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6, ease: "easeOut" }}
                                            >
                                                {documents[selectedFolder]?.map((doc, index) => (
                                                    <div key={`${selectedFolder}-${index}`} className="document-card">
                                                        <div className="document-content">
                                                            <div className="document-info">
                                                                <h4>{doc.title}</h4>
                                                                <div className="document-meta">
                                                                    <span className="date">{doc.date}</span>
                                                                    <span className="size">{doc.size}</span>
                                                                </div>
                                                            </div>
                                                            <div className="document-actions">
                                                                <button
                                                                    className="action-btn view-btn"
                                                                    onClick={() => handleView(doc)}
                                                                    title="View PDF"
                                                                >
                                                                    View
                                                                </button>
                                                                <button
                                                                    className="action-btn download-btn"
                                                                    onClick={() => handleDownload(doc)}
                                                                    title="Download PDF"
                                                                >
                                                                    Download
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* PDF Viewer Modal */}
            <Modal
                title={
                    <div className="pdf-modal-header">
                        <span>{pdfViewer.title}</span>
                        <button
                            className="close-btn"
                            onClick={closePdfViewer}
                        >
                            ×
                        </button>
                    </div>
                }
                open={pdfViewer.isOpen}
                onCancel={closePdfViewer}
                footer={null}
                width="90%"
                className="pdf-viewer-modal"
            >
                <div className="pdf-viewer-content">
                    <iframe
                        src={pdfViewer.url}
                        title={pdfViewer.title}
                        width="100%"
                        height="600px"
                        style={{ border: 'none' }}
                    />
                </div>
            </Modal>
        </div>
    );
};

export default Compliance;
