import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, X, ArrowRight, Zap, Shield, TrendingDown, Users, BarChart3, Bell, Lock, FileCheck } from "lucide-react";
import AnimatedOrbs from "@/components/AnimatedOrbs";
import SectionHeading from "@/components/SectionHeading";
import PageWrapper from "@/components/PageWrapper";
import OurStorySection from "@/components/OurStorySection";
import ApprovalCallout from "@/components/ApprovalCallout";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

/* ── HERO ─────────────────────────────────────────────────────── */
const Hero = () => (
  <section className="relative min-h-[85vh] flex items-center overflow-hidden">
    <AnimatedOrbs />
    <div className="absolute inset-0 gradient-border rounded-3xl m-3 md:m-6 pointer-events-none" />
    <div className="container mx-auto px-4 md:px-6 relative z-10 py-16 md:py-0">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 text-muted-foreground text-xs font-medium mb-4">
            <span className="text-[10px] font-bold text-primary bg-primary/20 px-1.5 py-0.5 rounded"><img src="images" alt="" /></span>
            Australian Trade Procurement Network
          </span>
          <h1 className="text-3xl md:text-[44px] lg:text-[56px] font-display font-bold leading-[1.1] tracking-tight mb-4">
            <span className="text-gradient-purple italic">Collective Buying<br />Power</span>
            <br />
            <span className="text-foreground">for Australian Trade<br />Businesses</span>
          </h1>
          <p className="text-muted-foreground text-[15px] md:text-base leading-[1.6] max-w-lg mb-5">
            Corporate-tier wholesaler access, automated price monitoring, and transparent fee structures — built specifically for electrical, HVAC, and solar contractors.
          </p>
          <div className="flex flex-wrap gap-3 mb-5">
            {["No Lock-ins", "No Saving = No Fee", "Price Alerts"].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-mint text-xs font-medium">
                <Check size={12} /> {t}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 mb-3">
            <Link to="/apply" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-purple text-primary-foreground font-semibold text-sm transition-all hover:shadow-[0_0_20px_rgba(6,255,165,0.3)] hover:scale-105">
              Apply for Preferred Contractor Status
            </Link>
            <Link to="/how-it-works" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-mint/40 text-mint font-semibold text-sm transition-all hover:bg-mint/10">
              See How It Works
            </Link>
          </div>
          {/* <p className="text-muted-foreground text-[11px] leading-relaxed max-w-sm">
            Applications are individually assessed. Access is granted to approved contractors only.
          </p> */}
          <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-[10px] font-medium">
            Approval required
          </span>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="relative">
          <div className="rounded-2xl overflow-hidden border-2 border-primary/30 glow-purple">
            <img
              src="https://forklifttrucktrainingsolutions.co.uk/wp-content/uploads/2025/03/forklift_training_a_beginners_essential_guide-.webp"
              alt="Trade warehouse"
              className="w-full h-[280px] md:h-[380px] object-cover"
              loading="eager"
            />
          </div>
          <div className="flex gap-2 mt-3 justify-center">
            {[
              { value: "1.1%", label: "Service Fee", color: "text-mint" },
              { value: "3+", label: "Wholesalers", color: "text-primary" },
              { value: "$0", label: "If No Saving", color: "text-mint" },
            ].map((s) => (
              <div key={s.label} className="glass-card rounded-lg px-4 py-2 text-center min-w-[80px]">
                <p className={`font-mono text-base font-bold ${s.color}`}>{s.value}</p>
                <p className="text-muted-foreground text-[10px]">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ── MARQUEE ──────────────────────────────────────────────────── */
const marqueeItems = ["⚡ Electrical", "❄️ HVAC", "☀️ Solar", "TradeZone", "Voltex", "Ideal Electrical", "No Lock-ins", "Price Monitoring", "1.1% Fee"];
const Marquee = () => (
  <div className="bg-gradient-purple py-2.5 overflow-hidden">
    <div className="flex animate-marquee whitespace-nowrap">
      {[...marqueeItems, ...marqueeItems].map((item, i) => (
        <span key={i} className={`mx-5 text-xs font-semibold ${i % 2 === 0 ? "text-primary-foreground" : "text-mint"}`}>
          {item} •
        </span>
      ))}
    </div>
  </div>
);

/* ── HOW IT WORKS ─────────────────────────────────────────────── */
const steps = [
  { num: "01", title: "Apply in 60 Seconds", desc: "Complete our simple online application with your business details, ABN, and current wholesaler information. Quick, easy, and obligation-free.", img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=85&fit=crop", checks: ["60-second application", "ABN verification", "No obligations"] },
  { num: "02", title: "We Negotiate Pricing", desc: "We leverage collective buying power to negotiate corporate-tier pricing with major wholesalers on your behalf.", img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=85&fit=crop", checks: ["Bulk negotiation", "Multiple wholesalers", "Best-in-market rates"] },
  { num: "03", title: "Automated Price Monitoring", desc: "Our automated system tracks prices across all connected wholesalers in real-time, identifying savings opportunities instantly.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=85&fit=crop", checks: ["Real-time tracking", "Automated alerts", "Dashboard access"] },
  { num: "04", title: "You Purchase as Normal", desc: "Continue purchasing from your existing wholesalers as normal. When our pricing beats your current supplier, you switch and save.", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=85&fit=crop", checks: ["No workflow changes", "Same wholesalers", "Seamless transition"] },
  { num: "05", title: "Transparent Fee Settlement", desc: "We charge a transparent 1.1% fee only on verified savings. No savings means no fee — it's that simple.", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85&fit=crop", checks: ["1.1% on savings only", "Monthly invoicing", "Full transparency"] },
];

const StepsSection = () => (
  <section className="py-12 md:py-20 bg-card relative overflow-hidden">
    <div className="container mx-auto px-4 md:px-6">
      <SectionHeading badge="Process" title="How It Works" subtitle="Five simple steps to start saving on trade procurement." />
      <div className="space-y-12 md:space-y-16">
        {steps.map((s, i) => (
          <motion.div key={s.num} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }} className="grid lg:grid-cols-2 gap-8 items-center">
            <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
              <div className="relative">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-8 h-8 rounded-full bg-gradient-purple flex items-center justify-center text-primary-foreground font-mono font-bold text-xs flex-shrink-0">
                    {s.num}
                  </span>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-foreground leading-[1.1]">{s.title}</h3>
                </div>
                <p className="text-muted-foreground text-[15px] mb-4 leading-[1.6]">{s.desc}</p>
                <ul className="space-y-1.5">
                  {s.checks.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-xs">
                      <Check size={13} className="text-mint flex-shrink-0" />
                      <span className="text-silver">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
              <div className="rounded-xl overflow-hidden border border-primary/20 relative">
                <img src={s.img} alt={s.title} className="w-full h-[220px] md:h-[260px] object-cover" loading="lazy" style={{ filter: "brightness(0.85) saturate(1.1)" }} />
                <div className="absolute inset-0 bg-primary/5 mix-blend-overlay pointer-events-none" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ── STATS ─────────────────────────────────────────────────────── */
const stats = [
  { value: "500+", label: "Trade Members" },
  { value: "$2.4M", label: "Total Savings" },
  { value: "3+", label: "Major Wholesalers" },
  { value: "98%", label: "Client Satisfaction" },
];

const StatsSection = () => (
  <section className="py-10 md:py-14 bg-gradient-purple-wide relative overflow-hidden">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
        {stats.map((s, i) => (
          <motion.div key={s.label} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.08 }} className="text-center">
            <p className="font-mono text-3xl md:text-4xl font-bold text-mint mb-1">{s.value}</p>
            <p className="text-primary-foreground/80 text-xs font-medium">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ── PRICE TRACKING PREVIEW ───────────────────────────────────── */
const DashboardPreview = () => (
  <section className="py-12 md:py-20 relative">
    <AnimatedOrbs />
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <SectionHeading badge="Dashboard" title="Price Tracking Dashboard" subtitle="Compare pricing across all connected wholesalers from one unified dashboard." />
      <motion.div {...fadeUp} className="glass-card rounded-2xl overflow-hidden max-w-4xl mx-auto">
        <div className="bg-gradient-purple px-5 py-2.5 flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-primary-foreground/30" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary-foreground/30" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary-foreground/30" />
          </div>
          <span className="text-primary-foreground/70 text-[10px] font-mono">price-monitor.affiliatewarehouse.com.au</span>
        </div>
        <div className="p-5 md:p-6">
          <div className="grid grid-cols-3 gap-3 mb-5">
            {[
              { label: "Products Tracked", value: "2,847", icon: BarChart3 },
              { label: "Active Alerts", value: "12", icon: Bell },
              { label: "Avg. Savings", value: "18.3%", icon: TrendingDown },
            ].map((s) => (
              <div key={s.label} className="glass-card rounded-lg p-3 text-center">
                <s.icon size={16} className="text-primary mx-auto mb-1.5" />
                <p className="font-mono text-lg font-bold text-foreground">{s.value}</p>
                <p className="text-muted-foreground text-[10px]">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-primary/20 overflow-hidden">
            <div className="grid grid-cols-4 gap-0 bg-primary/10 px-3 py-1.5 text-[11px] font-semibold text-primary">
              <span>Product</span><span>Current</span><span>AW Price</span><span>Savings</span>
            </div>
            {[
              { product: "10mm² TPS Cable (100m)", current: "$285.00", aw: "$241.50", savings: "-15.3%" },
              { product: "20A RCBO Single Pole", current: "$42.80", aw: "$36.10", savings: "-15.7%" },
              { product: "LED Panel 600×600 40W", current: "$68.50", aw: "$55.20", savings: "-19.4%" },
              { product: "Split System 7.1kW", current: "$1,890.00", aw: "$1,650.00", savings: "-12.7%" },
            ].map((r) => (
              <div key={r.product} className="grid grid-cols-4 gap-0 px-3 py-2 border-t border-primary/10 text-xs">
                <span className="text-silver truncate">{r.product}</span>
                <span className="text-muted-foreground">{r.current}</span>
                <span className="text-foreground font-medium">{r.aw}</span>
                <span className="text-mint font-mono font-semibold">{r.savings}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ── COMPARISON TABLE ─────────────────────────────────────────── */
const comparisonRows = [
  "Corporate-tier pricing", "Multi-wholesaler access", "Automated price monitoring",
  "Real-time price alerts", "Transparent fee structure", "No lock-in contracts",
  "Dedicated account manager", "Quarterly procurement reviews",
];

const ComparisonSection = () => (
  <section className="py-12 md:py-20 bg-card">
    <div className="container mx-auto px-4 md:px-6">
      <SectionHeading badge="Compare" title="Standard vs Affiliate Warehouse" subtitle="See how Affiliate Warehouse stacks up against managing your own accounts." />
      <motion.div {...fadeUp} className="max-w-3xl mx-auto rounded-xl border border-primary/20 overflow-hidden">
        <div className="grid grid-cols-3">
          <div className="col-span-1 p-3 bg-card" />
          <div className="p-3 text-center font-semibold text-muted-foreground text-xs">Standard Account</div>
          <div className="p-3 text-center font-semibold text-primary-foreground bg-gradient-purple text-xs rounded-tr-xl">Affiliate Warehouse</div>
        </div>
        {comparisonRows.map((row, i) => (
          <div key={row} className={`grid grid-cols-3 border-t border-primary/10 ${i % 2 === 0 ? "bg-card" : "bg-background"}`}>
            <div className="p-3 text-silver text-xs">{row}</div>
            <div className="p-3 flex justify-center">
              {i < 2 ? <Check size={15} className="text-muted" /> : <X size={15} className="text-destructive/60" />}
            </div>
            <div className="p-3 flex justify-center">
              <Check size={15} className="text-mint" />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

/* ── FEE SECTION ──────────────────────────────────────────────── */
const FeeSection = () => (
  <section className="py-12 md:py-20 relative">
    <AnimatedOrbs />
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <SectionHeading badge="Transparent Pricing" title="Transparent, Simple Pricing" subtitle="Our 1.1% fee is charged only on verified savings. No savings = no fee." />
      <div className="grid md:grid-cols-3 gap-5 max-w-3xl mx-auto">
        {[
          { title: "No Savings", fee: "$0", desc: "If we can't beat your current pricing, you pay absolutely nothing.", color: "border-t-primary" },
          { title: "With Savings", fee: "1.1%", desc: "A small percentage of the verified savings amount. You always come out ahead.", color: "border-t-mint" },
          { title: "No Lock-in", fee: "Free", desc: "Cancel anytime. No exit fees, no minimum terms, no penalties.", color: "border-t-secondary" },
        ].map((c) => (
          <motion.div key={c.title} {...fadeUp} className={`glass-card glass-card-hover rounded-xl p-6 border-t-4 ${c.color} text-center transition-all`}>
            <p className="font-mono text-3xl font-bold text-foreground mb-1.5">{c.fee}</p>
            <h3 className="text-base font-display font-semibold text-silver mb-2">{c.title}</h3>
            <p className="text-muted-foreground text-xs leading-[1.6]">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ── NO LOCK-IN ───────────────────────────────────────────────── */
const NoLockIn = () => (
  <section className="py-12 md:py-20 bg-card">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
        <motion.div {...fadeUp}>
          <SectionHeading badge="Freedom" title="No Lock-in Contracts" subtitle="" center={false} />
          <div className="space-y-5">
            {[
              { icon: Lock, title: "Cancel Anytime", desc: "No exit fees, no minimum terms. Leave whenever you want." },
              { icon: Shield, title: "Risk-Free", desc: "Try our service with zero financial commitment. If it doesn't work for you, simply walk away." },
              { icon: Users, title: "Your Relationships", desc: "We enhance your wholesaler relationships, we don't replace them. Your accounts remain yours." },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-silver font-semibold text-sm mb-0.5">{item.title}</h4>
                  <p className="text-muted-foreground text-xs leading-[1.6]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div {...fadeUp} transition={{ delay: 0.15 }} className="glass-card rounded-xl p-6 border-l-4 border-mint">
          <blockquote className="text-silver text-[15px] italic leading-[1.6]">
            "We believe in earning your business every single day. If we're not saving you money, we don't deserve your fee."
          </blockquote>
          <p className="mt-3 text-mint font-semibold text-xs">— Affiliate Warehouse Team</p>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ── WHOLESALER ALIGNMENT ─────────────────────────────────────── */
const WholesalerAlignmentSection = () => (
  <section className="py-12 md:py-20">
    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
      <SectionHeading badge="Philosophy" title="Wholesaler Alignment" subtitle="We work alongside your wholesalers, not against them. Our approach strengthens existing relationships." />
      <div className="space-y-3">
        {[
          "We negotiate as a collective, not as individuals — giving you corporate-tier pricing power.",
          "Your existing wholesaler relationships are maintained and enhanced, never replaced.",
          "All pricing is transparent — you see exactly what each wholesaler offers.",
          "We continuously review and optimise partner relationships to ensure best-in-market pricing.",
        ].map((a, i) => (
          <motion.div key={i} {...fadeUp} className="border-l-4 border-primary pl-5 py-2">
            <p className="text-silver text-[15px] leading-[1.6]">{a}</p>
          </motion.div>
        ))}
      </div>
      <motion.div {...fadeUp} className="mt-8 glass-card rounded-xl p-6 border-l-4 border-mint">
        <p className="text-mint text-[15px] italic font-medium leading-[1.6]">
          "Our goal is simple: ensure every trade business in Australia has access to the same pricing that large corporations enjoy. Collective power, individual benefit."
        </p>
      </motion.div>
    </div>
  </section>
);

/* ── TESTIMONIALS ─────────────────────────────────────────────── */
const testimonials = [
  { name: "James Mitchell", role: "Electrical Contractor, Sydney", quote: "Affiliate Warehouse saved us over $42,000 in our first year. The price monitoring alone is worth it.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&fit=crop&crop=face" },
  { name: "Sarah Chen", role: "HVAC Business Owner, Melbourne", quote: "Finally, a procurement service that's transparent. No hidden fees, no lock-ins. Just real savings.", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80&fit=crop&crop=face" },
  { name: "David Thompson", role: "Solar Installer, Brisbane", quote: "The dashboard lets me compare pricing across 3 wholesalers instantly. Game changer for our quoting process.", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80&fit=crop&crop=face" },
];

const TestimonialsSection = () => (
  <section className="py-12 md:py-20 relative">
    <AnimatedOrbs />
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <SectionHeading badge="Testimonials" title="What Our Clients Say" />
      <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div key={t.name} {...fadeUp} transition={{ delay: i * 0.1 }} className="glass-card glass-card-hover rounded-xl p-6 transition-all">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-primary/30" />
              <div>
                <p className="text-silver font-semibold text-xs">{t.name}</p>
                <p className="text-muted-foreground text-[10px]">{t.role}</p>
              </div>
            </div>
            <p className="text-muted-foreground text-xs italic leading-[1.6]">"{t.quote}"</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ── FORMS SECTION ────────────────────────────────────────────── */
const FormsSection = () => (
  <section className="py-12 md:py-20 bg-card">
    <div className="container mx-auto px-4 md:px-6">
      <SectionHeading badge="Apply" title="Get Started Today" subtitle="Choose the option that suits you best." />
      <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {[
          { title: "Quick Enquiry", border: "border-t-primary", fields: ["Name", "Email", "Message"], button: "Submit Enquiry" },
          { title: "Request a Callback", border: "border-t-mint", fields: ["Name", "Phone", "Best Time"], button: "Request Callback" },
          { title: "Preferred Contractor Application — Formal Registration", border: "border-t-secondary", fields: ["Business Name", "ABN", "Email"], button: "Submit Formal Application" },
        ].map((form) => (
          <motion.div key={form.title} {...fadeUp} className={`glass-card rounded-xl p-6 border-t-4 ${form.border}`}>
            <h3 className="text-sm font-display font-semibold text-silver mb-1.5">{form.title}</h3>
            {form.title.includes("Preferred Contractor") && (
              <p className="text-muted-foreground text-[10px] leading-[1.6] mb-3">
                This form is for existing preferred contractors registering to use our shared national trade accounts, or for businesses formally applying for preferred contractor status. All applications are individually reviewed and assessed based on suitability, compliance, and alignment with our standards. Access is not automatic.
              </p>
            )}
            <div className="space-y-3">
              {form.fields.map((f) => (
                <div key={f}>
                  <label className="text-muted-foreground text-[10px] font-medium mb-1 block">{f}</label>
                  <input
                    type="text"
                    placeholder={f}
                    className="w-full bg-background border border-primary/20 rounded-lg px-3 py-2 text-xs text-foreground placeholder:text-text-muted focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
              ))}
              <button className="w-full py-2.5 rounded-lg bg-gradient-purple text-primary-foreground font-semibold text-xs transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]">
                {form.button}
              </button>
              <span className="inline-block mt-0.5 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-[9px] font-medium">
                Approval required
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ── COMPLIANCE ───────────────────────────────────────────────── */
const ComplianceSection = () => (
  <section className="py-10 md:py-14">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-3xl mx-auto">
        {[
          { icon: Shield, label: "ABN Verified" },
          { icon: FileCheck, label: "Fully Insured" },
          { icon: Lock, label: "Data Encrypted" },
          { icon: Zap, label: "Australian Owned" },
        ].map((c) => (
          <motion.div key={c.label} {...fadeUp} className="text-center">
            <c.icon size={22} className="text-mint mx-auto mb-1.5" />
            <p className="text-silver text-xs font-medium">{c.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ── DISCLAIMER ───────────────────────────────────────────────── */
const Disclaimer = () => (
  <section className="py-6 border-t border-primary/10">
    <div className="container mx-auto px-4 md:px-6">
      <p className="text-text-muted text-[10px] leading-relaxed max-w-3xl mx-auto text-center">
        Disclaimer: All savings figures are illustrative and based on historical data. Actual savings may vary depending on product mix, order volume, and wholesaler pricing. Affiliate Warehouse Pty Ltd acts as a procurement intermediary and does not guarantee specific savings outcomes. All pricing is subject to change. Please refer to our terms of service for full details.
      </p>
    </div>
  </section>
);

/* ── INDEX PAGE ───────────────────────────────────────────────── */
const Index = () => (
  <PageWrapper>
    <Hero />
    <Marquee />
    <StepsSection />
    <StatsSection />
    <OurStorySection />
    <ApprovalCallout />
    <DashboardPreview />
    <ComparisonSection />
    <FeeSection />
    <NoLockIn />
    <WholesalerAlignmentSection />
    <TestimonialsSection />
    <FormsSection />
    <ComplianceSection />
    <Disclaimer />
  </PageWrapper>
);

export default Index;
