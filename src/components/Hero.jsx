import React from 'react';
import styles from './Hero.module.css';
import DotDistortionShader from './Experience/DotDistortionShader';

const Hero = () => {
    return (
        <section className={`section ${styles.heroSection}`}>
            <DotDistortionShader />
            <div className={`container ${styles.heroContainer}`}>

                <div className={styles.statusBadge}>
                    <span className={styles.statusDot}></span>
                    <span className={styles.statusText}>Open for projects</span>
                </div>

                <h1 className={styles.heroTitle}>
                    Digital <br /> Designer
                </h1>

                <p className={styles.heroSubtitle}>
                    A creative human from Amsterdam making digital experiences.
                </p>

            </div>
        </section>
    );
};

export default Hero;
