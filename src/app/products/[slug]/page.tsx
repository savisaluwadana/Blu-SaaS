"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    ArrowRight,
    Check,
    ExternalLink,
} from "lucide-react";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./product.module.css";

export default function ProductPage() {
    const params = useParams();
    const slug = params.slug as string;
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        return (
            <>
                <Navbar />
                <div className={styles.notFound}>
                    <h1>Product not found</h1>
                    <Link href="/" className="btn btn-primary">
                        Go back home
                    </Link>
                </div>
                <Footer />
            </>
        );
    }

    const currentIndex = products.findIndex((p) => p.slug === slug);
    const nextProduct = products[(currentIndex + 1) % products.length];
    const prevProduct =
        products[(currentIndex - 1 + products.length) % products.length];

    return (
        <>
            <Navbar />
            <main className={styles.main}>
                {/* Hero */}
                <section className={styles.hero}>
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Link href="/#products" className={styles.backLink}>
                                <ArrowLeft size={16} />
                                All Solutions
                            </Link>
                        </motion.div>

                        <div className={styles.heroGrid}>
                            <motion.div
                                className={styles.heroContent}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                <span className={styles.categoryBadge}>
                                    {product.category}
                                </span>
                                <h1 className="text-hero">{product.name}</h1>
                                <p className={`text-body-lg ${styles.heroDescription}`}>
                                    {product.longDescription}
                                </p>
                                <div className={styles.heroCtas}>
                                    <button className="btn btn-primary btn-lg">
                                        Start Free Trial
                                    </button>
                                    <button className="btn btn-secondary btn-lg">
                                        Request Demo <ExternalLink size={16} />
                                    </button>
                                </div>
                            </motion.div>

                            <motion.div
                                className={styles.heroVisual}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                            >
                                <Image
                                    src={product.image}
                                    alt={`${product.name} dashboard`}
                                    width={800}
                                    height={560}
                                    className={styles.heroImage}
                                    priority
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className={styles.statsSection}>
                    <div className="container">
                        <div className={styles.statsGrid}>
                            {product.stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    className={styles.statCard}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                                >
                                    <span className={styles.statValue}>{stat.value}</span>
                                    <span className={styles.statLabel}>{stat.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className={styles.featuresSection}>
                    <div className="container">
                        <div className={styles.featuresHeader}>
                            <span className="section-label">Features</span>
                            <h2 className="text-display">
                                Everything you need,
                                <br />
                                <span style={{ color: "var(--text-tertiary)" }}>
                                    nothing you don&apos;t.
                                </span>
                            </h2>
                        </div>

                        <div className={styles.featuresGrid}>
                            {product.features.map((feature, i) => (
                                <motion.div
                                    key={feature}
                                    className={styles.featureItem}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.4 + i * 0.06 }}
                                >
                                    <div
                                        className={styles.featureCheck}
                                        style={{ background: product.color }}
                                    >
                                        <Check size={14} color="white" />
                                    </div>
                                    <span>{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Navigation */}
                <section className={styles.productNav}>
                    <div className="container">
                        <div className={styles.navGrid}>
                            <Link
                                href={`/products/${prevProduct.slug}`}
                                className={styles.navCard}
                            >
                                <ArrowLeft size={16} />
                                <div>
                                    <span className={styles.navCardLabel}>Previous</span>
                                    <span className={styles.navCardTitle}>
                                        {prevProduct.name}
                                    </span>
                                </div>
                            </Link>
                            <Link
                                href={`/products/${nextProduct.slug}`}
                                className={styles.navCard}
                                style={{ textAlign: "right" }}
                            >
                                <div>
                                    <span className={styles.navCardLabel}>Next</span>
                                    <span className={styles.navCardTitle}>
                                        {nextProduct.name}
                                    </span>
                                </div>
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
