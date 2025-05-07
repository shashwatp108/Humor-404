import React from "react";
import styles from './add.module.css'
import Header from "../../assets/header";
import Footer from "../../assets/footer";


function Add (){
return (
    <div>
        <Header />
        <div className={styles.container}>
        <div className={styles.text}>
            <p>Write your joke below:</p>
        </div>
        <div className={styles.textbox}>
            {/* <input type="text" /> */}
            <textarea name="text" rows="14" cols="100" wrap="soft"> </textarea>
        </div>
        <div className={styles.submit}>
            <button><p>Submit</p></button>
        </div>
        </div>
        <Footer />
    </div>
) 
}

export default Add;