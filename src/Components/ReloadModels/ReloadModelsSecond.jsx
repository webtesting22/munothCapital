import React from "react";
import { Modal } from 'antd';
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const ReloadModelsSecond = ({ isOpen, onClose }) => {
    const handleClose = () => {
        onClose();
    };

    return (
        <Modal
            title="Risk Disclosures on Derivatives"
            open={isOpen}
            onCancel={handleClose}
            footer={null}
            width={800}
            maskClosable={false}
            closable={true}
            closeIcon={<IoClose style={{ fontSize: '20px' }} />}
            styles={{
                header: {
                    // background: '#1e40af',
                    color: 'white',
                    borderBottom: 'none'
                },
                body: {
                    padding: '30px'
                }
            }}
        >
            <div style={{ marginBottom: '30px' }}>
                <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                }}>
                    <li style={{
                        color: '#374151',
                        fontSize: '16px',
                        lineHeight: '1.6',
                        marginBottom: '20px',
                        padding: '10px 20px',
                        background: '#f9fafb',
                        borderRadius: '12px',
                        borderLeft: '2px solid #b7982a',
                        position: 'relative'
                    }}>
                        <span style={{
                            position: 'absolute',
                            left: '-15px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'white',
                            padding: '5px',
                            borderRadius: '50%',
                            fontSize: '14px'
                        }}>⚠️</span>
                        9 out of 10 individual traders in equity Futures and Options Segment, incurred net losses.
                    </li>
                    <li style={{
                        color: '#374151',
                        fontSize: '16px',
                        lineHeight: '1.6',
                        marginBottom: '20px',
                        padding: '10px 20px',
                        background: '#f9fafb',
                        borderRadius: '12px',
                        borderLeft: '2px solid #b7982a',
                        position: 'relative'
                    }}>
                        <span style={{
                            position: 'absolute',
                            left: '-15px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'white',
                            padding: '5px',
                            borderRadius: '50%',
                            fontSize: '14px'
                        }}>⚠️</span>
                        On an average, loss makers registered net trading loss close to ₹ 50,000.
                    </li>
                    <li style={{
                        color: '#374151',
                        fontSize: '16px',
                        lineHeight: '1.6',
                        marginBottom: '20px',
                        padding: '10px 20px',
                        background: '#f9fafb',
                        borderRadius: '12px',
                        borderLeft: '2px solid #b7982a',
                        position: 'relative'
                    }}>
                        <span style={{
                            position: 'absolute',
                            left: '-15px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'white',
                            padding: '5px',
                            borderRadius: '50%',
                            fontSize: '14px'
                        }}>⚠️</span>
                        Over and above the net trading losses incurred, loss makers expended an additional 28% of net trading losses as transaction costs.
                    </li>
                    <li style={{
                        color: '#374151',
                        fontSize: '16px',
                        lineHeight: '1.6',
                        marginBottom: '20px',
                        padding: '10px 20px',
                        background: '#f9fafb',
                        borderRadius: '12px',
                        borderLeft: '2px solid #b7982a',
                        position: 'relative'
                    }}>
                        <span style={{
                            position: 'absolute',
                            left: '-15px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'white',
                            padding: '5px',
                            borderRadius: '50%',
                            fontSize: '14px'
                        }}>⚠️</span>
                        Those making net trading profits, incurred between 15% to 50% of such profits as transaction cost.
                    </li>
                </ul>
            </div>

            <div style={{
                background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
                border: '1px solid #f59e0b',
                borderRadius: '16px',
                padding: '25px',
                marginTop: '30px'
            }}>
                <h3 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#92400e',
                    margin: '0 0 15px 0'
                }}>Source:</h3>
                <Link to="https://www.sebi.gov.in/reports-and-statistics/research/jan-2023/study-analysis-of-profit-and-loss-of-individual-traders-dealing-in-equity-fando-segment_67525.html" target="_blank" style={{ color: "red" }}><i>SEBI study dated January 25, 2023 on “Analysis of Profit and Loss of Individual Traders dealing in equity Futures and Options (F&O) Segment”, wherein Aggregate Level findings are based on annual Profit/Loss incurred by individual traders in equity F&O during FY 2021-22.</i></Link>
            </div>

            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <button
                    onClick={handleClose}
                    style={{
                        background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
                        color: 'white',
                        border: 'none',
                        padding: '15px 40px',
                        fontSize: '18px',
                        fontWeight: '600',
                        borderRadius: '10px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 6px 20px rgba(30, 64, 175, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                    }}
                >
                    I Understand the Risks
                </button>
            </div>
        </Modal>
    );
};

export default ReloadModelsSecond;  