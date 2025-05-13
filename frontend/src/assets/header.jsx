import React from "react";
import styles from './header.module.css'
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  // Get user from localStorage
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div>
      <div className={styles.nav}>
        <div className={styles.home}>
        <button onClick={() => navigate("/")}>
          <h1 className={styles.title}>HUMOR 404</h1>
        </button>
        </div>
        <div className={styles.login}>
          {user ? (
            <div className={styles.loggedIn}>
              <p className={styles.username}>{user.username}</p>
              <button onClick={handleLogout}>
                <p className={styles.username}>Logout</p>
              </button>
            </div>
          ) : (
            <div className={styles.loginbutton}>
            <button onClick={() => navigate("/login")}>
              <p className={styles.username}>Login</p>
            </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
