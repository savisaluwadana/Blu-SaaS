"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import ProductIcon from "./ProductIcon";
import styles from "./Hero.module.css";

const orbitItems = [
    { slug: "hris", color: "#6366F1" },
    { slug: "pos", color: "#EC4899" },
    { slug: "accounting", color: "#10B981" },
    { slug: "erp", color: "#F59E0B" },
    { slug: "inventory", color: "#8B5CF6" },
    { slug: "crm", color: "#3B82F6" },
    { slug: "payroll", color: "#14B8A6" },
    { slug: "project-management", color: "#EF4444" },
];

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>

                <motion.div
                    className={styles.heroIconStack}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    <div className={styles.iconOrbit}>
                        {orbitItems.map((item, i) => (
                            <motion.div
                                key={item.slug}
                                className={styles.orbitIcon}
                                style={{
                                    animationDelay: `${i * -3.75}s`,
                                    background: item.color,
                                }}
                            >
                                <ProductIcon slug={item.slug} size={18} color="white" />
                            </motion.div>
                        ))}
                        <div className={styles.centerIcon}>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                                <rect width="24" height="24" rx="6" fill="#0A0A0B" />
                                <path
                                    d="M7 8h4c1.5 0 2.5 1 2.5 2.25S12.5 12.5 11 12.5H7V8zm0 4.5h4.5c1.5 0 2.5 1 2.5 2.25S13 17 11.5 17H7v-4.5z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </div>
                </motion.div>

                <motion.h1
                    className={`text-hero ${styles.heroTitle}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    Enterprise software,{" "}
                    <span className="gradient-text">reimagined.</span>
                </motion.h1>

                <motion.p
                    className={`text-body-lg ${styles.heroSubtitle}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                >
                    A complete suite of cloud-native SaaS solutions — HRIS, POS,
                    Accounting, ERP, and more.
                    <br />
                    Built for modern enterprises. Loved by teams.
                </motion.p>

                <motion.div
                    className={styles.heroCtas}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                >
                    <a href="#products" className="btn btn-primary btn-lg">
                        Explore Solutions
                    </a>
                    <a href="#features" className="btn btn-secondary btn-lg">
                        See Features <ArrowRight size={16} />
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
