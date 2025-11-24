"use client";

import { motion, Variants } from "framer-motion";
import {
  Send,
  Heart,
  Users,
  MessageSquare,
  BarChart,
  Mail,
  Linkedin,
} from "lucide-react";
import React from "react";

const outreachStrategies = [
  {
    icon: <Send />,
    title: "Professionally Message Investors",
    description: "Master the art of cold outreach that gets replies.",
  },
  {
    icon: <Heart />,
    title: "Nurture Early Believers",
    description: "Build a loyal following before you even launch.",
  },
  {
    icon: <Users />,
    title: "Build Anticipation",
    description: "Generate excitement and urgency around your campaign.",
  },
  {
    icon: <MessageSquare />,
    title: "Create Micro-Communities",
    description: "Leverage WhatsApp & Telegram for direct engagement.",
  },
  {
    icon: <BarChart />,
    title: "Write Confident Investor Updates",
    description: "Keep your supporters engaged and informed.",
  },
];

const templateItems = [
  { icon: <Mail />, name: "Email Outreach Script" },
  { icon: <MessageSquare />, name: "WhatsApp Announcement" },
  { icon: <Linkedin />, name: "Social Media Templates" },
  { icon: <Send />, name: "First 10 Investor Messages" },
];

const InvestorOutreach = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 md:py-28 bg-grey-light text-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-secondary"
          >
            How to Communicate With Investors (African Market Focus)
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-body-text max-w-3xl mx-auto"
          >
            Actionable strategies for African startup fundraising.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            {outreachStrategies.map((strategy, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start p-6 bg-card rounded-lg border border-card-border"
              >
                <div className="flex-shrink-0 mr-5 text-primary">
                  {React.cloneElement(strategy.icon, { className: "h-6 w-6 md:h-8 md:w-8" })}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary">{strategy.title}</h3>
                  <p className="text-body-text mt-1">{strategy.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-card p-8 rounded-lg shadow-soft border border-primary/50"
          >
            <h3 className="text-2xl font-bold text-center mb-6 text-primary">
              Included Templates
            </h3>
            <div className="space-y-4">
              {templateItems.map((template, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-grey-light rounded-md"
                >
                  <div className="mr-4 text-primary">
                    {React.cloneElement(template.icon, { className: "h-6 w-6" })}
                  </div>
                  <span className="text-lg font-medium text-secondary">{template.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InvestorOutreach;
