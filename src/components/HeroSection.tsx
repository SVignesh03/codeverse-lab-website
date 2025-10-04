"use client";

import { motion } from "framer-motion";
import type { TargetAndTransition } from "framer-motion";

const createTextVariants = (i: number): TargetAndTransition => ({
  opacity: 1,
  x: 0,
  transition: {
    delay: i * 0.1,
    duration: 0.6,
    ease: "easeOut",
  },
});

const paragraph =
  "Codeverse Lab helps you bring your ideas to life through thoughtful strategy, design, and development—crafted with care, from start to finish.";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 bg-black"
      >
        <source
          src="https://res.cloudinary.com/dau24dmlo/video/upload/v1759601661/world_ebtarv.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold font-space-grotesk mb-6 leading-tight tracking-wide flex flex-wrap justify-center">
          {[
            "Imagine,",
            "Design,",
            "and",
            "Build",
            "Your",
            "Vision",
            "with",
          ].map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={createTextVariants(i)}
              className="inline-block mr-1"
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            custom={7}
            initial={{ opacity: 0, x: 40 }}
            animate={createTextVariants(7)}
            className="relative inline-block ml-2"
          >
            Codeverse Lab
            <motion.img
              src="https://res.cloudinary.com/dau24dmlo/image/upload/v1759604048/underscore_wnmacg.svg"
              alt="Design"
              className="absolute left-0 bottom-[-10px] w-48 sm:w-64 md:w-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2, duration: 0.6 }}
            />
          </motion.span>
        </h1>

        {/* Subheading */}
        <div className="text-sm sm:text-lg md:text-xl mb-6 font-inter max-w-2xl">
          {paragraph.split(" ").map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={createTextVariants(i)}
              className="inline-block mr-1"
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.5 }}
        >
          <a href="/contact">
            <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-space-grotesk px-4 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer">
              Schedule a Free Consultation
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
