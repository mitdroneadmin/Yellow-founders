"use client";

import { motion, Variants } from "framer-motion";
import { CheckCircle } from "lucide-react";

const complianceItems = [
  "Disclose Accurate Information",
  "KYC and Verification Requirements",
  "Financial Transparency",
  "Explain Risks Clearly",
  "Listing Required Documents",
];

const ComplianceGuide = () => {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className="py-20 md:py-28 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500"
          >
            Be Fully Compliant and Transparent
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Raise money the right way by building trust and being transparent with your investors.
          </motion.p>
        </div>

        <div className="max-w-2xl mx-auto bg-gray-800 p-8 md:p-12 rounded-xl shadow-2xl border border-gray-700">
          <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center">
            Trust-Building Checklist
          </h3>
          <motion.ul
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="space-y-4"
          >
            {complianceItems.map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="flex items-center text-lg"
              >
                <CheckCircle className="w-6 h-6 mr-4 text-green-500 flex-shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default ComplianceGuide;