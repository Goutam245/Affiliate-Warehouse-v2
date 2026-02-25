import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const ApprovalCallout = () => (
  <motion.div {...fadeUp} className="max-w-3xl mx-auto my-8 px-4">
    <div className="relative rounded-xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl" />
      <div className="relative glass-card rounded-xl p-6 border border-primary/40">
        <div className="flex items-start gap-3">
          <AlertTriangle size={20} className="text-primary flex-shrink-0 mt-0.5" />
          <div className="space-y-2">
            <h4 className="text-silver font-display font-bold text-sm">Access is by approval only.</h4>
            <p className="text-muted-foreground text-xs leading-[1.6]">
              This platform is not open to general registration. Affiliate Warehouse shared trade accounts are available exclusively to our approved preferred contractors.
            </p>
            <ul className="space-y-1 text-xs text-silver">
              <li>— Existing preferred contractors may register to use our shared national accounts.</li>
              <li>— New applicants may formally apply for preferred contractor status.</li>
            </ul>
            <p className="text-muted-foreground text-xs leading-[1.6]">
              All applications are assessed individually. Approval is required in all cases.
            </p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default ApprovalCallout;
