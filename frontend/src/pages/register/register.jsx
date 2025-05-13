import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from './register.module.css';
import Header from "../../assets/header";
import Footer from "../../assets/footer";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const res = await axios.post("https://humor404.onrender.com/api/users/register", {
                username,
                password
            });
            alert("Registration successful!");
            console.log(res.data);
            navigate("/login");
        } catch (err) {
            alert("Registration failed. Try a different username.");
            console.error(err);
        }
    };

    return (
        <div>
            <Header />
            <div className={styles.text}>
                <p>Register</p>
            </div>
            <div className={styles.form}>
                <div className={styles.textbox}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className={styles.textbox}>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
            <div className={styles.submit}>
                <button onClick={handleRegister}>
                    <p>Submit</p>
                </button>
            </div>
            <div>
                <div className={styles.subtext}>
                    <p>Already have an account?</p>
                </div>
                <div className={styles.submit}>
                    <button onClick={() => navigate("/login")}>
                        <p>Login</p>
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Register;