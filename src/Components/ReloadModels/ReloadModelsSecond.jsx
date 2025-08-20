import React from "react";
import { Modal } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
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
                    padding: '10px 0px'
                }
            }}
        >
            <motion.div
                style={{ marginBottom: '30px' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
                <motion.ul
                    style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0
                    }}
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2,
                                delayChildren: 0.3
                            }
                        }
                    }}
                >
                    {[
                        "9 out of 10 individual traders in equity Futures and Options Segment, incurred net losses.",
                        "On an average, loss makers registered net trading loss close to ₹ 50,000.",
                        "Over and above the net trading losses incurred, loss makers expended an additional 28% of net trading losses as transaction costs.",
                        "Those making net trading profits, incurred between 15% to 50% of such profits as transaction cost."
                    ].map((text, index) => (
                        <motion.li
                            key={index}
                            style={{
                                color: '#374151',
                                fontSize: '16px',
                                lineHeight: '1.6',
                                marginBottom: '20px',
                                padding: '10px 20px',
                                background: '#f9fafb',
                                borderRadius: '12px',
                                borderLeft: '2px solid #b7982a',
                                position: 'relative'
                            }}
                            variants={{
                                hidden: { opacity: 0, x: -30 },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                    transition: { duration: 0.5, ease: "easeOut" }
                                }
                            }}
                            whileHover={{ x: 5, scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.span
                                style={{
                                    position: 'absolute',
                                    left: '-15px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'white',
                                    padding: '5px',
                                    borderRadius: '50%',
                                    fontSize: '14px'
                                }}
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 + (index * 0.2) }}
                            >
                                ⚠️
                            </motion.span>
                            {text}
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>

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

            {/* <motion.div
                style={{ textAlign: 'center', marginTop: '30px' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
            >
                <motion.button
                    onClick={handleClose}
                    style={{
                        background: 'black',
                        color: 'white',
                        border: 'none',
                        padding: '15px 40px',
                        fontSize: '18px',
                        fontWeight: '600',
                        borderRadius: '10px',
                        cursor: 'pointer'
                    }}
                    whileHover={{
                        y: -5,
                        scale: 1.05,
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    I Understand the Risks
                </motion.button>
            </motion.div> */}
        </Modal>
    );
};

export default ReloadModelsSecond;  