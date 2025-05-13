import React, { useState } from "react";
import styles from './add.module.css';
import Header from "../../assets/header";
import Footer from "../../assets/footer";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Add() {
  const [jokeText, setJokeText] = useState("");  // State to store the joke text
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    // Get user data from localStorage
    const userId = localStorage.getItem('userId');

    // Check if user is logged in (userId should be available in localStorage)
    if (!userId) {
      alert("You need to log in to add a joke.");
      return navigate('/login');
    }
    
    try {
      // Send the joke data to the backend API
      const response = await axios.post('https://humor404.onrender.com/api/jokes/add', {
        joke: jokeText,
        user_id: userId,
      });

      // Check for successful response
      if (response.data.message === "Joke added successfully") {
        alert("Your joke has been added!");
        navigate('/'); // Redirect to home after successful joke addition
      } else {
        alert("Something went wrong while adding your joke. Please try again.");
      }
    } catch (error) {
      console.error("Error adding joke", error);
      alert("Error adding joke. Please try again.");
    }
  };

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.text}>
          <p>Write your joke below:</p>
        </div>
        <div className={styles.textbox}>
          <textarea
            name="text"
            rows="14"
            cols="100"
            wrap="soft"
            value={jokeText}
            onChange={(e) => setJokeText(e.target.value)} // Update the joke text state
          />
        </div>
        <div className={styles.submit}>
          <button onClick={handleSubmit}><p>Submit</p></button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Add;
