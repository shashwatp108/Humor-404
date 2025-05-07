import React from "react";
import styles from './footer.module.css'


function Footer (){
return (
    <div>
        <div className={styles.footer} >
                <button><p className={styles.work}>Got some work for me?</p></button>
                <button><p className={styles.coffee}>Buy me a coffee ☕?</p></button>
        </div>
    </div>
)
}

export default Footer;