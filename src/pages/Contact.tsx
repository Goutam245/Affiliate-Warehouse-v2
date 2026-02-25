import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Mail, Phone, MapPin } from "lucide-react";
import AnimatedOrbs from "@/components/AnimatedOrbs";
import SectionHeading from "@/components/SectionHeading";
import PageWrapper from "@/components/PageWrapper";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.6 } };

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageWrapper>
      <section className="relative py-20 md:py-32 overflow-hidden">
        <AnimatedOrbs />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionHeading badge="Reach Out" title="Contact Us" subtitle="Have a question? Our team is here to help." />
        </div>
      </section>

      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div {...fadeUp}>
              {!submitted ? (
                <div className="glass-card rounded-2xl p-8 border-t-4 border-t-primary">
                  <h3 className="text-xl font-display font-semibold text-silver mb-6">Send a Message</h3>
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                    {[
                      { label: "Name", type: "text", placeholder: "Your name" },
                      { label: "Email", type: "email", placeholder: "you@business.com.au" },
                      { label: "Phone", type: "tel", placeholder: "0400 000 000" },
                      { label: "Subject", type: "text", placeholder: "How can we help?" },
                    ].map((f) => (
                      <div key={f.label}>
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
                      <label className="text-muted-foreground text-xs font-medium mb-1.5 block">Message</label>
                      <textarea
                        placeholder="Tell us more..."
                        rows={4}
                        required
                        className="w-full bg-background border border-primary/20 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-text-muted focus:outline-none focus:border-primary/50 transition-colors resize-none"
                      />
                    </div>
                    <button type="submit" className="w-full py-3 rounded-lg bg-gradient-purple text-primary-foreground font-semibold transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]">
                      Send Message
                    </button>
                  </form>
                </div>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-card rounded-2xl p-12 text-center border-t-4 border-t-mint">
                  <div className="w-16 h-16 rounded-full bg-mint/20 flex items-center justify-center mx-auto mb-6">
                    <Check size={32} className="text-mint" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-silver mb-3">Message Sent!</h3>
                  <p className="text-muted-foreground">We'll get back to you within 1 business day.</p>
                </motion.div>
              )}
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="space-y-8">
              <h3 className="text-2xl font-display font-bold text-gradient">Get in Touch</h3>
              {[
                { icon: Mail, title: "Email", value: "hello@affiliatewarehouse.com.au" },
                { icon: Phone, title: "Phone", value: "1300 AW TRADE (1300 29 87233)" },
                { icon: MapPin, title: "Office", value: "Sydney, New South Wales, Australia" },
              ].map((c) => (
                <div key={c.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <c.icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-silver font-semibold mb-1">{c.title}</h4>
                    <p className="text-muted-foreground text-sm">{c.value}</p>
                  </div>
                </div>
              ))}
              <div className="glass-card rounded-xl p-6">
                <h4 className="text-silver font-semibold mb-2">Business Hours</h4>
                <div className="space-y-1 text-muted-foreground text-sm">
                  <p>Monday — Friday: 8:00 AM — 6:00 PM AEST</p>
                  <p>Saturday: 9:00 AM — 1:00 PM AEST</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Contact;
