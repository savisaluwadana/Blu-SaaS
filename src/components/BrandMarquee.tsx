"use client";

import styles from "./BrandMarquee.module.css";
import { products } from "@/data/products";
import ProductIcon from "./ProductIcon";

export default function BrandMarquee() {
    const items = [...products, ...products];

    return (
        <section className={styles.section}>
            <div className={styles.marquee}>
                <div className={styles.track}>
                    {items.map((product, i) => (
                        <div key={`${product.slug}-${i}`} className={styles.item}>
                            <div
                                className={styles.itemIcon}
                                style={{ background: product.gradient }}
                            >
                                <ProductIcon slug={product.slug} size={26} />
                            </div>
                            <span className={styles.itemName}>{product.shortName}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
