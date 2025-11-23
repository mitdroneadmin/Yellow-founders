"use client";

import { motion } from "framer-motion";
import { Users, Phone, MessageSquare } from "lucide-react";
import Link from "next/link";

const communityFeatures = [
  {
    icon: <Users className="h-8 w-8 md:h-10 md:w-10 text-amber-500" />,
    title: "Weekly Founder Calls",
    description: "Connect with fellow founders, share challenges, and celebrate wins.",
  },
  {
    icon: <Phone className="h-8 w-8 md:h-10 md:w-10 text-amber-500" />,
    title: "One-on-One Support",
    description: "Get personalized guidance from the Yellow Founders team.",
  },
  {
    icon: <MessageSquare className="h-8 w-8 md:h-10 md:w-10 text-amber-500" />,
    title: "WhatsApp Community Groups",
    description: "Join topic-specific groups for instant support and networking.",
  },
];

const Community = () => {
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
            Connect With Other African Founders
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
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
              className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 text-center"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-700 mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-base leading-relaxed">
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
                boxShadow: "0 0 20px rgba(251, 191, 36, 0.5)",
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 shadow-lg w-full sm:w-auto"
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