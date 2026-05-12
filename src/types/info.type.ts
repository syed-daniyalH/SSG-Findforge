export interface InfoCardProps {
    name: string;
    number?: number;
    description: string;
    variant?: "default" | "gradient";
    gridSpan?: string; // e.g., "lg:col-span-8" or "lg:col-span-4"
}

