import React from "react";
import styles from './footer.module.css'
import { useNavigate } from "react-router-dom";


function Footer (){
    const navigate = useNavigate();
return (
    <div>
        <div className={styles.footer} >
                <button onClick={() => navigate("/contact")}><p className={styles.work}>Got some work for me?</p></button>
                <button><p className={styles.coffee}>Buy me a coffee ☕?</p></button>
        </div>
    </div>
)
}

export default Footer;