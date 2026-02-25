import { motion } from "framer-motion";

interface Props {
  badge?: string;
  title: string;
  subtitle?: string;
  gradient?: boolean;
  center?: boolean;
}

const SectionHeading = ({ badge, title, subtitle, gradient = true, center = true }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5 }}
    className={`mb-8 md:mb-10 ${center ? "text-center" : ""}`}
  >
    {badge && (
      <span className="inline-block px-3 py-1 rounded-full border border-primary/30 text-primary text-[11px] font-semibold tracking-[0.12em] uppercase mb-3">
        {badge}
      </span>
    )}
    <h2 className={`text-2xl md:text-[34px] lg:text-[40px] font-display font-bold leading-[1.1] tracking-tight ${gradient ? "text-gradient" : "text-foreground"}`}>
      {title}
    </h2>
    {subtitle && (
      <p className="mt-3 text-muted-foreground text-[15px] max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
    )}
  </motion.div>
);

export default SectionHeading;
