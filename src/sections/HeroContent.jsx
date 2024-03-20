'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  slideInFromLeft,
} from '../utils/motion';
const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20] "
      whileInView={{ opacity: 1 }}
    >
      <div className=" flex flex-col gap-5 justify-center mx-auto text-center">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-white w-auto h-auto"
        >
          <h1 className="text-balance text-3xl/tight font-bold  md:text-5xl/tight text-center">
            Hello, I'm
          </h1>
          <h1 className="text-balance text-5xl/tight font-bold  md:text-7xl/tight text-center">
            Delano Igbinoba
          </h1>
          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-white mx-auto text-center drop-shadow-lg"
          >
            I&apos;m a dedicated Full-Stack Developer with a passion for
            architecting robust solutions and bringing a flair for captiviating
            designs and interactive prototypes. Let's craft the future of
            technology, one line at a time!
          </motion.p>
          <motion.div className="flex flex-row justify-center gap-5">
            <motion.a
              variants={slideInFromLeft(1)}
              className="p-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] min-w-[150px] "
              href={'#about'}
            >
              Learn More!
            </motion.a>
            <motion.a
              variants={slideInFromLeft(1)}
              className="p-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] min-w-[150px]"
            >
              Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
