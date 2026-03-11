import {
    Users,
    ShoppingBag,
    BarChart3,
    Building2,
    Package,
    Handshake,
    Wallet,
    Target,
    type LucideIcon,
} from "lucide-react";

export const productIconMap: Record<string, LucideIcon> = {
    hris: Users,
    pos: ShoppingBag,
    accounting: BarChart3,
    erp: Building2,
    inventory: Package,
    crm: Handshake,
    payroll: Wallet,
    "project-management": Target,
};

interface ProductIconProps {
    slug: string;
    size?: number;
    color?: string;
    strokeWidth?: number;
}

export default function ProductIcon({
    slug,
    size = 24,
    color = "white",
    strokeWidth = 2,
}: ProductIconProps) {
    const Icon = productIconMap[slug];
    if (!Icon) return null;
    return <Icon size={size} color={color} strokeWidth={strokeWidth} />;
}
