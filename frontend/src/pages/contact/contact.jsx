import React from "react";
import styles from './contact.module.css'
import Header from "../../assets/header";
import Footer from "../../assets/footer";



function Contact (){
return (
    <div>
        <Header />
        <div className={styles.text}>
            <p>Write below to send me an email.</p>
        </div>
        <div className={styles.textbox}>
        <textarea name="text" rows="14" cols="100" wrap="soft"> </textarea>
        </div>
        <div className={styles.submit}>
            <button><p>Send</p></button>
        </div>
        <div className={styles.subtext}>
            <p>
            It may take a while but i will reply as soon as possible, dont worry!
            </p>
        </div>
        <Footer />
    </div>
)
}

export default Contact;