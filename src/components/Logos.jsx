import React from 'react';
import styles from './Logos.module.css';

const Logos = () => {
    const compNames = ["Dribbble", "Mailchimp", "Notion", "Spotify", "Booking.com"];

    return (
        <section className={`section ${styles.logosSection}`}>
            <div className={`container ${styles.logosContainer}`}>
                <p className={styles.logosText}>Experience working with</p>
                <div className={styles.logoFlex}>
                    {compNames.map((name, i) => (
                        <div key={i} className={styles.logoItem}>
                            {/* For now, text representation if logos aren't available */}
                            <span>{name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Logos;
