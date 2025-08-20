import React from "react";
import "./ContactSection.css";
import { Form, Input, Button, notification } from "antd";
import { FaUser, FaEnvelope, FaPhone, FaComment, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

const ContactSection = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = React.useState(false);
    const [message, setMessage] = React.useState({ type: '', text: '', description: '' });

    const onFinish = async (values) => {
        setLoading(true);
        setMessage({ type: '', text: '', description: '' });
        
        try {
            // Simulate API call - replace with actual API endpoint
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Show success message below button
            setMessage({
                type: 'success',
                text: 'Message Sent Successfully!',
                description: 'Thank you for contacting Munoth Capital. We will get back to you soon.'
            });
            
            // Reset form after successful submission
            form.resetFields();
            
        } catch (error) {
            // Show error message below button
            setMessage({
                type: 'error',
                text: 'Message Failed to Send',
                description: 'Please try again later or contact us directly.'
            });
        } finally {
            setLoading(false);
        }
    };

    const onFinishFailed = (errorInfo) => {
        setMessage({
            type: 'warning',
            text: 'Please Check Your Input',
            description: 'Please fill in all required fields correctly.'
        });
    };

    return (
        <>
            <div className="contact-section-container paddingTop100px">
                <div className="contact-section-content paddingSide">
                    <div>
                        <h3>Munoth Capital</h3>
                        <div className="InfoContactContainer">
                            <div className="info-grid">
                                {/* Column 1: Compliance Officer */}
                                <div className="info-column">
                                    <h4>Compliance Officer</h4>
                                    <div className="info-details">
                                        <p>Siddharth S. Jain</p>
                                        <p>Phone: 079-26937954</p>
                                        <p>Email: <a href="mailto:sjain@munoth.com">sjain@munoth.com</a></p>
                                    </div>
                                </div>

                                {/* Column 2: Investor Grievance */}
                                <div className="info-column">
                                    <h4>Investor Grievance</h4>
                                    <div className="info-details">
                                        <p><a href="mailto:grievances@munoth.com">grievances@munoth.com</a></p>
                                        <p><a href="#" className="escalation-link">Escalation Matrix</a></p>
                                    </div>
                                </div>

                                {/* Column 3: Standard Set of Client Registration Form */}
                                <div className="info-column">
                                    <h4>Standard Set of Client Registration Form</h4>
                                    <div className="download-section">
                                        {/* <div className="download-icon">
                                            <div className="pdf-icon">
                                                <span>PDF</span>
                                                <span className="download-arrow">↓</span>
                                            </div>
                                        </div> */}
                                        <a href="#" className="download-link">Download</a>
                                    </div>
                                </div>

                                {/* Column 4: Saral Account Opening Form */}
                                <div className="info-column">
                                    <h4>Saral Account Opening Form</h4>
                                    <div className="download-section">
                                        {/* <div className="download-icon">
                                            <div className="pdf-icon">
                                                <span>PDF</span>
                                                <span className="download-arrow">↓</span>
                                            </div>
                                        </div> */}
                                        <a href="#" className="download-link">Download</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tableContainer">
                            <div className="regulatory-table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Details</th>
                                            <th>NSE Cash Segment</th>
                                            <th>NSE F&O Segment</th>
                                            <th>BSE Cash</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>SEBI Reg.No.</td>
                                            <td>-</td>
                                            <td>INZ000302337</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>Member Code</td>
                                            <td>-</td>
                                            <td>12480</td>
                                            <td>3205</td>
                                        </tr>
                                        <tr>
                                            <td>CDSL Reg.No.</td>
                                            <td>-</td>
                                            <td>IN-DP-CDSL437-2008</td>
                                            <td>-</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="contact-info-container">
                        <div>
                            <h2>Corporate office & Registered Office</h2>
                            {/* <br /> */}
                            <h4>
                                <FaMapMarkerAlt style={{ marginRight: '8px', color: '#666' }} />
                                Shanti Nivas - Office Building
                                Opposite Shapath V
                                Near Karnavati Club
                                S G Road, Ahmedabad - 380058
                            </h4>
                            {/* <br /> */}
                            <div className="contact-details-container">
                                <p>
                                    <FaPhone style={{ marginRight: '8px', color: '#666' }} />
                                    +91-79-26937954, 9974004651
                                </p>
                                <p>
                                    <FaEnvelope style={{ marginRight: '8px', color: '#666' }} />
                                    info@munoth.com | grievances@munoth.com
                                </p>
                            </div>
                            <div className="contact-form-container marginTop80px">
                                <div className="form-container-box">
                                    <h3 className="form-title">
                                        Get In Touch
                                    </h3>
                                    <Form
                                        form={form}
                                        onFinish={onFinish}
                                        onFinishFailed={onFinishFailed}
                                        layout="vertical"
                                        size="large"
                                        loading={loading}
                                    >
                                        <Form.Item
                                            name="name"
                                            label={
                                                <span className="form-label">
                                                    <FaUser style={{ marginRight: '8px', fontSize: '16px' }} />
                                                    Name *
                                                </span>
                                            }
                                            rules={[
                                                { required: true, message: 'Please enter your name!' },
                                                { 
                                                    validator: (_, value) => {
                                                        if (value && value.trim() === '') {
                                                            return Promise.reject(new Error('Name cannot be only blank spaces!'));
                                                        }
                                                        if (value && value.trim().length < 2) {
                                                            return Promise.reject(new Error('Name must be at least 2 characters!'));
                                                        }
                                                        return Promise.resolve();
                                                    }
                                                }
                                            ]}
                                        >
                                            <Input
                                                placeholder="Enter your name"
                                                className="form-input"
                                                onFocus={(e) => {
                                                    e.target.style.borderBottomColor = '#000';
                                                    e.target.style.borderBottomWidth = '3px';
                                                }}
                                                onBlur={(e) => {
                                                    e.target.style.borderBottomColor = '#e0e0e0';
                                                    e.target.style.borderBottomWidth = '2px';
                                                }}
                                                onChange={(e) => {
                                                    // Remove leading/trailing spaces
                                                    e.target.value = e.target.value.trim();
                                                }}
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            name="email"
                                            label={
                                                <span className="form-label">
                                                    <FaEnvelope style={{ marginRight: '8px', fontSize: '16px' }} />
                                                    Email *
                                                </span>
                                            }
                                            rules={[
                                                { required: true, message: 'Please enter your email!' },
                                                { type: 'email', message: 'Please enter a valid email!' },
                                                { 
                                                    validator: (_, value) => {
                                                        if (value && value.trim() === '') {
                                                            return Promise.reject(new Error('Email cannot be only blank spaces!'));
                                                        }
                                                        if (value && value.includes(' ')) {
                                                            return Promise.reject(new Error('Email cannot contain spaces!'));
                                                        }
                                                        return Promise.resolve();
                                                    }
                                                }
                                            ]}
                                        >
                                            <Input
                                                placeholder="Enter your email"
                                                className="form-input"
                                                onFocus={(e) => {
                                                    e.target.style.borderBottomColor = '#000';
                                                    e.target.style.borderBottomWidth = '3px';
                                                }}
                                                onBlur={(e) => {
                                                    e.target.style.borderBottomColor = '#e0e0e0';
                                                    e.target.style.borderBottomWidth = '2px';
                                                }}
                                                onChange={(e) => {
                                                    // Remove spaces from email
                                                    e.target.value = e.target.value.replace(/\s/g, '');
                                                }}
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            name="mobile"
                                            label={
                                                <span className="form-label">
                                                    <FaPhone style={{ marginRight: '8px', fontSize: '16px' }} />
                                                    Mobile
                                                </span>
                                            }
                                            rules={[
                                                { 
                                                    validator: (_, value) => {
                                                        if (value && value.trim() === '') {
                                                            return Promise.reject(new Error('Mobile number cannot be only blank spaces!'));
                                                        }
                                                        if (value && value.trim() !== '' && !/^[0-9+\-\s()]+$/.test(value)) {
                                                            return Promise.reject(new Error('Mobile number can only contain numbers, +, -, (, ), and spaces!'));
                                                        }
                                                        if (value && value.trim() !== '' && value.replace(/[\s+\-()]/g, '').length < 10) {
                                                            return Promise.reject(new Error('Mobile number must be at least 10 digits!'));
                                                        }
                                                        if (value && value.trim() !== '' && value.replace(/[\s+\-()]/g, '').length > 15) {
                                                            return Promise.reject(new Error('Mobile number cannot exceed 15 digits!'));
                                                        }
                                                        return Promise.resolve();
                                                    }
                                                }
                                            ]}
                                        >
                                            <Input
                                                placeholder="Enter your mobile number"
                                                className="form-input"
                                                onFocus={(e) => {
                                                    e.target.style.borderBottomColor = '#000';
                                                    e.target.style.borderBottomWidth = '3px';
                                                }}
                                                onBlur={(e) => {
                                                    e.target.style.borderBottomColor = '#e0e0e0';
                                                    e.target.style.borderBottomWidth = '2px';
                                                }}
                                                onChange={(e) => {
                                                    // Allow only numbers, +, -, (, ), and spaces
                                                    e.target.value = e.target.value.replace(/[^0-9+\-\s()]/g, '');
                                                }}
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            name="comments"
                                            label={
                                                <span className="form-label">
                                                    <FaComment style={{ marginRight: '8px', fontSize: '16px' }} />
                                                    Comments *
                                                </span>
                                            }
                                            rules={[
                                                { required: true, message: 'Please enter your comments!' },
                                                { 
                                                    validator: (_, value) => {
                                                        if (value && value.trim() === '') {
                                                            return Promise.reject(new Error('Comments cannot be only blank spaces!'));
                                                        }
                                                        if (value && value.trim().length < 10) {
                                                            return Promise.reject(new Error('Comments must be at least 10 characters!'));
                                                        }
                                                        if (value && value.trim().length > 500) {
                                                            return Promise.reject(new Error('Comments cannot exceed 500 characters!'));
                                                        }
                                                        return Promise.resolve();
                                                    }
                                                }
                                            ]}
                                        >
                                            <Input.TextArea
                                                placeholder="Enter your comments (minimum 10 characters)"
                                                rows={4}
                                                className="form-textarea"
                                                onFocus={(e) => {
                                                    e.target.style.borderBottomColor = '#000';
                                                    e.target.style.borderBottomWidth = '3px';
                                                }}
                                                onBlur={(e) => {
                                                    e.target.style.borderBottomColor = '#e0e0e0';
                                                    e.target.style.borderBottomWidth = '2px';
                                                }}
                                                onChange={(e) => {
                                                    // Remove leading/trailing spaces
                                                    e.target.value = e.target.value.trim();
                                                }}
                                                maxLength={500}
                                                showCount
                                            />
                                        </Form.Item>

                                        <Form.Item style={{ marginTop: '30px' }}>
                                            <Button
                                                type="primary"
                                                htmlType="submit"
                                                loading={loading}
                                                className="submit-button"
                                                onMouseEnter={(e) => {
                                                    if (!loading) {
                                                        e.target.style.background = '#333';
                                                        e.target.style.transform = 'translateY(-2px)';
                                                    }
                                                }}
                                                onMouseLeave={(e) => {
                                                    if (!loading) {
                                                        e.target.style.background = '#000';
                                                        e.target.style.transform = 'translateY(0)';
                                                    }
                                                }}
                                            >
                                                {!loading && <FaEnvelope style={{ marginRight: '8px', fontSize: '16px' }} />}
                                                {loading ? 'Sending...' : 'Send Message'}
                                            </Button>
                                            
                                            {/* Message Display */}
                                            {message.type && (
                                                <div className={`message-display ${message.type}`}>
                                                    <div className="message-content">
                                                        <h4 className="message-title">{message.text}</h4>
                                                        <p className="message-description">{message.description}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </Form.Item>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactSection;