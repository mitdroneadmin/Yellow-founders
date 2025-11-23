"use client";

import { motion, Variants } from "framer-motion";
import {
  FileText,
  TrendingUp,
  Lightbulb,
  Briefcase,
  Users,
} from "lucide-react";
import React from "react";

const starterPackItems = [
  {
    icon: <FileText className="h-8 w-8 md:h-10 md:w-10 text-amber-500" />,
    title: "Craft a Compelling Pitch",
    description:
      "Learn to articulate your vision and business model in a way that resonates with investors.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 md:h-10 md:w-10 text-amber-500" />,
    title: "Explain Traction Simply",
    description:
      "Showcase your progress and momentum with clear, concise metrics that prove your potential.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 md:h-10 md:w-10 text-amber-500" />,
    title: "Document Your Problem & Solution",
    description:
      "Clearly define the problem you're solving and why your solution is the best fit for the market.",
  },
  {
    icon: <Briefcase className="h-8 w-8 md:h-10 md:w-10 text-amber-500" />,
    title: "Prepare Your Pitch Materials",
    description:
      "Get your one-page summary, financial projections, and other essential documents ready for investors.",
  },
  {
    icon: <Users className="h-8 w-8 md:h-10 md:w-10 text-amber-500" />,
    title: "Understand Investor Mindset",
    description:
      "Gain insights into what early-stage investors are looking for and how to build strong relationships.",
  },
];

const fadeInAnimation: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};

const StarterPack = () => {
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
            Y-F Starter Pack: Essentials Before You Raise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Everything you need to build a strong foundation for your fundraising campaign.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {starterPackItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-amber-500 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-700 mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StarterPack;