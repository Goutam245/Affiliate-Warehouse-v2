import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedOrbs from "@/components/AnimatedOrbs";
import SectionHeading from "@/components/SectionHeading";
import PageWrapper from "@/components/PageWrapper";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.6 } };

const included = [
  "Corporate-tier wholesaler pricing",
  "Multi-wholesaler access (3+ partners)",
  "Automated price monitoring dashboard",
  "Real-time price drop alerts (email + SMS)",
  "Dedicated account manager",
  "Quarterly procurement reviews",
  "Custom product watchlists",
  "Monthly savings reports",
  "Priority support",
  "No lock-in contracts",
];

const faqs = [
  { q: "How is the 1.1% fee calculated?", a: "The fee is calculated on the verified savings amount only. For example, if you purchase a product for $100 through us that normally costs $120, you save $20. Our fee would be $0.22 (1.1% of $20)." },
  { q: "What if you can't save me money?", a: "If our pricing doesn't beat your current supplier on a particular product, you pay nothing. You only pay when you actually save." },
  { q: "Are there any upfront costs?", a: "No. There are zero upfront costs, no setup fees, and no monthly subscriptions. You only pay the 1.1% fee when verified savings are made." },
  { q: "How often am I invoiced?", a: "Invoicing is monthly. You receive a detailed breakdown of all purchases, savings, and fees for full transparency." },
];

const Pricing = () => (
  <PageWrapper>
    <section className="relative py-20 md:py-32 overflow-hidden">
      <AnimatedOrbs />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading badge="Pricing" title="Transparent, Simple Pricing" subtitle="One fee. No surprises. Only charged when we save you money." />

        {/* Main pricing card */}
        <motion.div {...fadeUp} className="max-w-2xl mx-auto glass-card rounded-3xl overflow-hidden">
          <div className="bg-gradient-purple p-8 text-center">
            <p className="text-primary-foreground/70 text-sm uppercase tracking-wider mb-2">Our Fee</p>
            <p className="font-mono text-6xl md:text-7xl font-bold text-primary-foreground">1.1%</p>
            <p className="text-primary-foreground/80 mt-2">of verified savings only</p>
          </div>
          <div className="p-8">
            <div className="grid sm:grid-cols-2 gap-3">
              {included.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-mint flex-shrink-0" />
                  <span className="text-silver">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link to="/apply" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-purple text-primary-foreground font-semibold transition-all hover:shadow-[0_0_25px_rgba(6,255,165,0.3)] hover:scale-105">
                Apply for Preferred Contractor Status <ArrowRight size={18} />
              </Link>
              <p className="text-muted-foreground text-xs mt-3">No credit card required. No lock-in.</p>
              <span className="inline-block mt-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-medium">
                Approval required
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Pricing Example */}
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading badge="Example" title="See Your Savings" subtitle="A real-world example of how our fee structure works." />
        <motion.div {...fadeUp} className="max-w-3xl mx-auto glass-card rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-muted-foreground text-sm mb-1">Standard Price</p>
              <p className="font-mono text-3xl font-bold text-silver">$10,000</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm mb-1">AW Price</p>
              <p className="font-mono text-3xl font-bold text-mint">$8,500</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm mb-1">Your Saving</p>
              <p className="font-mono text-3xl font-bold text-foreground">$1,500</p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-primary/20 text-center">
            <p className="text-muted-foreground text-sm">Our fee: 1.1% × $1,500 = <span className="text-primary font-semibold">$16.50</span></p>
            <p className="text-mint font-semibold mt-1">You keep $1,483.50 in savings</p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Pricing FAQ */}
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading badge="FAQ" title="Pricing Questions" />
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((f) => (
            <motion.div key={f.q} {...fadeUp} className="glass-card rounded-xl p-6">
              <h4 className="text-silver font-semibold mb-2">{f.q}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default Pricing;
