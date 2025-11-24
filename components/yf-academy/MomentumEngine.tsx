"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Repeat,
  Users,
  Megaphone,
  Zap,
} from "lucide-react";

const momentumContent = [
  {
    icon: <Calendar className="w-7 h-7 md:w-8 md:h-8 text-primary" />,
    title: "30-Day Campaign Calendar",
    description: "A day-by-day plan to keep your campaign on track and engaging.",
  },
  {
    icon: <Repeat className="w-7 h-7 md:w-8 md:h-8 text-primary" />,
    title: "Weekly Update Templates",
    description: "Keep your investors and community informed with compelling updates.",
  },
  {
    icon: <Users className="w-7 h-7 md:w-8 md:h-8 text-primary" />,
    title: "Activate Your Personal Network",
    description: "Strategies to leverage your existing network for maximum impact.",
  },
  {
    icon: <Megaphone className="w-7 h-7 md:w-8 md:h-8 text-primary" />,
    title: "When and How to Use Ads",
    description: "A guide to paid advertising for your fundraising campaign.",
  },
  {
    icon: <Zap className="w-7 h-7 md:w-8 md:h-8 text-primary" />,
    title: "Maintain Hype Without Burnout",
    description: "Tips for staying energized and keeping your audience engaged.",
  },
];

const MomentumEngine = () => {
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
            Maintain Strong Momentum Throughout Your Raise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-body-text max-w-3xl mx-auto"
          >
            Keeping your campaign alive and thriving is key to a successful fundraise.
          </motion.p>
        </div>

        <div className="flex overflow-x-auto space-x-8 pb-8">
          {momentumContent.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-80 bg-card p-8 rounded-lg shadow-soft border border-card-border transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-3">{item.title}</h3>
              <p className="text-body-text text-base leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MomentumEngine;
