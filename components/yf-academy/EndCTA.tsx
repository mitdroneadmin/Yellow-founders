"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const EndCTA = () => {
  return (
    <section className="py-20 md:py-32 bg-grey-light text-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-secondary"
        >
          Begin Y-F Academy Training Today
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-body-text max-w-2xl mx-auto"
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
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground font-bold py-5 px-12 rounded-lg text-xl transition-all duration-300 shadow-soft w-full sm:w-auto hover:bg-primary-hover"
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
