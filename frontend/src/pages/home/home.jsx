import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import styles from './home.module.css';
import Header from "../../assets/header";
import Footer from "../../assets/footer";
import { useNavigate } from "react-router-dom";

function Home() {
    const [joke, setJoke] = useState("Loading joke...");
    const fetchedOnce = useRef(false);
    const navigate = useNavigate();

    // Function to fetch a joke from backend
    const fetchJoke = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/jokes/random');
            setJoke(response.data.joke);
        } catch (error) {
            console.error("Failed to fetch joke:", error);
            setJoke("Oops! Couldn’t load a joke. Try again.");
        }
    };
    
    // Fetch joke on component mount
    useEffect(() => {
        if (fetchedOnce.current) return;
        fetchedOnce.current = true;
        fetchJoke();
    }, []);

    return (
        <div>
            <Header />
            <div className={styles.container}>
                <div className={styles.joke}>
                    <p>{joke}</p>
                </div>
                <div className={styles.next}>
                    <button onClick={fetchJoke}>
                        {/* <img src="../../../public/next.png" alt="next" /> */}
                        <p>Next</p>
                    </button>
                </div>
            </div>
            <div className={styles.add}>
                <button onClick={() => navigate("/add")}>
                    <p>Add new joke</p>
                </button>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
