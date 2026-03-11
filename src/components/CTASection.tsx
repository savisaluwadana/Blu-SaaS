"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import styles from "./CTASection.module.css";

export default function CTASection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section className={styles.section} ref={ref}>
            <div className="container">
                <motion.div
                    className={styles.cta}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <span className={styles.label}>Ready to get started?</span>
                    <h2 className={styles.title}>
                        Never settle for
                        <br />
                        outdated software again.
                    </h2>
                    <p className={styles.subtitle}>
                        Use Blu for free as long as you like or get full access with any of
                        our paid plans.
                    </p>
                    <div className={styles.ctas}>
                        <button className="btn btn-accent btn-lg">
                            Get Started Free
                        </button>
                        <button className="btn btn-secondary btn-lg" style={{ borderColor: "rgba(255,255,255,0.2)", color: "white" }}>
                            Talk to Sales <ArrowRight size={16} />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
