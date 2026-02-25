import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const OurStorySection = () => (
  <section className="py-12 md:py-20 relative">
    <div className="container mx-auto px-4 md:px-6">
      <SectionHeading badge="Our Story" title="Built by the Trade. Scaled the Right Way." />
      <div className="grid lg:grid-cols-5 gap-8 items-center max-w-5xl mx-auto">
        <motion.div {...fadeUp} className="lg:col-span-3">
          <div className="border-l-4 border-primary pl-5 space-y-4">
            <p className="text-silver text-[15px] leading-[1.6]">
              Affiliate Warehouse was created alongside its sister company, Aussie Antennas and Electrical, after more than 25 years of working with trusted contractors across Australia. Aussie Antennas and Electrical grew nationally by partnering with preferred contractors — not by owning trucks in every city. The model worked.
            </p>
            <p className="text-silver text-[15px] leading-[1.6]">
              But as the work scaled, the purchasing didn't. Every contractor bought materials through their own trade accounts, paying small-business pricing with inconsistent discounts and layered mark-ups. National-level spending was being handled like hundreds of separate businesses.
            </p>
            <p className="text-silver text-[15px] leading-[1.6]">
              Affiliate Warehouse was built as a separate, independent company to fix that — one shared purchasing system, corporate-level supplier pricing, used by our preferred contractors nationwide. Same independence. Better pricing. A system that finally matches the scale of the work.
            </p>
          </div>
        </motion.div>
        <motion.div {...fadeUp} transition={{ delay: 0.15 }} className="lg:col-span-2">
          <div className="rounded-xl overflow-hidden border border-primary/20">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=85&fit=crop"
              alt="Australian trade professional at work"
              className="w-full h-[260px] md:h-[300px] object-cover"
              loading="lazy"
              style={{ filter: "brightness(0.85) saturate(1.1)" }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default OurStorySection;
