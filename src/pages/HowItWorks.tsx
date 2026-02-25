import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedOrbs from "@/components/AnimatedOrbs";
import SectionHeading from "@/components/SectionHeading";
import PageWrapper from "@/components/PageWrapper";
import OurStorySection from "@/components/OurStorySection";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.6 } };

const steps = [
  {
    num: "01", title: "Apply for Preferred Contractor Status",
    desc: "Submit your formal application. All applications are individually assessed based on suitability, compliance, and alignment with our national contractor standards. Only approved preferred contractors may receive work from us and be granted access to the shared national trade accounts.",
    details: ["Business name and ABN", "Current wholesaler accounts", "Primary trade category (electrical, HVAC, solar)", "Average monthly procurement spend"],
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=85&fit=crop",
  },
  {
    num: "02", title: "Verification & Onboarding",
    desc: "Our team verifies your trade credentials and sets up your account. We connect you to our network of premium wholesaler partners.",
    details: ["ABN and trade license verification", "Account setup with partner wholesalers", "Dashboard access configuration", "Dedicated account manager assignment"],
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=85&fit=crop",
  },
  {
    num: "03", title: "Price Baseline Established",
    desc: "We capture your current pricing across all product categories to establish a clear baseline for measuring savings.",
    details: ["Current pricing catalog uploaded", "Product matching across wholesalers", "Baseline savings potential calculated", "Custom monitoring rules configured"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=85&fit=crop",
  },
  {
    num: "04", title: "Automated Monitoring Begins",
    desc: "Our system continuously monitors pricing across all connected wholesalers, identifying savings opportunities automatically.",
    details: ["Real-time price tracking", "Automated email and SMS alerts", "Weekly savings reports", "Dashboard with full visibility"],
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=85&fit=crop",
  },
  {
    num: "05", title: "You Save, We Earn",
    desc: "When you purchase through our negotiated pricing and save money, we charge a transparent 1.1% fee on the verified savings amount only.",
    details: ["Savings verified against baseline", "1.1% fee on savings only", "Monthly transparent invoicing", "Detailed savings breakdown provided"],
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85&fit=crop",
  },
];

const HowItWorks = () => (
  <PageWrapper>
    <section className="relative py-20 md:py-32 overflow-hidden">
      <AnimatedOrbs />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading badge="Process" title="How It Works" subtitle="From application to savings in five straightforward steps. No complexity, no hidden catches." />
      </div>
    </section>

    <OurStorySection />

    <section className="pb-20 md:pb-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-24 md:space-y-32">
          {steps.map((s, i) => (
            <motion.div key={s.num} {...fadeUp} transition={{ delay: i * 0.05 }} className={`grid lg:grid-cols-2 gap-12 items-center`}>
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <span className="absolute -translate-y-8 text-[120px] font-display font-bold text-primary/10 leading-none select-none hidden md:block">{s.num}</span>
                <div className="border-l-4 border-primary pl-6 relative z-10">
                  <h3 className="text-2xl md:text-4xl font-display font-bold text-foreground mb-4">{s.title}</h3>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{s.desc}</p>
                  <ul className="space-y-3">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-center gap-3 text-sm">
                        <Check size={16} className="text-mint flex-shrink-0" />
                        <span className="text-silver">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                <div className="rounded-2xl overflow-hidden border border-primary/20">
                  <img src={s.img} alt={s.title} className="w-full h-[350px] object-cover" loading="lazy" style={{ filter: "brightness(0.85) saturate(1.1)" }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-32 relative">
      <AnimatedOrbs />
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient mb-6">Ready to Apply?</h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">Submit your formal application for preferred contractor status. All applications are individually assessed.</p>
        <Link to="/apply" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-purple text-primary-foreground font-semibold transition-all hover:shadow-[0_0_25px_rgba(6,255,165,0.3)] hover:scale-105">
          Apply for Preferred Contractor Status <ArrowRight size={18} />
        </Link>
        <div className="mt-3">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-medium">
            Approval required
          </span>
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default HowItWorks;
