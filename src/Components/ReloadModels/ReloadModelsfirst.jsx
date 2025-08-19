import React, { useState, useEffect } from "react";
import { Modal } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from "react-icons/io5";

const ReloadModelsfirst = ({ onClose }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        console.log("ReloadModelsfirst component mounted");

        // Show modal after 2 seconds
        const timer = setTimeout(() => {
            console.log("2 seconds passed, showing modal");
            setIsModalOpen(true);
        }, 2000);

        // Cleanup timer
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        console.log("Closing first modal");
        setIsModalOpen(false);
        // Trigger the second modal
        if (onClose) {
            console.log("Calling onClose function");
            onClose();
        }
    };

    return (
        <Modal
            title={
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span>ATTENTION!</span>
                </div>
            }
            open={isModalOpen}
            onCancel={handleClose}
            footer={null}
            width={800}
            maskClosable={false}
            closable={true}
            closeIcon={<IoClose style={{ fontSize: '20px' }} />}
            styles={{
                header: {
                    color: 'white',
                    borderBottom: 'none'
                },
                body: {
                    padding: '30px'
                }
            }}
        >
            <motion.div 
                style={{ marginBottom: '25px' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#374151' }}>
                    Certain unknown miscreants have formed a WhatsApp group misusing our name and infringing on our logo thereby inducing people to invest in stocks, falsely assuring them high profits and then duping them of their money.
                </p>
            </motion.div>

            <motion.div 
                style={{ marginBottom: '25px' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#1f2937', marginBottom: '15px' }}>Action Taken:</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#374151' }}>
                    We have lodged a Complaint at the <strong>Sarkhej Police Station, Ahmedabad (Dated 22-July-2025)</strong> in relation to the aforesaid acts and also informed regulatory authorities about the same. We have also requested them to take the strictest possible action against the perpetrators.
                </p>
            </motion.div>

            <motion.div 
                style={{ marginBottom: '25px' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#1f2937', marginBottom: '15px' }}>Official Statement:</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#374151' }}>
                    <strong>Munoth Capital Market Limited is a regulated entity.</strong> Neither we, nor any of our partners, directors or employees have created or subscribed to any such fake websites or groups on any third-party apps like WhatsApp, Telegram etc. that deal in stock market information or tips, nor do we endorse any such dubious activities that encourage people to part with their hard-earned money by assuring high returns.
                </p>
            </motion.div>

            <motion.div 
                style={{ marginBottom: '25px' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#1f2937', marginBottom: '15px' }}>Our Recommendations:</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#374151' }}>
                    We recommend that you only trust communication from <strong>authorised platforms</strong> - Official website, LinkedIn, X, Instagram. We also urge clients to only trust communication with/from your respective <strong>Point-Of-Contact</strong>. Anyone dealing with unauthorised entities or disbursing money or acting on such tips without proper verification shall be doing so at their own risk and <strong>Munoth Capital Market Ltd shall neither be responsible in any manner, nor can it assist the victims in recovering their lost money.</strong> We strongly urge you to be vigilant and conduct thorough due diligence before acting on stock tips shared on such fraudulent groups impersonating Munoth Capital Market Ltd.
                </p>
            </motion.div>

            <motion.div 
                style={{ textAlign: 'center', marginTop: '30px' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            >
                <motion.button
                    onClick={handleClose}
                    style={{
                        background:'black',
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
                    I Understand & Acknowledge
                </motion.button>
            </motion.div>
        </Modal>
    );
};

export default ReloadModelsfirst;