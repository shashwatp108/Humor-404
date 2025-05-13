import React, { useState } from "react";
import styles from './contact.module.css';
import Header from "../../assets/header";
import Footer from "../../assets/footer";
import axios from 'axios';

function Contact() {
  const [message, setMessage] = useState(""); // State to manage the message input

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the message to the backend API to handle the email sending
    try {
      const response = await axios.post('https://humor404.onrender.com/api/contact/send-email', {
        message: message,
      });

      if (response.data.message === "Email sent successfully") {
        alert("Your message has been sent! I'll get back to you soon.");
      } else {
        alert("Something went wrong while sending the email. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email", error);
      alert("Error sending email. Please try again.");
    }
  };

  return (
    <div>
      <Header />
      <div className={styles.text}>
        <p>Write below to send me an email.</p>
      </div>
      <div className={styles.textbox}>
        <textarea
          name="text"
          rows="14"
          cols="100"
          wrap="soft"
          value={message}
          onChange={(e) => setMessage(e.target.value)} // Update message state
        />
      </div>
      <div className={styles.submit}>
        <button onClick={handleSubmit}><p>Send</p></button>
      </div>
      <div className={styles.subtext}>
        <p>It may take a while, but I will reply as soon as possible, don't worry!</p>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;


