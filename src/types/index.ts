import { PortableTextBlock } from 'sanity';

export type ProjectType = {
  _id: string;
  projectTitle: string;
  projectDescription: string;
  projectImage: {
    image: string;
  };
  projectLink: string;
  projectTags: string[];
  projectType: string;
};

export interface ProjectProps {
  projectTitle: string;
  projectDescription: string;
  projectImage: {
    image: string;
  };
  projectLink: string;
  projectTags: string[];
  projectType: string;
}