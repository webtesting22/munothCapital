import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppBtn.css";

const WhatsAppBtn = () => {
    const handleWhatsAppClick = () => {
        // Replace with your actual WhatsApp number
        const phoneNumber = "919974017401"; // Added country code +91 for India
        const message = "Hello! I'd like to know more about Munoth Capital.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="whatsapp-btn-container">
            <button
                className="whatsapp-btn pulse-animation"
                onClick={handleWhatsAppClick}
                aria-label="Contact us on WhatsApp"
            >
                <FaWhatsapp className="whatsapp-icon" />
            </button>

           
        </div>
    )
}

export default WhatsAppBtn;