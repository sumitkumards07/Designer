import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import styles from './Work.module.css';

const Work = () => {
    const projects = [
        {
            title: "Donnelly Dashboard",
            meta: "Construction Management · 2025",
            description: "A comprehensive project management dashboard tracking budget, issues, and tasks for real estate development.",
            image: "/projects/donnelly.png",
            color: "yellow",
            size: "large"
        },
        {
            title: "Jira Roadmap",
            meta: "Agile Planning · 2025",
            description: "An intuitive roadmap view for tracking epics, sprint progress, and team capacity across multiple milestones.",
            image: "/projects/jira.png",
            color: "magenta",
            size: "medium"
        },
        {
            title: "CodeBattle",
            meta: "Interactive Platform · 2025",
            description: "A gamified coding platform ('Code is Warfare') empowering developers to master skills through tactical challenges.",
            image: "/projects/codebattle.png",
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
