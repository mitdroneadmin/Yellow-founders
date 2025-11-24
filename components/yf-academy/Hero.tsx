"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center text-center overflow-hidden bg-background text-secondary py-20 md:py-32"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-secondary"
        >
          Y-F Academy, Your Fundraising Launchpad in Africa
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
          className="mt-6 text-lg md:text-xl text-body-text max-w-3xl mx-auto"
        >
          Master the art of fundraising, storytelling, investor outreach, and momentum building with a curriculum created for African founders.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10"
        >
          <Link href="/create" passHref>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary-foreground bg-primary rounded-lg shadow-soft transition-transform duration-300 ease-in-out transform hover:bg-primary-hover w-full sm:w-auto"
            >
              Start Learning Now
              <ArrowRight className="ml-3 h-6 w-6" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
