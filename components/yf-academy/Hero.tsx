"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center text-center overflow-hidden bg-gray-900 text-white py-20 md:py-32"
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: "url('/african-pattern.svg')" }}></div>

      <motion.div
        style={{ y }}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500"
        >
          Y-F Academy, Your Fundraising Launchpad in Africa
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
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
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 193, 7, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-900 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:shadow-xl w-full sm:w-auto"
            >
              Start Learning Now
              <ArrowRight className="ml-3 h-6 w-6" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;