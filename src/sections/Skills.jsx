import React from 'react';
import { motion } from 'framer-motion';
import {
  slideInFromTop,
  slideInFromLeft,
  slideInFromRight,
} from '../utils/motion';
import { WrenchScrewdriverIcon } from '@heroicons/react/24/solid';
import { services, skills } from '../contants';

const Skills = () => {
  return (
    // Section Container
    <section
      className=" relative flex flex-col py-24 items-center justify-center mx-auto w-11/12 max-w-7xl 2xl:w-4/5 before:inset-x-0 before:h-px before:absolute before:w-4/5 before:top-0 before:-z-10 before:bg-gradient-to-r before:from-transparent before:via-slate-500 before:to-transparent before:max-w-7xl before:mx-auto min-h-[80vh] z-10"
      id="skills"
    >
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[15px] px-[10px] border border-[#7042f88b] opacity-[0.9]"
        initial="hidden"
        animate="visible"
      >
        <WrenchScrewdriverIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">Skills</h1>
      </motion.div>
      <motion.div initial="hidden" variants={slideInFromTop} animate="visible">
        <h2 className="mb-4 text-balance text-3xl/tight font-bold text-neutrals-50 md:text-5xl/tight text-center bg-gradient-to-r from-zinc-50 to-zinc-400 text-transparent bg-clip-text">
          “The future belongs to those who learn more skills and combine them in
          creative ways.”
        </h2>
      </motion.div>
      <motion.div
        initial="hidden"
        variants={slideInFromRight(0.5)}
        animate="visible"
      >
        <p className="max-w-prose text-base/relaxed font-extralight text-center mb-6">
          As a seasoned multidisciplinary professional, I am perpetually driven
          by curiosity, adept at integrating diverse skills and cutting-edge
          technologies to develop innovative applications and prototypes.
          Explore below to witness the breadth of my capabilities and what I can
          offer.
        </p>
      </motion.div>

      <div className="app__profiles">
        {services.map((service, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={service.title + index}
          >
            {service.icon}

            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {service.title}
            </h2>
            <p className="p-text text-center" style={{ marginTop: 10 }}>
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="mb-4 text-balance text-2xl/tight font-bold text-neutrals-50 md:text-4xl/tight text-center bg-gradient-to-r from-zinc-50 to-zinc-400 text-transparent bg-clip-text">
          My Skills
        </h3>

        <div className="mt-16 flex flex-wrap gap-12 mx-auto justify-center">
          {skills.map((skill) => (
            <div className="flex flex-col">
              <div
                className="block-container w-20 h-20 mx-auto"
                key={skill.name}
              >
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
              <h1 className="text-center">{skill.name}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-full absolute z-[-10]">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-full"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/encryption.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
