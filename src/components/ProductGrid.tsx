"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products, categories } from "@/data/products";
import styles from "./ProductGrid.module.css";

export default function ProductGrid() {
    const [activeCategory, setActiveCategory] = useState<string>("All");

    const filtered =
        activeCategory === "All"
            ? products
            : products.filter((p) => p.category === activeCategory);

    return (
        <section className={styles.section} id="products">
            <div className="container-wide">
                <div className={styles.header}>
                    <span className="section-label">Our Solutions</span>
                    <h2 className="text-display">
                        Find the perfect solution
                        <br />
                        <span style={{ color: "var(--text-tertiary)" }}>for your business.</span>
                    </h2>
                </div>

                <div className={styles.filters}>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`pill ${activeCategory === cat ? "pill-active" : ""}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div className={styles.grid} layout>
                    <AnimatePresence mode="popLayout">
                        {filtered.map((product) => (
                            <motion.div
                                key={product.slug}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.35, type: "spring", stiffness: 300, damping: 30 }}
                            >
                                <Link
                                    href={`/products/${product.slug}`}
                                    className={styles.card}
                                >
                                    <div
                                        className={styles.cardPreview}
                                        style={{ background: product.gradient }}
                                    >
                                        <Image
                                            src={product.image}
                                            alt={`${product.name} dashboard`}
                                            width={600}
                                            height={400}
                                            className={styles.cardImage}
                                        />
                                        <div className={styles.cardOverlay}>
                                            <ArrowUpRight size={20} />
                                        </div>
                                    </div>
                                    <div className={styles.cardBody}>
                                        <div className={styles.cardMeta}>
                                            <span className={styles.cardCategory}>
                                                {product.category}
                                            </span>
                                        </div>
                                        <h3 className={styles.cardTitle}>{product.name}</h3>
                                        <p className={styles.cardDescription}>
                                            {product.description}
                                        </p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
