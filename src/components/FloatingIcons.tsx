"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProductIcon from "./ProductIcon";
import styles from "./FloatingIcons.module.css";

const floatingApps = [
    { slug: "hris", name: "HRIS", color: "#6366F1", x: "8%", y: "15%", size: 68 },
    { slug: "pos", name: "POS", color: "#EC4899", x: "82%", y: "10%", size: 72 },
    { slug: "accounting", name: "Accounting", color: "#10B981", x: "5%", y: "55%", size: 60 },
    { slug: "erp", name: "ERP", color: "#F59E0B", x: "88%", y: "50%", size: 64 },
    { slug: "inventory", name: "Inventory", color: "#8B5CF6", x: "15%", y: "80%", size: 56 },
    { slug: "crm", name: "CRM", color: "#3B82F6", x: "78%", y: "82%", size: 62 },
    { slug: "payroll", name: "Payroll", color: "#14B8A6", x: "35%", y: "5%", size: 54 },
    { slug: "project-management", name: "Projects", color: "#EF4444", x: "65%", y: "88%", size: 58 },
];

const stats = [
    { value: "8+", label: "Solutions" },
    { value: "500+", label: "Clients" },
    { value: "99.9%", label: "Uptime" },
];

export default function FloatingIcons() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className={styles.section} ref={ref}>
            <div className={styles.floatingField}>
                {floatingApps.map((app, i) => (
                    <motion.div
                        key={app.name}
                        className={styles.floatingApp}
                        style={{
                            left: app.x,
                            top: app.y,
                            width: app.size,
                            height: app.size,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={
                            isInView
                                ? { opacity: 1, scale: 1 }
                                : { opacity: 0, scale: 0 }
                        }
                        transition={{
                            duration: 0.5,
                            delay: i * 0.08,
                            type: "spring",
                            stiffness: 200,
                        }}
                    >
                        <div
                            className={styles.appIconBg}
                            style={{ background: app.color }}
                        >
                            <ProductIcon slug={app.slug} size={app.size * 0.4} />
                        </div>
                    </motion.div>
                ))}

                <motion.div
                    className={styles.centerStats}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                        isInView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h2 className={styles.statsTitle}>A growing library of</h2>
                    <div className={styles.statsGrid}>
                        {stats.map((stat) => (
                            <div key={stat.label} className={styles.statItem}>
                                <span className={styles.statValue}>{stat.value}</span>
                                <span className={styles.statLabel}>{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
