export interface Product {
    name: string;
    slug: string;
    shortName: string;
    description: string;
    longDescription: string;
    category: string;
    icon: string;
    image: string;
    color: string;
    gradient: string;
    features: string[];
    stats: { label: string; value: string }[];
}

export const categories = [
    "All",
    "HR & People",
    "Finance",
    "Operations",
    "Sales & CRM",
] as const;

export const products: Product[] = [
    {
        name: "HRIS System",
        slug: "hris",
        shortName: "HRIS",
        description:
            "Complete human resource information system for modern workplaces. Streamline employee management, onboarding, and HR workflows.",
        longDescription:
            "Transform your HR operations with Blu HRIS — the all-in-one human resource information system designed for modern enterprises. Manage employee lifecycle, payroll integration, benefits administration, and compliance tracking from a single, intuitive dashboard.",
        category: "HR & People",
        icon: "👥",
        image: "/images/products/hris.png",
        color: "#6366F1",
        gradient: "linear-gradient(135deg, #6366F1, #8B5CF6)",
        features: [
            "Employee Directory & Profiles",
            "Onboarding Automation",
            "Leave Management",
            "Performance Reviews",
            "Benefits Administration",
            "Compliance Tracking",
            "Self-Service Portal",
            "Advanced Reporting",
        ],
        stats: [
            { label: "Active Users", value: "50K+" },
            { label: "Companies", value: "1,200+" },
            { label: "Countries", value: "45+" },
        ],
    },
    {
        name: "POS System",
        slug: "pos",
        shortName: "POS",
        description:
            "Next-generation point of sale for retail, restaurants, and services. Fast, reliable, and beautifully designed.",
        longDescription:
            "Experience the future of retail with Blu POS — a cloud-native point of sale system that combines speed, reliability, and stunning design. From small boutiques to multi-location chains, handle transactions, inventory, and customer relationships seamlessly.",
        category: "Sales & CRM",
        icon: "🛍️",
        image: "/images/products/pos.png",
        color: "#EC4899",
        gradient: "linear-gradient(135deg, #EC4899, #F472B6)",
        features: [
            "Lightning-Fast Checkout",
            "Multi-Location Support",
            "Real-Time Inventory Sync",
            "Customer Loyalty Programs",
            "Offline Mode",
            "Staff Management",
            "Payment Processing",
            "Sales Analytics",
        ],
        stats: [
            { label: "Transactions/Day", value: "2M+" },
            { label: "Merchants", value: "8,500+" },
            { label: "Uptime", value: "99.99%" },
        ],
    },
    {
        name: "Accounting System",
        slug: "accounting",
        shortName: "Accounting",
        description:
            "Professional-grade accounting software with automated bookkeeping, invoicing, and financial reporting.",
        longDescription:
            "Take control of your finances with Blu Accounting — professional-grade accounting software built for growing businesses. Automate bookkeeping, create stunning invoices, track expenses, and generate financial reports that drive smarter decisions.",
        category: "Finance",
        icon: "📊",
        image: "/images/products/accounting.png",
        color: "#10B981",
        gradient: "linear-gradient(135deg, #10B981, #34D399)",
        features: [
            "Automated Bookkeeping",
            "Invoice Management",
            "Expense Tracking",
            "Bank Reconciliation",
            "Tax Compliance",
            "Financial Reports",
            "Multi-Currency Support",
            "Audit Trail",
        ],
        stats: [
            { label: "Invoices Sent", value: "10M+" },
            { label: "Businesses", value: "3,200+" },
            { label: "Accuracy", value: "99.9%" },
        ],
    },
    {
        name: "ERP System",
        slug: "erp",
        shortName: "ERP",
        description:
            "Unified enterprise resource planning that connects every department. One platform, total visibility.",
        longDescription:
            "Unify your entire organization with Blu ERP — the enterprise resource planning platform that connects every department, process, and data point. From manufacturing to distribution, get total visibility and control over your business operations.",
        category: "Operations",
        icon: "🏢",
        image: "/images/products/erp.png",
        color: "#F59E0B",
        gradient: "linear-gradient(135deg, #F59E0B, #FBBF24)",
        features: [
            "Unified Dashboard",
            "Supply Chain Management",
            "Manufacturing Planning",
            "Quality Control",
            "Procurement",
            "Asset Management",
            "Business Intelligence",
            "Workflow Automation",
        ],
        stats: [
            { label: "Enterprises", value: "800+" },
            { label: "Modules", value: "25+" },
            { label: "Integrations", value: "100+" },
        ],
    },
    {
        name: "Inventory Management",
        slug: "inventory",
        shortName: "Inventory",
        description:
            "Real-time inventory tracking across warehouses, stores, and channels. Never overstock or run out again.",
        longDescription:
            "Master your inventory with Blu Inventory Management — real-time tracking across warehouses, stores, and sales channels. Leverage AI-powered demand forecasting, automated reorder points, and multi-location management to optimize your supply chain.",
        category: "Operations",
        icon: "📦",
        image: "/images/products/inventory.png",
        color: "#8B5CF6",
        gradient: "linear-gradient(135deg, #8B5CF6, #A78BFA)",
        features: [
            "Real-Time Stock Tracking",
            "Multi-Warehouse Management",
            "Barcode & QR Scanning",
            "Demand Forecasting",
            "Automated Reorder Points",
            "Batch & Serial Tracking",
            "Stock Transfer Management",
            "Inventory Analytics",
        ],
        stats: [
            { label: "SKUs Managed", value: "50M+" },
            { label: "Warehouses", value: "5,000+" },
            { label: "Accuracy Rate", value: "99.8%" },
        ],
    },
    {
        name: "CRM Platform",
        slug: "crm",
        shortName: "CRM",
        description:
            "Build lasting customer relationships with AI-powered insights, pipeline management, and automation.",
        longDescription:
            "Grow your revenue with Blu CRM — the customer relationship management platform that combines AI-powered insights with intuitive pipeline management. Track every interaction, automate follow-ups, and close deals faster with data-driven strategies.",
        category: "Sales & CRM",
        icon: "🤝",
        image: "/images/products/crm.png",
        color: "#3B82F6",
        gradient: "linear-gradient(135deg, #3B82F6, #60A5FA)",
        features: [
            "Contact Management",
            "Pipeline Visualization",
            "Email Automation",
            "Lead Scoring",
            "Sales Forecasting",
            "Activity Tracking",
            "Custom Dashboards",
            "Integration Hub",
        ],
        stats: [
            { label: "Deals Closed", value: "500K+" },
            { label: "Sales Teams", value: "4,000+" },
            { label: "Revenue Tracked", value: "$2B+" },
        ],
    },
    {
        name: "Payroll System",
        slug: "payroll",
        shortName: "Payroll",
        description:
            "Automated payroll processing with tax calculations, compliance, and employee self-service.",
        longDescription:
            "Simplify payroll with Blu Payroll — automated processing that handles tax calculations, compliance requirements, and direct deposits. Give employees self-service access to pay stubs, tax documents, and benefits information.",
        category: "HR & People",
        icon: "💰",
        image: "/images/products/payroll.png",
        color: "#14B8A6",
        gradient: "linear-gradient(135deg, #14B8A6, #2DD4BF)",
        features: [
            "Automated Processing",
            "Tax Calculations",
            "Direct Deposits",
            "Compliance Management",
            "Employee Self-Service",
            "Pay Stub Generation",
            "Year-End Reporting",
            "Multi-State Support",
        ],
        stats: [
            { label: "Employees Paid", value: "200K+" },
            { label: "Companies", value: "2,500+" },
            { label: "On-Time Rate", value: "100%" },
        ],
    },
    {
        name: "Project Management",
        slug: "project-management",
        shortName: "Projects",
        description:
            "Collaborative project management with Kanban boards, Gantt charts, time tracking, and team collaboration.",
        longDescription:
            "Deliver projects on time with Blu Projects — collaborative project management built for teams that ship. Kanban boards, Gantt charts, time tracking, resource allocation, and real-time collaboration in one powerful platform.",
        category: "Operations",
        icon: "🎯",
        image: "/images/products/project-management.png",
        color: "#EF4444",
        gradient: "linear-gradient(135deg, #EF4444, #F87171)",
        features: [
            "Kanban Boards",
            "Gantt Charts",
            "Time Tracking",
            "Resource Allocation",
            "Sprint Planning",
            "File Sharing",
            "Team Chat",
            "Progress Reports",
        ],
        stats: [
            { label: "Projects Completed", value: "100K+" },
            { label: "Teams", value: "6,000+" },
            { label: "Tasks Managed", value: "5M+" },
        ],
    },
];
