import client from './sanity.client';

export async function getProjects() {
  return client.fetch(
    `*[_type == "project"]{
      _id,
      projectTitle,
      projectDescription,
      projectLink,
      projectTags,
      projectImage {
        asset -> {
          url
        }
      },
      projectType,
    }`
  );
}
