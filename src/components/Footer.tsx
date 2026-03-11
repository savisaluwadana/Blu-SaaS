import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import styles from "./Footer.module.css";

const footerLinks = {
    Products: [
        { label: "HRIS System", href: "/products/hris" },
        { label: "POS System", href: "/products/pos" },
        { label: "Accounting", href: "/products/accounting" },
        { label: "ERP System", href: "/products/erp" },
        { label: "Inventory", href: "/products/inventory" },
        { label: "CRM Platform", href: "/products/crm" },
        { label: "Payroll", href: "/products/payroll" },
        { label: "Project Management", href: "/products/project-management" },
    ],
    Company: [
        { label: "About", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Press", href: "#" },
        { label: "Partners", href: "#" },
    ],
    Resources: [
        { label: "Documentation", href: "#" },
        { label: "API Reference", href: "#" },
        { label: "Help Center", href: "#" },
        { label: "Community", href: "#" },
        { label: "Status", href: "#" },
    ],
    Legal: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookie Policy", href: "#" },
        { label: "GDPR", href: "#" },
    ],
};

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <div className={styles.logo}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                                <rect width="24" height="24" rx="6" fill="white" />
                                <path
                                    d="M7 8h4c1.5 0 2.5 1 2.5 2.25S12.5 12.5 11 12.5H7V8zm0 4.5h4.5c1.5 0 2.5 1 2.5 2.25S13 17 11.5 17H7v-4.5z"
                                    fill="#0A0A0B"
                                />
                            </svg>
                            <span className={styles.logoText}>Blu</span>
                        </div>
                        <p className={styles.tagline}>
                            Enterprise software, reimagined.
                            <br />
                            Built for the modern business.
                        </p>
                        <div className={styles.socials}>
                            <a href="#" className={styles.socialLink} aria-label="Twitter">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="GitHub">
                                <Github size={18} />
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="Email">
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>

                    <div className={styles.linkColumns}>
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div key={title} className={styles.column}>
                                <h4 className={styles.columnTitle}>{title}</h4>
                                <ul className={styles.columnList}>
                                    {links.map((link) => (
                                        <li key={link.label}>
                                            <Link href={link.href} className={styles.columnLink}>
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.bottom}>
                    <span className={styles.copyright}>
                        © Blu SaaS 2024–2026. All rights reserved.
                    </span>
                    <div className={styles.bottomLinks}>
                        <Link href="#" className={styles.bottomLink}>
                            Privacy Policy
                        </Link>
                        <Link href="#" className={styles.bottomLink}>
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
