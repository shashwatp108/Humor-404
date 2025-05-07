import React from "react";
import styles from './header.module.css'


function Header (){
return (
    <div>
        <div className={styles.nav}>
            <h1 className={styles.title}>HUMOR 404</h1>
            <p className={styles.username}>username</p>
        </div>
    </div>
)
}

export default Header;