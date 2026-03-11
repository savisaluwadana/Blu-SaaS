"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./Testimonials.module.css";

const testimonials = [
    {
        quote:
            "Blu's HRIS completely transformed how we manage our 2,000+ employees. The onboarding automation alone saved us 40 hours per week.",
        name: "Sarah Chen",
        role: "VP of People Operations",
        company: "TechForward Inc.",
    },
    {
        quote:
            "We switched to Blu POS across 150 locations and saw a 30% reduction in checkout time. The real-time analytics are incredible.",
        name: "Marcus Rodriguez",
        role: "Director of Operations",
        company: "RetailNova",
    },
    {
        quote:
            "The accounting module handles our multi-entity, multi-currency needs flawlessly. Tax season is no longer a nightmare.",
        name: "Priya Sharma",
        role: "CFO",
        company: "GlobalTech Solutions",
    },
    {
        quote:
            "Blu's ERP unified our manufacturing, logistics, and sales into one platform. We finally have real-time visibility across the entire business.",
        name: "James Nakamura",
        role: "COO",
        company: "Precision Manufacturing Co.",
    },
    {
        quote:
            "The CRM's AI-powered lead scoring doubled our conversion rate in just three months. It's like having a data scientist on every sales call.",
        name: "Emily Watson",
        role: "Head of Sales",
        company: "ScaleUp Partners",
    },
    {
        quote:
            "Inventory accuracy went from 87% to 99.8% after implementing Blu. The demand forecasting feature is a game-changer.",
        name: "David Kim",
        role: "Supply Chain Director",
        company: "LogiFlow Corp.",
    },
];

export default function Testimonials() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section className={styles.section} id="testimonials" ref={ref}>
            <div className="container">
                <div className={styles.header}>
                    <span className="section-label">Testimonials</span>
                    <h2 className="text-display">
                        What our users
                        <br />
                        <span style={{ color: "var(--text-tertiary)" }}>
                            are saying.
                        </span>
                    </h2>
                </div>
            </div>

            <div className={styles.scrollContainer}>
                <div className={styles.scrollTrack}>
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                        >
                            <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
                            <div className={styles.author}>
                                <div className={styles.avatar}>
                                    {t.name.split(" ").map((n) => n[0]).join("")}
                                </div>
                                <div>
                                    <div className={styles.authorName}>{t.name}</div>
                                    <div className={styles.authorRole}>
                                        {t.role}
                                    </div>
                                    <div className={styles.authorCompany}>{t.company}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
