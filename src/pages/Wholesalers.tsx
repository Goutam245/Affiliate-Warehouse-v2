import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedOrbs from "@/components/AnimatedOrbs";
import SectionHeading from "@/components/SectionHeading";
import PageWrapper from "@/components/PageWrapper";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.6 } };

const wholesalers = [
  { name: "Voltex Electrical", category: "Electrical Supplies", desc: "One of Australia's largest independent electrical wholesalers with 30+ branches nationwide.", products: ["Cables & wiring", "Switchgear", "Lighting", "Power distribution"] },
  { name: "TradeZone", category: "Multi-Trade Supplies", desc: "Comprehensive trade supplies across electrical, HVAC, and solar sectors with competitive pricing.", products: ["HVAC equipment", "Electrical fittings", "Solar components", "Tools & accessories"] },
  { name: "Ideal Electrical", category: "Specialist Electrical", desc: "Premium electrical wholesaler focusing on quality brands and specialist trade products.", products: ["Premium cables", "Smart home products", "Industrial controls", "Safety equipment"] },
];

const alignments = [
  "We negotiate as a collective, not as individuals — giving you corporate-tier pricing power.",
  "Your existing wholesaler relationships are maintained and enhanced, never replaced.",
  "All pricing is transparent — you see exactly what each wholesaler offers.",
  "We continuously review and optimise partner relationships to ensure best-in-market pricing.",
];

const Wholesalers = () => (
  <PageWrapper>
    <section className="relative py-20 md:py-32 overflow-hidden">
      <AnimatedOrbs />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading badge="Partners" title="Our Wholesaler Network" subtitle="We partner with Australia's leading trade wholesalers to deliver unbeatable pricing." />
      </div>
    </section>

    <section className="pb-20 md:pb-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {wholesalers.map((w, i) => (
            <motion.div key={w.name} {...fadeUp} transition={{ delay: i * 0.15 }} className="glass-card glass-card-hover rounded-2xl p-8 transition-all">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">{w.category}</span>
              <h3 className="text-xl font-display font-bold text-silver mb-3">{w.name}</h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{w.desc}</p>
              <ul className="space-y-2">
                {w.products.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm">
                    <Check size={14} className="text-mint flex-shrink-0" />
                    <span className="text-silver">{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <SectionHeading badge="Alignment" title="Our Wholesaler Philosophy" />
        <div className="space-y-4">
          {alignments.map((a, i) => (
            <motion.div key={i} {...fadeUp} className="flex gap-4 items-start border-l-4 border-primary pl-6 py-3">
              <p className="text-silver leading-relaxed">{a}</p>
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeUp} className="mt-12 glass-card rounded-2xl p-8 border-l-4 border-mint">
          <p className="text-mint text-lg italic font-medium leading-relaxed">
            "Our goal is simple: ensure every trade business in Australia has access to the same pricing that large corporations enjoy. Collective power, individual benefit."
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-16 text-center">
        <Link to="/apply" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-purple text-primary-foreground font-semibold transition-all hover:shadow-[0_0_25px_rgba(6,255,165,0.3)] hover:scale-105">
          Apply for Preferred Contractor Status <ArrowRight size={18} />
        </Link>
        <div className="mt-3">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-medium">
            Approval required
          </span>
        </div>
    </section>
  </PageWrapper>
);

export default Wholesalers;
