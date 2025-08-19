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
            "Investor Charters"
        ],
        "Investor Complaints Data": [
            "Investor Complaints Data"
        ],
        "Documents": [
            "Documents"
        ]
    };

    const documents = {
        // Investor Charters - Direct Documents
        "Investor Charters": [
            {
                date: "01 Jan, 2024",
                title: "Investor Charter for Stock Brokers",
                size: "176 KB",
                type: "PDF",
                filePath: "/Documents/Compliance/Investor Charters/Investor Charter for Stock Brokers.pdf"
            },
            {
                date: "01 Jan, 2024",
                title: "Investor Charter for Depositories and Depository Participants",
                size: "207 KB",
                type: "PDF",
                filePath: "/Documents/Compliance/Investor Charters/Investor Charter for Depositories and Depository Participants.pdf"
            }
        ],

        // Investor Complaints Data - Only the main document
        "Investor Complaints Data": [
            {
                date: "01 Jan, 2024",
                title: "Investor Complaints Data",
                size: "35 KB",
                type: "XLSX",
                filePath: "/Documents/Compliance/Investor Complaints Data/Investor Complaints Data.xlsx"
            }
        ],

        // Documents - Actual files from Documents folder
        "Documents": [
            {
                date: "01 Jan, 2024",
                title: "DP Rights & Obligation",
                size: "100 KB",
                type: "PDF",
                filePath: "/Documents/Documents/DP Rights & Obligation.pdf"
            },
            {
                date: "01 Jan, 2024",
                title: "Account Opening Step by Step Guide",
                size: "160 KB",
                type: "PDF",
                filePath: "/Documents/Documents/Account Opening Step by Step Guide.pdf"
            },
            {
                date: "01 Jan, 2024",
                title: "Annexure A - Details of Mandatory Display",
                size: "250 KB",
                type: "PDF",
                filePath: "/Documents/Documents/Annexure A - Details of Mandatory Display.pdf"
            },
            {
                date: "01 Jan, 2024",
                title: "Filing of Compliant Step by Step Guide",
                size: "102 KB",
                type: "PDF",
                filePath: "/Documents/Documents/Filing of Compliant Step by Step Guide.pdf"
            },
            {
                date: "01 Jan, 2024",
                title: "Guidance Note - Do's and Don'ts for Trading on the Stock Exchange(s) for Investors",
                size: "108 KB",
                type: "PDF",
                filePath: "/Documents/Documents/Guidance Note - Do's and Don'ts for Trading on the Stock Exchange(s) for Investors.pdf"
            },
            {
                date: "01 Jan, 2024",
                title: "Mandatory Document dealing with Policy and Procedures",
                size: "102 KB",
                type: "PDF",
                filePath: "/Documents/Documents/Mandatory Document dealing with Policy and Procedures .pdf"
            },
            {
                date: "01 Jan, 2024",
                title: "Rights and Obligations of Stock Brokers, Sub-Brokers and Clients",
                size: "165 KB",
                type: "PDF",
                filePath: "/Documents/Documents/Rights and Obligations of Stock Brokers, Sub-Brokers and Clients .pdf"
            },
            {
                date: "01 Jan, 2024",
                title: "Risk Disclosure Document for Capital Market and Derivatives Segments",
                size: "106 KB",
                type: "PDF",
                filePath: "/Documents/Documents/Risk Disclosure Document for Capital Market and Derivatives Segments.pdf"
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
                // Force download using fetch and blob for better browser compatibility
                fetch(document.filePath)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        return response.blob();
                    })
                    .then(blob => {
                        // Create object URL from blob
                        const url = window.URL.createObjectURL(blob);
                        
                        // Create temporary link element
                        const link = document.createElement('a');
                        link.href = url;
                        
                        // Set proper filename with extension
                        const fileExtension = document.type ? document.type.toLowerCase() : 'pdf';
                        link.download = `${document.title}.${fileExtension}`;
                        
                        // Set other attributes
                        link.style.display = 'none';
                        
                        // Append to body, click, and remove
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        
                        // Clean up object URL
                        window.URL.revokeObjectURL(url);
                        
                        console.log(`Download completed: ${document.title} (${fileExtension})`);
                    })
                    .catch(error => {
                        console.error('Fetch download error:', error);
                        
                        // Fallback: use simple link download
                        const link = document.createElement('a');
                        link.href = document.filePath;
                        const fileExtension = document.type ? document.type.toLowerCase() : 'pdf';
                        link.download = `${document.title}.${fileExtension}`;
                        link.style.display = 'none';
                        link.target = '_blank';
                        
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        
                        console.log(`Fallback download initiated: ${document.title}`);
                    });
                
            } catch (error) {
                console.error('Download error:', error);
                
                // Final fallback: open in new tab
                try {
                    window.open(document.filePath, '_blank');
                    alert(`Opening ${document.title} in new tab. Use browser's download option to save the file.`);
                } catch (fallbackError) {
                    console.error('Final fallback error:', fallbackError);
                    alert(`Download failed for: ${document.title}. Please check your internet connection and try again.`);
                }
            }
        } else {
            console.log(`No file path available for: ${document.title}`);
            alert(`Download not available for: ${document.title}`);
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
            // For Investor Charters, return the total count of all documents
            if (documents["Investor Charters"]) {
                return documents["Investor Charters"].length;
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
                                            {documents["Investor Charters"] && documents["Investor Charters"].map((doc, index) => (
                                                <div key={`investor-charter-${index}`} className="document-card">
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
                                        <h3 style={{ marginBottom: "20px" }}>Investor Complaints Data Document</h3>
                                        <motion.div
                                            className="documents-grid"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                        >
                                            {documents["Investor Complaints Data"] && documents["Investor Complaints Data"].map((doc, index) => (
                                                <div key={`investor-complaints-${index}`} className="document-card">
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
                                                                title="View XLSX"
                                                            >
                                                                View
                                                            </button>
                                                            <button
                                                                className="action-btn download-btn"
                                                                onClick={() => handleDownload(doc)}
                                                                title="Download XLSX"
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
                                            {documents["Documents"] && documents["Documents"].map((doc, index) => (
                                                <div key={`documents-${index}`} className="document-card">
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