import React from 'react';
import styles from './Expertise.module.css';

const Expertise = () => {
    const services = [
        {
            title: "Websites",
            description: "Responsive websites and dashboards for your business."
        },
        {
            title: "Apps",
            description: "Designing mobile apps for iOS and Android users."
        },
        {
            title: "Design Systems",
            description: "Building robust and flexible design systems for easy scalability."
        }
    ];

    return (
        <section id="about" className={`section ${styles.expertiseSection}`}>
            <div className={`container`}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Expertise</h2>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardGlow}></div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDesc}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
