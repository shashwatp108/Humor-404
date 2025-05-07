import React from "react";
import styles from './home.module.css'
import Header from "../../assets/header";
import Footer from "../../assets/footer";


function Home() {
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <div className={styles.joke}>
                <p>You know why developers prefer dark mode? Because light attract bugs.</p>
                </div>
                <div className={styles.next}>
                    <button><img src="../../../public/next.png" alt="next" /></button>
                </div>
            </div>
            <div className={styles.add}>
                    <button>
                        <p>
                            Add new joke
                        </p>
                    </button>
            </div>
                <Footer />
        </div>
    )
}

export default Home;