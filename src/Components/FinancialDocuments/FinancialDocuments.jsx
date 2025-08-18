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
            "Q4 2023-24",
            "Q3 2023-24",
            "Q2 2023-24",
            "Q1 2023-24"
        ],
        "Announcements": [
            "2024",
            "2023",
            "2022",
            "2021"
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
        "Q4 2023-24": [
            {
                date: "15 May, 2024",
                title: "Q4 Financial Results 2023-24",
                size: "1.2 MB",
                type: "PDF",
                filePath: "#"
            }
        ],
        "Q3 2023-24": [
            {
                date: "20 Feb, 2024",
                title: "Q3 Financial Results 2023-24",
                size: "956.7 KB",
                type: "PDF",
                filePath: "#"
            }
        ],
        "Policies": [
            {
                date: "01 Jan, 2024",
                title: "Corporate Social Responsibility Policy",
                size: "456.2 KB",
                type: "PDF",
                filePath: "#"
            },
            {
                date: "15 Dec, 2023",
                title: "Whistle Blower Policy",
                size: "389.7 KB",
                type: "PDF",
                filePath: "#"
            }
        ]
    };

    const handleView = (document) => {
        if (document.filePath && document.filePath !== "#") {
            try {
                const pdfUrl = process.env.PUBLIC_URL + document.filePath;
                console.log(`Opening PDF: ${pdfUrl}`);

                // Try to open in new tab first
                const newWindow = window.open(pdfUrl, '_blank');

                // If that fails, show in modal
                if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
                    setPdfViewer({
                        isOpen: true,
                        url: pdfUrl,
                        title: document.title
                    });
                }
            } catch (error) {
                console.error('View error:', error);
                // Fallback to modal
                setPdfViewer({
                    isOpen: true,
                    url: process.env.PUBLIC_URL + document.filePath,
                    title: document.title
                });
            }
        } else {
            alert(`View option not available for: ${document.title}`);
        }
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
                                {!selectedFolder ? (
                                    // Show Folders View
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
                                                        <p className="folder-description">Click to view documents</p>
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
                                    // Show Documents View
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
                                width="100%"
                                height="600px"
                                frameBorder="0"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FinancialDocuments;