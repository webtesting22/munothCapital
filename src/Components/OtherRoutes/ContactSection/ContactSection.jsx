import React from "react";
import "./ContactSection.css";
import { Form, Input, Button, notification } from "antd";
import { FaUser, FaEnvelope, FaPhone, FaComment, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

const ContactSection = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = React.useState(false);

    const onFinish = async (values) => {
        setLoading(true);
        try {
            // Simulate API call - replace with actual API endpoint
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Show success notification
            notification.success({
                message: 'Message Sent Successfully!',
                description: 'Thank you for contacting Munoth Capital. We will get back to you soon.',
                placement: 'topRight',
                duration: 5,
                style: {
                    borderRadius: '8px',
                    border: '2px solid #52c41a',
                },
            });

            // Reset form after successful submission
            form.resetFields();

        } catch (error) {
            // Show error notification
            notification.error({
                message: 'Message Failed to Send',
                description: 'Please try again later or contact us directly.',
                placement: 'topRight',
                duration: 5,
                style: {
                    borderRadius: '8px',
                    border: '2px solid #ff4d4f',
                },
            });
        } finally {
            setLoading(false);
        }
    };

    const onFinishFailed = (errorInfo) => {
        notification.warning({
            message: 'Please Check Your Input',
            description: 'Please fill in all required fields correctly.',
            placement: 'topRight',
            duration: 4,
            style: {
                borderRadius: '8px',
                border: '2px solid #faad14',
            },
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
                    </div>

                    <div className="contact-info-container">
                        <div>
                            <h2>Corporate office & Registered Office</h2>
                            <br />
                            <h4>
                                <FaMapMarkerAlt style={{ marginRight: '8px', color: '#666' }} />
                                Shanti Nivas - Office Building
                                Opposite Shapath V
                                Near Karnavati Club
                                S G Road, Ahmedabad - 380058
                            </h4>
                            <br />
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
                                <div style={{
                                    background: 'rgba(255, 255, 255, 0.98)',
                                    padding: '20px',
                                    borderRadius: '20px',
                                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
                                    border: '1px solid rgba(0, 0, 0, 0.05)',
                                    // maxWidth: '500px',
                                    margin: '0 auto'
                                }}>
                                    <h3 style={{
                                        color: '#000',
                                        marginBottom: '30px',
                                        textAlign: 'center',
                                        fontSize: '28px',
                                        fontWeight: '300',
                                        letterSpacing: '1px',
                                        borderBottom: '2px solid #000',
                                        paddingBottom: '15px'
                                    }}>
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
                                                <span style={{
                                                    color: '#000',
                                                    fontWeight: '500',
                                                    fontSize: '14px',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.5px',
                                                    display: 'flex',
                                                    alignItems: 'center'
                                                }}>
                                                    <FaUser style={{ marginRight: '8px', fontSize: '16px' }} />
                                                    Name *
                                                </span>
                                            }
                                            rules={[{ required: true, message: 'Please enter your name!' }]}
                                        >
                                            <Input
                                                placeholder="Enter your name"
                                                style={{
                                                    border: 'none',
                                                    borderBottom: '2px solid #e0e0e0',
                                                    borderRadius: '0',
                                                    padding: '12px 0',
                                                    fontSize: '16px',
                                                    background: 'transparent',
                                                    transition: 'all 0.3s ease',
                                                    boxShadow: 'none'
                                                }}
                                                onFocus={(e) => {
                                                    e.target.style.borderBottomColor = '#000';
                                                    e.target.style.borderBottomWidth = '3px';
                                                }}
                                                onBlur={(e) => {
                                                    e.target.style.borderBottomColor = '#e0e0e0';
                                                    e.target.style.borderBottomWidth = '2px';
                                                }}
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            name="email"
                                            label={
                                                <span style={{
                                                    color: '#000',
                                                    fontWeight: '500',
                                                    fontSize: '14px',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.5px',
                                                    display: 'flex',
                                                    alignItems: 'center'
                                                }}>
                                                    <FaEnvelope style={{ marginRight: '8px', fontSize: '16px' }} />
                                                    Email *
                                                </span>
                                            }
                                            rules={[
                                                { required: true, message: 'Please enter your email!' },
                                                { type: 'email', message: 'Please enter a valid email!' }
                                            ]}
                                        >
                                            <Input
                                                placeholder="Enter your email"
                                                style={{
                                                    border: 'none',
                                                    borderBottom: '2px solid #e0e0e0',
                                                    borderRadius: '0',
                                                    padding: '12px 0',
                                                    fontSize: '16px',
                                                    background: 'transparent',
                                                    transition: 'all 0.3s ease',
                                                    boxShadow: 'none'
                                                }}
                                                onFocus={(e) => {
                                                    e.target.style.borderBottomColor = '#000';
                                                    e.target.style.borderBottomWidth = '3px';
                                                }}
                                                onBlur={(e) => {
                                                    e.target.style.borderBottomColor = '#e0e0e0';
                                                    e.target.style.borderBottomWidth = '2px';
                                                }}
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            name="mobile"
                                            label={
                                                <span style={{
                                                    color: '#000',
                                                    fontWeight: '500',
                                                    fontSize: '14px',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.5px',
                                                    display: 'flex',
                                                    alignItems: 'center'
                                                }}>
                                                    <FaPhone style={{ marginRight: '8px', fontSize: '16px' }} />
                                                    Mobile
                                                </span>
                                            }
                                        >
                                            <Input
                                                placeholder="Enter your mobile number"
                                                style={{
                                                    border: 'none',
                                                    borderBottom: '2px solid #e0e0e0',
                                                    borderRadius: '0',
                                                    padding: '12px 0',
                                                    fontSize: '16px',
                                                    background: 'transparent',
                                                    transition: 'all 0.3s ease',
                                                    boxShadow: 'none'
                                                }}
                                                onFocus={(e) => {
                                                    e.target.style.borderBottomColor = '#000';
                                                    e.target.style.borderBottomWidth = '3px';
                                                }}
                                                onBlur={(e) => {
                                                    e.target.style.borderBottomColor = '#e0e0e0';
                                                    e.target.style.borderBottomWidth = '2px';
                                                }}
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            name="comments"
                                            label={
                                                <span style={{
                                                    color: '#000',
                                                    fontWeight: '500',
                                                    fontSize: '14px',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.5px',
                                                    display: 'flex',
                                                    alignItems: 'center'
                                                }}>
                                                    <FaComment style={{ marginRight: '8px', fontSize: '16px' }} />
                                                    Comments *
                                                </span>
                                            }
                                            rules={[{ required: true, message: 'Please enter your comments!' }]}
                                        >
                                            <Input.TextArea
                                                placeholder="Enter your comments"
                                                rows={4}
                                                style={{
                                                    border: 'none',
                                                    borderBottom: '2px solid #e0e0e0',
                                                    borderRadius: '0',
                                                    padding: '12px 0',
                                                    fontSize: '16px',
                                                    background: 'transparent',
                                                    transition: 'all 0.3s ease',
                                                    boxShadow: 'none',
                                                    resize: 'none'
                                                }}
                                                onFocus={(e) => {
                                                    e.target.style.borderBottomColor = '#000';
                                                    e.target.style.borderBottomWidth = '3px';
                                                }}
                                                onBlur={(e) => {
                                                    e.target.style.borderBottomColor = '#e0e0e0';
                                                    e.target.style.borderBottomWidth = '2px';
                                                }}
                                            />
                                        </Form.Item>

                                        <Form.Item style={{ marginTop: '30px' }}>
                                            <Button
                                                type="primary"
                                                htmlType="submit"
                                                loading={loading}
                                                style={{
                                                    background: '#000',
                                                    border: 'none',
                                                    borderRadius: '0',
                                                    height: '50px',
                                                    fontSize: '14px',
                                                    fontWeight: '500',
                                                    color: '#fff',
                                                    width: '100%',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '1px',
                                                    transition: 'all 0.3s ease',
                                                    boxShadow: 'none',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}
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