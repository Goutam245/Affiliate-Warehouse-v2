import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import AnimatedOrbs from "@/components/AnimatedOrbs";
import SectionHeading from "@/components/SectionHeading";
import PageWrapper from "@/components/PageWrapper";

const faqs = [
  { q: "What is Affiliate Warehouse?", a: "Affiliate Warehouse is an Australian trade procurement service that leverages collective buying power to negotiate corporate-tier pricing with major wholesalers for electrical, HVAC, and solar contractors." },
  { q: "How does the 1.1% fee work?", a: "Our 1.1% fee is charged only on verified savings. If we negotiate a price of $85 for a product you currently pay $100 for, your saving is $15. Our fee would be $0.165 (1.1% of $15). You always come out ahead." },
  { q: "Are there any upfront costs or subscriptions?", a: "No. There are zero upfront costs, no setup fees, and no monthly subscriptions. You only pay when we save you money." },
  { q: "Which wholesalers do you work with?", a: "We currently partner with Voltex Electrical, TradeZone, and Ideal Electrical, with more partners being added regularly. Our network covers electrical, HVAC, and solar supplies." },
  { q: "Can I keep my existing wholesaler accounts?", a: "Absolutely. We enhance your existing relationships, we don't replace them. Your accounts remain yours. We simply negotiate better pricing through collective buying power." },
  { q: "Is there a lock-in contract?", a: "No. There are no lock-in contracts, no minimum terms, and no exit fees. You can cancel at any time." },
  { q: "How does the price tracking dashboard work?", a: "Our dashboard shows real-time pricing across all connected wholesalers. You can set custom price alerts, view historical trends, and compare prices side-by-side." },
  { q: "Is access open to any trade business?", a: "No. Access to Affiliate Warehouse shared trade accounts is strictly limited to our approved preferred contractors. Businesses may formally apply for preferred contractor status, which is assessed based on suitability, compliance, and alignment with our standards. Approval is required in all cases before any access is granted." },
  { q: "How do I apply for preferred contractor status?", a: "You may submit a formal application through our Apply page. All applications are individually assessed based on suitability, compliance, and alignment with our national contractor standards. Only approved applicants are granted access." },
  { q: "How long does the application process take?", a: "The application form takes about 2 minutes. Review and assessment typically takes 2-3 business days. All applications are individually assessed." },
  { q: "How do you protect my business data?", a: "All data is encrypted in transit and at rest. Your pricing information is never shared with other members or third parties. We comply with Australian Privacy Act requirements." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const filtered = faqs.filter(f => f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase()));

  return (
    <PageWrapper>
      <section className="relative py-20 md:py-32 overflow-hidden">
        <AnimatedOrbs />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionHeading badge="Support" title="Frequently Asked Questions" subtitle="Everything you need to know about Affiliate Warehouse." />
          <div className="max-w-xl mx-auto relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="text"
              placeholder="Search questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-card border border-primary/20 rounded-xl pl-12 pr-4 py-3 text-sm text-foreground placeholder:text-text-muted focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="space-y-3">
            {filtered.map((f, i) => (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass-card rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-silver font-medium text-sm pr-4">{f.q}</span>
                  <ChevronDown size={18} className={`text-primary flex-shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-primary/10 pt-4">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground mt-8">No matching questions found. Try a different search term.</p>
          )}
        </div>
      </section>
    </PageWrapper>
  );
};

export default FAQ;
