"use client";

import { motion } from "framer-motion";
import { Users, Phone, MessageSquare } from "lucide-react";
import Link from "next/link";

const communityFeatures = [
  {
    icon: <Users className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
    title: "Weekly Founder Calls",
    description: "Connect with fellow founders, share challenges, and celebrate wins.",
  },
  {
    icon: <Phone className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
    title: "One-on-One Support",
    description: "Get personalized guidance from the Yellow Founders team.",
  },
  {
    icon: <MessageSquare className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
    title: "WhatsApp Community Groups",
    description: "Join topic-specific groups for instant support and networking.",
  },
];

const Community = () => {
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
            Connect With Other African Founders
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-body-text max-w-3xl mx-auto"
          >
            You&apos;re not alone on this journey. Join a supportive community of founders who get it.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {communityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-lg shadow-soft border border-card-border text-center"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-3">{feature.title}</h3>
              <p className="text-body-text text-base leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/create" passHref>
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -2,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 shadow-soft w-full sm:w-auto hover:bg-primary-hover"
            >
              Join the Y-F Community
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Community;
