"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  BarChart2,
  Users,
  Globe,
  Image,
  Video,
  FileText,
  HelpCircle,
  CheckSquare,
} from "lucide-react";
import React from "react";

const campaignPageItems = [
  { icon: <Sparkles />, text: "Your Startup Story" },
  { icon: <BarChart2 />, text: "Traction Indicators" },
  { icon: <Users />, text: "Founder and Team Profiles" },
  { icon: <Globe />, text: "Market Size Breakdown" },
  { icon: <Image />, text: "Product Visuals & Screenshots" },
  { icon: <Video />, text: "Pitch Video Script & Structure" },
  { icon: <FileText />, text: "Light Financial Summary" },
  { icon: <HelpCircle />, text: "Investor FAQ" },
  { icon: <CheckSquare />, text: "Campaign Page Checklist" },
];

import { Variants } from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const CampaignPage = () => {
  return (
    <section className="py-20 md:py-28 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500"
          >
            Build Your High-Conversion Campaign Page
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Learn how to showcase your startup, traction, and team in a way that attracts early supporters and investors.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaignPageItems.map((item, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg h-full flex flex-col items-center text-center border-2 border-gray-700 group-hover:border-amber-500 transition-all duration-300"
              >
                <div className="text-amber-500 mb-4">
                  {React.cloneElement(item.icon, { className: "h-8 w-8 md:h-10 md:w-10" })}
                </div>
                <h3 className="text-xl font-semibold text-white">{item.text}</h3>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignPage;