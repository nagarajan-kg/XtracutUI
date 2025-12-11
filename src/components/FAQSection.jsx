"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/FAQSection.module.css";
import { Marcellus, Poppins } from "next/font/google";

const ClosedArrow = "/icons/arrow-down.svg";
const OpenArrow = "/icons/arrow-up.svg";

const marcellus = Marcellus({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

const poppins = Poppins({
    weight: ["400"],
    subsets: ["latin"],
    display: "swap",
});

const FAQ_DATA = [
    {
        question: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
        answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet...",
        isOpen: true,
    },
    {
        question: "How long is the medical program duration?",
        answer:
            "The undergraduate medical program lasts five and a half years, including one year of internship.",
        isOpen: false,
    },
    {
        question: "What are the required eligibility criteria for admission?",
        answer:
            "Candidates must complete 10+2 with PCB subjects and meet minimum aggregate marks.",
        isOpen: false,
    },
    {
        question: "Is financial aid or scholarships available for students?",
        answer:
            "Yes, merit-based and need-based scholarship options are available.",
        isOpen: false,
    },
];

const FAQItem = ({ faq, index, toggleFAQ }) => {
    const defaultBgColor = "#EDEDED";
    const defaultBorder = "1.68px solid #FFFFFF";
    const activeBgColor = "#0071BC";
    const activeTextColor = "#FFFFFF";

    return (
        <div className={styles.faqItem}>
            <div
                className={styles.questionHeader}
                onClick={() => toggleFAQ(index)}
                style={{
                    background: faq.isOpen ? activeBgColor : defaultBgColor,
                    border: faq.isOpen ? "none" : defaultBorder,
                    borderRadius: faq.isOpen ? "10px 10px 0 0" : "10px",
                }}
            >
                <h3
                    className={`${styles.questionText} ${marcellus.className}`}
                    style={{
                        color: faq.isOpen ? activeTextColor : "#000000",
                    }}
                >
                    {faq.question}
                </h3>

                <div className={styles.arrowIconWrapper}>
                    <Image
                        src={faq.isOpen ? OpenArrow : ClosedArrow}
                        alt={faq.isOpen ? "Open Arrow" : "Closed Arrow"}
                        width={20}
                        height={20}
                        className={`${styles.arrowIcon} ${faq.isOpen ? styles.rotate : ""}`}
                    />
                </div>
            </div>
            <div className={`${styles.answerBox} ${faq.isOpen ? styles.open : ""}`}>
                <p className={`${styles.answerText} ${poppins.className}`}>
                    {faq.answer}
                </p>
            </div>
        </div>
    );
};

const FAQSection = () => {
    const [faqs, setFaqs] = useState(FAQ_DATA);

    const toggleFAQ = (index) => {
        setFaqs(
            faqs.map((faq, i) => {
                // Single-open behavior: toggle clicked FAQ, close all others
                if (i === index) {
                    return { ...faq, isOpen: !faq.isOpen };
                } else {
                    return { ...faq, isOpen: false };
                }
            })
        );
    };

    return (
        <section className={styles.faqSection}>
            <div className={styles.faqContainer}>
                <h2 className={`${styles.sectionTitle} ${marcellus.className}`}>
                    Frequently Asked Questions
                </h2>

                <div className={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            faq={faq}
                            index={index}
                            toggleFAQ={toggleFAQ}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
