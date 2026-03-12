"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./Metrics.module.css";

const features = [
    { title: "Seamless Integration", description: "Connect all your departments and data sources effortlessly.", gradient: "linear-gradient(135deg, #3B82F6, #60A5FA)" },
    { title: "Real-time Sync", description: "Instant data updates across your entire organization.", gradient: "linear-gradient(135deg, #10B981, #34D399)" },
    { title: "Bank-grade Security", description: "Enterprise protection for your most sensitive information.", gradient: "linear-gradient(135deg, #8B5CF6, #A78BFA)" },
    { title: "Automated Workflows", description: "Eliminate manual data entry and streamline operations.", gradient: "linear-gradient(135deg, #EC4899, #F472B6)" },
];

export default function Metrics() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className={styles.section} ref={ref}>
            <div className="container">
                <div className={styles.header}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="section-label">Performance at Scale</span>
                        <h2 className="text-display" style={{ marginBottom: "16px" }}>
                            Built for <span className="gradient-text">growth</span>
                        </h2>
                        <p className="text-body-lg" style={{ maxWidth: "600px", margin: "0 auto" }}>
                            Our infrastructure is designed to handle immense scale while maintaining perfect reliability.
                        </p>
                    </motion.div>
                </div>

                <div className={styles.grid}>
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <div className={styles.cardInner}>
                                <div className={styles.title} style={{ backgroundImage: feature.gradient }}>
                                    {feature.title}
                                </div>
                                <div className={styles.description}>{feature.description}</div>
                            </div>
                            <div className={styles.glow} style={{ background: feature.gradient }}></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
