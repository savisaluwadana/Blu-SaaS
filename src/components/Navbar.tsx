"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import ProductIcon from "./ProductIcon";
import styles from "./Navbar.module.css";

const solutionLinks = [
    { slug: "hris", label: "HRIS System", href: "/products/hris" },
    { slug: "pos", label: "POS System", href: "/products/pos" },
    { slug: "accounting", label: "Accounting", href: "/products/accounting" },
    { slug: "erp", label: "ERP System", href: "/products/erp" },
    { slug: "inventory", label: "Inventory", href: "/products/inventory" },
    { slug: "crm", label: "CRM Platform", href: "/products/crm" },
    { slug: "payroll", label: "Payroll", href: "/products/payroll" },
    { slug: "project-management", label: "Project Management", href: "/products/project-management" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [solutionsOpen, setSolutionsOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            {/* Announcement Bar */}
            <div className={styles.announcement}>
                <span className={styles.announcementBadge}>New</span>
                <span>Blu SaaS Platform — Powering the future of enterprise software.</span>
                <span className={styles.announcementArrow}>→</span>
            </div>

            <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
                <div className={styles.navInner}>
                    <Link href="/" className={styles.logo}>
                        <div className={styles.logoIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <rect width="24" height="24" rx="6" fill="currentColor" />
                                <path
                                    d="M7 8h4c1.5 0 2.5 1 2.5 2.25S12.5 12.5 11 12.5H7V8zm0 4.5h4.5c1.5 0 2.5 1 2.5 2.25S13 17 11.5 17H7v-4.5z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <span className={styles.logoText}>Blu</span>
                    </Link>

                    <div className={styles.navLinks}>
                        <div
                            className={styles.dropdownWrapper}
                            onMouseEnter={() => setSolutionsOpen(true)}
                            onMouseLeave={() => setSolutionsOpen(false)}
                        >
                            <button className={styles.navLink}>
                                Solutions <ChevronDown size={14} />
                            </button>
                            {solutionsOpen && (
                                <div className={styles.dropdown}>
                                    {solutionLinks.map((item) => (
                                        <Link
                                            key={item.slug}
                                            href={item.href}
                                            className={styles.dropdownItem}
                                        >
                                            <span className={styles.dropdownIcon}>
                                                <ProductIcon slug={item.slug} size={16} color="currentColor" />
                                            </span>
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                        <a href="#products" className={styles.navLink}>Products</a>
                        <a href="#features" className={styles.navLink}>Features</a>
                        <a href="#testimonials" className={styles.navLink}>Testimonials</a>
                    </div>

                    <div className={styles.navActions}>
                        <button className="btn btn-primary btn-sm">Get Started</button>
                    </div>

                    <button
                        className={styles.mobileToggle}
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileOpen && (
                    <div className={styles.mobileMenu}>
                        <a href="#products" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>
                            Solutions
                        </a>
                        <a href="#products" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>
                            Products
                        </a>
                        <a href="#features" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>
                            Features
                        </a>
                        <a href="#testimonials" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>
                            Testimonials
                        </a>
                        <div className={styles.mobileCtas}>
                            <button className="btn btn-primary" style={{ width: "100%" }}>Get Started</button>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}
