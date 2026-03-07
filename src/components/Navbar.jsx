import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.navbar}`}>
                <div className={styles.logo}>display</div>

                <nav className={styles.navLinks}>
                    <a href="#work" className={styles.navLink}>Work</a>
                    <a href="#about" className={styles.navLink}>About</a>
                    <a href="#blog" className={styles.navLink}>Blog</a>
                    <a href="#contact" className={styles.navLink}>Contact</a>
                </nav>

                <a href="#template" className={styles.ctaButton}>Get template</a>
            </div>
        </header>
    );
};

export default Navbar;
