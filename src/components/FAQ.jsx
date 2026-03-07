import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import styles from './FAQ.module.css';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}>
            <button
                className={styles.faqButton}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <h3 className={styles.question}>{question}</h3>
                <span className={styles.icon}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
            </button>
            <div className={styles.answerWrapper}>
                <div className={styles.answerInner}>
                    <p className={styles.answerText}>{answer}</p>
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "What is your design process?",
            answer: "My process is straightforward and collaborative. It starts with understanding your goals, audience, and vision. We then move into strategy, conceptualization, and iterative design before finally bringing everything to life. I deliver the project ready for launch."
        },
        {
            question: "How long does a project typically take?",
            answer: "A standard website project typically takes between 2 to 4 weeks depending on the complexity, number of pages, and how quickly we can iterate on feedback."
        },
        {
            question: "What services do you specialize in?",
            answer: "I specialize in UX/UI design, branding, and no-code development using platforms like Framer to ensure your digital presence is not only beautiful but performant and easy to manage."
        }
    ];

    return (
        <section className={`section`}>
            <div className={`container ${styles.faqContainer}`}>
                <div className={styles.header}>
                    <h2 className={styles.title}>FAQ</h2>
                </div>

                <div className={styles.list}>
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
