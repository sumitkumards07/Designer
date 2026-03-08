import React from 'react';
import styles from './Testimonials.module.css';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Sophie M.",
            role: "Founder",
            text: "He transformed our vision into a beautiful, functional design. His attention to detail and creativity are unmatched."
        },
        {
            name: "Chris L.",
            role: "Product Manager",
            text: "Working with Elias was a breeze... delivering a stunning website on time and exceeding our expectations."
        },
        {
            name: "David K.",
            role: "CEO",
            text: "Elias's design work is always fresh and innovative. He consistently delivers projects that wow our clients and users."
        }
    ];

    return (
        <section className={`section`}>
            <div className={`container`}>
                <div className={styles.scrollContainer}>
                    <div className={styles.scrollTrack}>
                        {[...testimonials, ...testimonials].map((test, index) => (
                            <div key={index} className={styles.card}>
                                <p className={styles.quote}>"{test.text}"</p>
                                <div className={styles.author}>
                                    <div className={styles.avatar}></div>
                                    <div className={styles.authorInfo}>
                                        <p className={styles.name}>{test.name}</p>
                                        <p className={styles.role}>{test.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
