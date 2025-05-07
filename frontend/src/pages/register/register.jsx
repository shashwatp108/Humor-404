import React from "react";
import styles from './register.module.css'
import Header from "../../assets/header";
import Footer from "../../assets/footer";


function Register() {
    return (
        <div>
            <Header />
            <div className={styles.text}>
                <p>Register</p>
            </div>
            <div className={styles.form}>
            <div className={styles.textbox}>
                    {/* <input type="username" /> */}
                    <input type="text" name="username" id="1" placeholder="Username"/>
                </div>
                <div className={styles.textbox}>
                    {/* <input type="password" /> */}
                    <input type="password" name="password" id="2" placeholder="Password"/>
                </div>
            </div>
                <div className={styles.submit}>
                    <button><p>Submit</p></button>
                </div>

            <div>
                <div className={styles.subtext}>
                    <p>Already have an account?</p>
                </div>
                <div className={styles.submit}>
                    <button><p>Login</p></button>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Register;