import React from 'react';
import { motion } from 'framer-motion';
import {
  slideInFromTop,
  slideInFromLeft,
  slideInFromRight,
} from '../utils/motion';
import { SparklesIcon, UserIcon } from '@heroicons/react/24/solid';

const About = () => {
  return (
    // Section Container
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative z-10 mx-auto w-11/12 max-w-7xl 2xl:w-4/5"
    >
      <div className="flex flex-col w-full items-center justify-center lg:flex-row before:inset-x-0 before:h-px before:absolute before:w-4/5 before:top-0 before:-z-10 before:bg-gradient-to-r before:from-transparent before:via-slate-500 before:to-transparent before:max-w-7xl before:mx-auto min-h-[60vh]">
        <motion.div
          initial="hidden"
          variants={slideInFromLeft(0.8)}
          animate="visible"
          whileInView={{ opacity: 1 }}
        >
          <img
            src="/headshot.JPG"
            alt="me"
            className="h-full max-h-screen object-cover object-center lg:col-start-1 lg:col-end-3"
            width={500}
            height={500}
          />
        </motion.div>

        {/* TEXT Container */}
        <div className="w-full py-28 max-lg:mx-auto max-lg:w-11/12 max-lg:max-w-7xl lg:ps-10 xl:ps-20">
          <motion.div
            initial="hidden"
            variants={slideInFromTop}
            animate="visible"
            className="Welcome-box mb-4 py-[15px] px-[10px] border border-[#7042f88b] opacity-[0.9] mx-auto lg:mx-0 self-center"
          >
            <UserIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">About Me</h1>
          </motion.div>
          {/* <TypingHeading client:visible headings={headings} /> */}
          <motion.div
            initial="hidden"
            variants={slideInFromRight(0.8)}
            animate="visible"
          >
            <motion.div
              initial="hidden"
              variants={slideInFromTop}
              animate="visible"
            >
              <h2 className="mb-4 text-balance text-3xl/tight font-bold text-neutrals-50 md:text-5xl/tight text-left bg-gradient-to-r from-zinc-50 to-zinc-400 text-transparent bg-clip-text">
                Who am I?
              </h2>
            </motion.div>
            <p className="max-w-fit text-base/relaxed text-neutrals-300 mb-4">
              Pleasure to meet you. My name is Delano and I enjoy creating
              something out of nothing. I'm always in the pursuit of learning
              new skills to take on new and interesting challenges.
            </p>
            <p className="max-w-fit text-base/relaxed text-neutrals-300 mb-4">
              I have always been fascinated in creativity and how individuals
              leverage design and technology to develop unique and exceptional
              experiences. As a software engineer, I am passionate in bridging
              the connection between engineering and design.
            </p>
            <p className="max-w-fit text-base/relaxed text-neutrals-300 mb-4">
              My purpose is to build compelling & memorable experiences that are
              efficient as they are beautiful. I specialize creating software
              while focusing on UX/UI design to prototype apps into potential
              experiences.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
