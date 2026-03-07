import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import styles from './Work.module.css';

const Work = () => {
    const projects = [
        {
            title: "Nano Banana",
            meta: "Industrial Design · 2025",
            description: "A futuristic personal tech device that redefines minimalist ergonomics with a bold aesthetic.",
            image: "/projects/nano-banana.png",
            color: "yellow",
            size: "large"
        },
        {
            title: "Guidy",
            meta: "Templates · 2025",
            description: "Minimal Brand Guidelines template for creatives.",
            image: "/projects/guidy.png",
            color: "magenta",
            size: "medium"
        },
        {
            title: "Feature",
            meta: "Framer · 2025",
            description: "A premium SaaS template for modern product showcases.",
            image: "/projects/feature.png",
            color: "blue",
            size: "small"
        }
    ];

    return (
        <section id="work" className={`section ${styles.workSection}`}>
            <div className={`container`}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Selected<br />Work</h2>
                </div>

                <div className={styles.grid}>
                    {projects.map((proj, idx) => (
                        <div key={idx} className={`${styles.card} ${styles[proj.size]}`}>
                            <div className={`${styles.imagePlaceholder} ${styles[proj.color]}`}>
                                {proj.image ? (
                                    <img src={proj.image} alt={proj.title} className={styles.projectImage} />
                                ) : (
                                    <div className={styles.mockup}></div>
                                )}
                            </div>
                            <div className={styles.content}>
                                <div className={styles.metaRow}>
                                    <h3 className={styles.cardTitle}>{proj.title}</h3>
                                    <span className={styles.badge}>{proj.meta}</span>
                                </div>
                                <p className={styles.cardDesc}>{proj.description}</p>
                                <a href="#visit" className={styles.link}>
                                    Visit Project <ArrowUpRight size={16} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
