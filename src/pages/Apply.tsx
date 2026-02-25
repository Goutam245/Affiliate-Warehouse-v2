import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Shield, Zap, Users } from "lucide-react";
import AnimatedOrbs from "@/components/AnimatedOrbs";
import SectionHeading from "@/components/SectionHeading";
import PageWrapper from "@/components/PageWrapper";
import ApprovalCallout from "@/components/ApprovalCallout";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.6 } };

const Apply = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageWrapper>
      <section className="relative py-20 md:py-32 overflow-hidden">
        <AnimatedOrbs />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionHeading badge="Application" title="Apply for Preferred Contractor Status" subtitle="Affiliate Warehouse trade account access is available exclusively to approved preferred contractors. This form is your formal application gateway — whether you are an existing preferred contractor registering for shared account access, or a business applying for preferred contractor status for the first time." />
          <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mx-auto text-center mt-4">
            Applications are reviewed based on suitability, compliance, and alignment with our standards. Only approved applicants will be granted access.
          </p>
        </div>
      </section>

      <ApprovalCallout />

      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div {...fadeUp}>
              {!submitted ? (
                <div className="glass-card rounded-2xl p-8 border-t-4 border-t-primary">
                  <h3 className="text-xl font-display font-semibold text-silver mb-2">Preferred Contractor Application — Formal Registration</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-6">
                    This form is for existing preferred contractors registering to use our shared national trade accounts, or for businesses formally applying for preferred contractor status. All applications are individually reviewed and assessed based on suitability, compliance, and alignment with our standards. Access is not automatic.
                  </p>
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                    {[
                      { label: "Business Name", name: "business", type: "text", placeholder: "Your Trade Business Pty Ltd" },
                      { label: "ABN", name: "abn", type: "text", placeholder: "00 000 000 000" },
                      { label: "Contact Name", name: "contact", type: "text", placeholder: "Full name" },
                      { label: "Email", name: "email", type: "email", placeholder: "you@business.com.au" },
                      { label: "Phone", name: "phone", type: "tel", placeholder: "0400 000 000" },
                      { label: "Trade Category", name: "trade", type: "text", placeholder: "Electrical / HVAC / Solar" },
                      { label: "Monthly Procurement Spend (approx.)", name: "spend", type: "text", placeholder: "$10,000 - $50,000" },
                    ].map((f) => (
                      <div key={f.name}>
                        <label className="text-muted-foreground text-xs font-medium mb-1.5 block">{f.label}</label>
                        <input
                          type={f.type}
                          placeholder={f.placeholder}
                          required
                          className="w-full bg-background border border-primary/20 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-text-muted focus:outline-none focus:border-primary/50 transition-colors"
                        />
                      </div>
                    ))}
                    <div>
                      <label className="text-muted-foreground text-xs font-medium mb-1.5 block">Current Wholesalers</label>
                      <textarea
                        placeholder="List your current wholesaler accounts..."
                        rows={3}
                        className="w-full bg-background border border-primary/20 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-text-muted focus:outline-none focus:border-primary/50 transition-colors resize-none"
                      />
                    </div>
                    <button type="submit" className="w-full py-3 rounded-lg bg-gradient-purple text-primary-foreground font-semibold transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] flex items-center justify-center gap-2">
                      Submit Formal Application <ArrowRight size={16} />
                    </button>
                    <span className="inline-block mt-1 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-medium">
                      Approval required
                    </span>
                  </form>
                </div>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-card rounded-2xl p-12 text-center border-t-4 border-t-mint">
                  <div className="w-16 h-16 rounded-full bg-mint/20 flex items-center justify-center mx-auto mb-6">
                    <Check size={32} className="text-mint" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-silver mb-3">Application Received</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Thank you — your application has been received and will be individually reviewed. We will contact you at your scheduled time to discuss your application and next steps. Please note that access is subject to approval.
                  </p>
                </motion.div>
              )}
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="space-y-6">
              <h3 className="text-2xl font-display font-bold text-gradient">What Happens Next?</h3>
              {[
                { step: "1", title: "We Review Your Application", desc: "Our team individually assesses your application based on suitability, compliance, and alignment with our standards." },
                { step: "2", title: "Approved Applicants Are Onboarded", desc: "If approved, we set up your account, connect you to wholesaler partners, and configure your dashboard." },
                { step: "3", title: "Savings Begin", desc: "Price monitoring starts automatically. You'll receive your first savings report within the first month." },
              ].map((s) => (
                <div key={s.step} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-purple flex items-center justify-center flex-shrink-0 font-mono font-bold text-primary-foreground text-sm">
                    {s.step}
                  </div>
                  <div>
                    <h4 className="text-silver font-semibold mb-1">{s.title}</h4>
                    <p className="text-muted-foreground text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
              <div className="glass-card rounded-xl p-6 mt-8">
                <div className="space-y-4">
                  {[
                    { icon: Shield, text: "Your data is encrypted and secure" },
                    { icon: Zap, text: "All applications individually assessed" },
                    { icon: Users, text: "Dedicated account manager for approved contractors" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <item.icon size={18} className="text-mint flex-shrink-0" />
                      <span className="text-silver text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Apply;
