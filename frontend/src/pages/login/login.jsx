import React, { useState } from "react";
import styles from './login.module.css';
import Header from "../../assets/header";
import Footer from "../../assets/footer";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        username,
        password,
      });

      if (response.data.message === "Login successful") {
        // Save full user object in localStorage
        localStorage.setItem('user', JSON.stringify(response.data.user));

        alert("Login successful!");
        navigate('/');
      } else {
        alert('Invalid credentials, please try again.');
      }
    } catch (error) {
      console.error("Error logging in", error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div>
      <Header />
      <div className={styles.text}>
        <p>Login</p>
      </div>
      <div className={styles.form}>
        <div className={styles.textbox}>
          <input
            type="text"
            name="username"
            id="1"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles.textbox}>
          <input
            type="password"
            name="password"
            id="2"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.submit}>
        <button onClick={handleSubmit}><p>Submit</p></button>
      </div>

      <div>
        <div className={styles.subtext}>
          <p>Don't have an account?</p>
        </div>
        <div className={styles.submit}>
          <button onClick={() => navigate('/register')}><p>Register</p></button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
