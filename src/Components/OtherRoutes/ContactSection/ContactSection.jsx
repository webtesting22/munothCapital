import React from "react";
import "./ContactSection.css";
import { Form, Input, Button } from "antd";
import { FaUser, FaEnvelope, FaPhone, FaComment, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
const ContactSection = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Form values:', values);
        // Handle form submission here
    };

    return (
       <>
       <div className="contact-section-container paddingTop100px">
                <div className="contact-section-content paddingSide">
                    <h3>Munoth Capital</h3>
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
                                    padding: '40px',
                                    borderRadius: '20px',
                                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
                                    border: '1px solid rgba(0, 0, 0, 0.05)',
                                    maxWidth: '500px',
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
                                        layout="vertical"
                                        size="large"
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
                                                    e.target.style.background = '#333';
                                                    e.target.style.transform = 'translateY(-2px)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.background = '#000';
                                                    e.target.style.transform = 'translateY(0)';
                                                }}
                                            >
                                                <FaEnvelope style={{ marginRight: '8px', fontSize: '16px' }} />
                                                Send Message
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