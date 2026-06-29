'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-400 text-lg"
        >
          Hi, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mt-2"
        >
          Everardo Urquiza
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-xl md:text-2xl text-blue-400 mt-4"
        >
          AI Engineer • Data Engineer • ML Engineer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-gray-400 mt-6 leading-relaxed"
        >
          Building intelligent systems with Machine Learning, Data Engineering,
          and Cloud technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="flex gap-4 justify-center mt-8"
        >
          <a
            href="https://github.com/"
            target="_blank"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
          >
            GitHub
          </a>

          <a
            href="/documents/cv.pdf"
            className="px-6 py-3 border border-gray-600 hover:border-white rounded-lg transition"
          >
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}