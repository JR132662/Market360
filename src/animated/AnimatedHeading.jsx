import React from 'react';
import { motion } from 'framer-motion';

const AnimatedHeading = ({ text }) => {
  const letters = text.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.h2
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-3xl sm:text-5xl lg:text-6xl mt-6 tracking-wide flex justify-center"
      style={{ overflow: 'hidden' }}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child} style={{ whiteSpace: 'pre' }}>
          {letter}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default AnimatedHeading;
