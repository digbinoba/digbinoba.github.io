import React from 'react';
import { motion } from 'framer-motion';
import {
  slideInFromTop,
  slideInFromRight,
} from '../utils/motion';
import { SparklesIcon, CodeBracketSquareIcon } from '@heroicons/react/24/solid';

import { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//import './swiper.css'

// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import ProjectCard from '../ui/ProjectCard';
import { getProjects } from '../sanity/sanity.query';
import { ProjectType } from '../types';
 function SwiperShow() {
  //const projects: ProjectType[] = await getProjects();
  const [projects, setProjects] = useState<ProjectType[]>();
  const [selectedFilter, setSelectedFilter] = useState('all');
  useEffect(() => {
    //Set inital get project data
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.log('error fetching data: ', error);
      }
    };

    fetchProjects();
  }, []);
  const handleFilterChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedFilter(event.target.value);
  };
  let filteredData;
  if (selectedFilter === 'all') {
    filteredData = projects;
  } else {
    filteredData = selectedFilter
      ? projects?.filter((project) => project.projectType === selectedFilter)
      : projects;
  }
  return (
    <>
      <div className="h-full w-full flex flex-col items-center justify-center mt-4">
        <select
          name="projectFilter"
          id="projectFilter"
          className="min-w-[20rem] h-12 bg-transparent border border-white rounded-full px-4 mb-4"
          value={selectedFilter}
          onChange={handleFilterChange}
        >
          <option value="all">All</option>
          <option value="webapp">Web Apps</option>
          <option value="uxui">UI/UX</option>
        </select>
        <Swiper
          grabCursor={true}
          slidesPerView={3}
          pagination={{
            type: 'progressbar',
          }}
          modules={[Pagination, Autoplay, Navigation]}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          centeredSlides={true}
          centeredSlidesBounds={true}
          className="mySwiper w-full max-w-7xl 2xl:w-4/5"
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 100,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 100,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 250,
            },
          }}
        >
          {filteredData?.map((project, index) => {
            return (
              <div className="w-full" key={index}>
                <SwiperSlide>
                  <ProjectCard
                    projectTitle={project.projectTitle}
                    projectDescription={project.projectDescription}
                    projectLink={project.projectLink}
                    projectTags={project.projectTags}
                    projectType={project.projectType}
                    projectImage={project.projectImage}
                  />
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
export function Projects() {
  return (
    <section
      className=" relative flex flex-col py-24 items-center justify-center mx-auto w-11/12 max-w-7xl 2xl:w-4/5 before:inset-x-0 before:h-px before:absolute before:w-4/5 before:top-0 before:-z-10 before:bg-gradient-to-r before:from-transparent before:via-slate-500 before:to-transparent before:max-w-7xl before:mx-auto min-h-[80vh]"
      id="projects"
    >
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[15px] px-[10px] border border-[#7042f88b] opacity-[0.9]"
        initial="hidden"
        animate="visible"
      >
        <CodeBracketSquareIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">Projects</h1>
      </motion.div>
      <motion.div initial="hidden" variants={slideInFromTop} animate="visible">
        <h2 className="mb-4 text-balance text-3xl/tight font-bold text-neutrals-50 md:text-5xl/tight text-center bg-gradient-to-r from-zinc-50 to-zinc-400 text-transparent bg-clip-text">
          “If a picture is worth 1000 words, a prototype is worth 1000
          meetings.”
        </h2>
      </motion.div>
      <motion.div
        initial="hidden"
        variants={slideInFromRight(0.5)}
        animate="visible"
      >
        <p className="max-w-prose text-base/relaxed font-extralight text-center mb-6">
          Discover a treasure trove of projects where prototypes and designs
          that evolve into polished web apps, bridging the gap between concept
          and reality.
        </p>
      </motion.div>
      <SwiperShow />
    </section>
  );
}

export default Projects;
