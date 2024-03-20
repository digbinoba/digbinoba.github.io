import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import ProjectCard from '../../ui/ProjectCard';
import { getProjects } from '../../sanity/sanity.query';
import type { ProjectType } from '../../types';

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
export default SwiperShow;