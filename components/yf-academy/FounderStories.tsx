"use client";

import { motion } from "framer-motion";
import { Video, Mic, Star } from "lucide-react";
import React from "react";

const stories = [
  { icon: <Video />, title: "Video Testimonials" },
  { icon: <Mic />, title: "Founder Interviews" },
  { icon: <Star />, title: "Campaign Highlights" },
];

const FounderStories = () => {
  return (
    <section className="py-20 md:py-28 bg-grey-light text-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-secondary"
          >
            Success Stories from African Founders (Coming Soon)
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-body-text max-w-3xl mx-auto"
          >
            Be inspired by the journeys of founders who have successfully raised on Yellow Founders.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative bg-card p-8 rounded-lg shadow-soft border border-card-border overflow-hidden"
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-primary mb-4">
                  {React.cloneElement(story.icon, { className: "h-10 w-10 md:h-12 md:w-12" })}
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-3">{story.title}</h3>
                <p className="text-body-text">Content coming soon...</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderStories;
