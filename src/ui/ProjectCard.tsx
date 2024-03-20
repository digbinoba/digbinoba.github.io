import React from 'react';
import { CodeBracketIcon, ArrowUpRightIcon } from '@heroicons/react/24/solid';
import imageUrlBuilder from '@sanity/image-url';
import client from '../sanity/sanity.client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

interface Props {
  title: string;
  description: string;
  src: string;
}
const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
interface ProjectProps {
  projectTitle: string;
  projectDescription: string;
  projectImage: {
    image: string;
  };
  projectLink: string;
  projectTags: string[];
  projectType: string;
}
const ProjectCard = ({
  projectTitle,
  projectDescription,
  projectImage,
  projectLink,
  projectTags,
  projectType,
}: ProjectProps) => {
  return (
    <div className="card bg-blur bg-gradient-to-t from-slate-700 to-transparent ">
      <img
        src={urlFor(projectImage).url()}
        alt="picture"
        //fill={true}
        className="z-[-20] rounded-xl border-purple-500"
      />
      <div className="flex flex-col justify-end absolute m-4 p-4">
        <div className="flex flex-row justify-start items-center gap-4 mb-2">
          <h1 className="text-xl ">{projectTitle}</h1>
          <a href={projectLink}>
            <ArrowUpRightIcon className="p-2 bg-slate-700 rounded-full text-white" />
          </a>
        </div>
        <h1 className="text-start text-sm mb-2">{projectDescription}</h1>
        {/* Tags for Project */}
        <div>
          <ul className="flex flex-row flex-wrap gap-2">
            {projectTags.map((tag, key) => {
              return (
                <li
                  className="bg-purple-700 rounded-full px-4 text-sm"
                  key={key}
                >
                  {tag}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
