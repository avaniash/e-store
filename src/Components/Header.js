import React from 'react';
import styles from '@/styles/header.module.css';
import Container from './Container';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';

export default function Header() {
  return (
    <header className={`${styles.header}`}>
      <Container className={`${styles.container}`}>
        <div className={styles.logo}>
          E-Store <b>.</b>
        </div>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search for Products.." className={styles.searchInput} />
          <button className={styles.searchButton}>
            <FiSearch size={18} />
          </button>
        </div>
        <NavBar />
      </Container>
    </header>
  );
}

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navList}>
        <li className={styles.navLink}>Home</li>
        <li className={styles.navLink}>Store</li>
      </ul>
      <div className={styles.cartContainer}>
        <FiShoppingCart className={styles.cartIcon} />
        <span className={styles.cartBadge}>3</span>
      </div>
    </nav>
  );
};
