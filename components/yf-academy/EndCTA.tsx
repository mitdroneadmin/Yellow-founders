"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const EndCTA = () => {
  return (
    <section className="py-20 md:py-32 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500"
        >
          Begin Y-F Academy Training Today
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
        >
          Take the first step towards mastering your fundraising and bringing your vision to life.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <Link href="/create" passHref>
            <motion.button
              animate={{
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(251, 191, 36, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-gray-900 font-bold py-5 px-12 rounded-full text-xl transition-all duration-300 shadow-xl w-full sm:w-auto"
            >
              Start Your Journey
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default EndCTA;