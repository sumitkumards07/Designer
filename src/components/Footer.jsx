import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer id="contact" className={`section ${styles.footer}`}>
            <div className={`container ${styles.container}`}>

                <div className={styles.cta}>
                    <div className={styles.ctaBadge}>
                        <span className={styles.redDot}></span>
                        <span>Let's talk</span>
                    </div>
                    <h2 className={styles.ctaTitle}>
                        Let's <br /> Connect.
                    </h2>
                    <p className={styles.ctaText}>
                        Ready to create something awesome together? <br /> Let's make it happen.
                    </p>
                    <a href="mailto:hello@example.com" className={styles.ctaButton}>
                        Send an email <ArrowUpRight size={16} />
                    </a>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.socials}>
                        <a href="#twitter" className={styles.socialLink}>Twitter/X</a>
                        <a href="#instagram" className={styles.socialLink}>Instagram</a>
                        <a href="#dribbble" className={styles.socialLink}>Dribbble</a>
                        <a href="#linkedin" className={styles.socialLink}>LinkedIn</a>
                    </div>

                    <div className={styles.copyright}>
                        <p>© Display. All rights reserved. Created by Marc.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
