"use client";

import { motion } from "framer-motion";
import React from "react";
import {
  FileText,
  DollarSign,
  Briefcase,
  ShieldCheck,
  Clipboard,
  BookOpen,
} from "lucide-react";

const resources = [
  { icon: <FileText />, title: "Pitch Deck Templates" },
  { icon: <DollarSign />, title: "Financial Model Templates" },
  { icon: <Briefcase />, title: "Branding Assets" },
  { icon: <ShieldCheck />, title: "Legal Checklists" },
  { icon: <Clipboard />, title: "One-Pagers" },
  { icon: <BookOpen />, title: "Case Studies (Coming Soon)" },
];

const ResourceHub = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 md:py-28 bg-background text-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-secondary"
          >
            Downloadable Tools for African Founders
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-body-text max-w-3xl mx-auto"
          >
            A curated collection of resources to help you succeed.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-card p-8 rounded-lg shadow-soft flex flex-col items-center text-center border border-card-border hover:border-primary transition-colors duration-300"
            >
              <div className="text-primary mb-4">
                {React.cloneElement(resource.icon, { className: "h-10 w-10 md:h-12 md:w-12" })}
              </div>
              <h3 className="text-xl font-semibold text-secondary">{resource.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ResourceHub;
