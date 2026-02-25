import { motion } from "framer-motion";
import { BarChart3, Bell, TrendingDown, Shield, ArrowRight, Zap, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedOrbs from "@/components/AnimatedOrbs";
import SectionHeading from "@/components/SectionHeading";
import PageWrapper from "@/components/PageWrapper";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.6 } };

const features = [
  { icon: Eye, title: "Multi-Wholesaler Visibility", desc: "See pricing from all connected wholesalers side-by-side in one unified dashboard." },
  { icon: Bell, title: "Smart Alerts", desc: "Get notified instantly when prices drop below your thresholds via email or SMS." },
  { icon: TrendingDown, title: "Savings Analytics", desc: "Track your cumulative savings over time with detailed breakdowns by category." },
  { icon: BarChart3, title: "Price History Charts", desc: "View historical price trends to identify patterns and make informed purchasing decisions." },
  { icon: Shield, title: "Secure & Private", desc: "Your pricing data is encrypted and never shared. Only you see your dashboard." },
  { icon: Zap, title: "Real-Time Updates", desc: "Prices refresh automatically throughout the day so you always have the latest data." },
];

const PriceTracking = () => (
  <PageWrapper>
    <section className="relative py-20 md:py-32 overflow-hidden">
      <AnimatedOrbs />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading badge="Technology" title="Price Tracking Dashboard" subtitle="Automated price monitoring across all your connected wholesalers, updated in real-time." />
      </div>
    </section>

    {/* Dashboard mockup */}
    <section className="pb-20 md:pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div {...fadeUp} className="glass-card rounded-2xl overflow-hidden max-w-5xl mx-auto">
          <div className="bg-gradient-purple px-6 py-3 flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-primary-foreground/30" />
              <div className="w-3 h-3 rounded-full bg-primary-foreground/30" />
              <div className="w-3 h-3 rounded-full bg-primary-foreground/30" />
            </div>
            <span className="text-primary-foreground/70 text-xs font-mono">dashboard.affiliatewarehouse.com.au</span>
          </div>
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Products Tracked", value: "2,847" },
                { label: "Active Alerts", value: "12" },
                { label: "This Month's Savings", value: "$8,420" },
                { label: "Avg. Savings Rate", value: "18.3%" },
              ].map((s) => (
                <div key={s.label} className="glass-card rounded-xl p-4 text-center">
                  <p className="font-mono text-xl md:text-2xl font-bold text-foreground">{s.value}</p>
                  <p className="text-muted-foreground text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
            {/* Chart placeholder */}
            <div className="glass-card rounded-xl p-6 mb-6">
              <h4 className="text-silver font-semibold text-sm mb-4">Price Trend — 10mm² TPS Cable (100m)</h4>
              <div className="h-40 flex items-end gap-1">
                {[65, 70, 68, 72, 75, 60, 58, 55, 52, 50, 48, 45].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i >= 9 ? 'hsl(157 100% 51%)' : 'hsl(263 83% 58% / 0.5)' }} />
                ))}
              </div>
              <div className="flex justify-between mt-2 text-text-muted text-[10px]">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
              </div>
            </div>
            {/* Table */}
            <div className="rounded-xl border border-primary/20 overflow-hidden">
              <div className="grid grid-cols-5 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary">
                <span>Product</span><span>Wholesaler A</span><span>Wholesaler B</span><span>Wholesaler C</span><span>Best Price</span>
              </div>
              {[
                { p: "10mm² TPS Cable (100m)", a: "$285.00", b: "$268.50", c: "$241.50", best: "$241.50" },
                { p: "20A RCBO Single Pole", a: "$42.80", b: "$39.90", c: "$36.10", best: "$36.10" },
                { p: "LED Panel 600×600", a: "$68.50", b: "$62.30", c: "$55.20", best: "$55.20" },
                { p: "Split System 7.1kW", a: "$1,890", b: "$1,720", c: "$1,650", best: "$1,650" },
              ].map((r) => (
                <div key={r.p} className="grid grid-cols-5 px-4 py-3 border-t border-primary/10 text-sm">
                  <span className="text-silver truncate">{r.p}</span>
                  <span className="text-muted-foreground">{r.a}</span>
                  <span className="text-muted-foreground">{r.b}</span>
                  <span className="text-muted-foreground">{r.c}</span>
                  <span className="text-mint font-mono font-semibold">{r.best}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Features grid */}
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading badge="Features" title="Dashboard Features" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div key={f.title} {...fadeUp} transition={{ delay: i * 0.1 }} className="glass-card glass-card-hover rounded-2xl p-6 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <f.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-silver font-display font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28 text-center">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient mb-6">Start Tracking Prices Today</h2>
        <Link to="/apply" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-purple text-primary-foreground font-semibold transition-all hover:shadow-[0_0_25px_rgba(6,255,165,0.3)] hover:scale-105">
          Apply Now <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  </PageWrapper>
);

export default PriceTracking;
