"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cloud, Puzzle, Brain, Shield, Zap, Globe } from "lucide-react";
import styles from "./FeatureShowcase.module.css";

const features = [
    {
        icon: Cloud,
        label: "Cloud‑Native",
        title: "Built for the cloud from day one.",
        description:
            "Every Blu solution runs on cloud-native infrastructure with auto-scaling, multi-region deployment, and 99.99% uptime SLA. No servers to manage, no downtime to worry about.",
        highlights: ["Auto-scaling", "Multi-region", "Zero downtime deploys"],
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
        icon: Puzzle,
        label: "Integrations",
        title: "Seamlessly connects to your stack.",
        description:
            "100+ pre-built integrations with popular tools. REST APIs, webhooks, and SDK support for custom connections. Your data flows where it needs to, when it needs to.",
        highlights: ["100+ integrations", "REST API", "Webhook support"],
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
        icon: Brain,
        label: "AI‑Powered",
        title: "Intelligence built into every workflow.",
        description:
            "From predictive analytics to smart automation, Blu embeds AI at every level. Get actionable insights, automate repetitive tasks, and make data-driven decisions effortlessly.",
        highlights: ["Predictive analytics", "Smart automation", "Insights"],
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
];

const bottomFeatures = [
    {
        icon: Shield,
        title: "Enterprise Security",
        description: "SOC 2 Type II, GDPR compliant, end-to-end encryption, and role-based access control.",
    },
    {
        icon: Zap,
        title: "Lightning Performance",
        description: "Sub-100ms response times with edge computing and intelligent caching layers.",
    },
    {
        icon: Globe,
        title: "Global Scale",
        description: "Serve users across 45+ countries with multi-language, multi-currency support.",
    },
];

export default function FeatureShowcase() {
    return (
        <section className={styles.section} id="features">
            <div className="container">
                <div className={styles.header}>
                    <span className="section-label">Platform Features</span>
                    <h2 className="text-display">
                        From inspiration
                        <br />
                        <span style={{ color: "var(--text-tertiary)" }}>to production.</span>
                    </h2>
                </div>

                <div className={styles.features}>
                    {features.map((feature, i) => {
                        const FeatureCard = () => {
                            const ref = useRef(null);
                            const isInView = useInView(ref, { once: true, margin: "-80px" });
                            const Icon = feature.icon;

                            return (
                                <motion.div
                                    ref={ref}
                                    className={styles.featureCard}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: i * 0.15 }}
                                >
                                    <div
                                        className={styles.featureVisual}
                                        style={{ background: feature.gradient }}
                                    >
                                        <div className={styles.featureVisualContent}>
                                            <div className={styles.mockupWindow}>
                                                <div className={styles.mockupDots}>
                                                    <span /><span /><span />
                                                </div>
                                                <div className={styles.mockupBody}>
                                                    {feature.highlights.map((h) => (
                                                        <div key={h} className={styles.mockupRow}>
                                                            <div className={styles.mockupIcon} />
                                                            <span>{h}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.featureContent}>
                                        <div className={styles.featureLabel}>
                                            <Icon size={16} />
                                            <span>{feature.label}</span>
                                        </div>
                                        <h3 className={styles.featureTitle}>{feature.title}</h3>
                                        <p className={styles.featureDescription}>
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        };
                        return <FeatureCard key={feature.label} />;
                    })}
                </div>

                <div className={styles.bottomGrid}>
                    {bottomFeatures.map((f, i) => {
                        const BottomCard = () => {
                            const ref = useRef(null);
                            const isInView = useInView(ref, { once: true, margin: "-60px" });
                            const Icon = f.icon;
                            return (
                                <motion.div
                                    ref={ref}
                                    className={styles.bottomCard}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                >
                                    <div className={styles.bottomIcon}>
                                        <Icon size={22} />
                                    </div>
                                    <h4 className={styles.bottomTitle}>{f.title}</h4>
                                    <p className={styles.bottomDescription}>{f.description}</p>
                                </motion.div>
                            );
                        };
                        return <BottomCard key={f.title} />;
                    })}
                </div>
            </div>
        </section>
    );
}
