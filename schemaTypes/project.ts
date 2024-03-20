const projectTypes = [
  {title: "Web App", value: 'webapp'},
  {title: "UX/UI", value: 'uxui'}

]

export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      title: 'Project Name',
      type: 'string',
      name: 'projectTitle',
    },
    {
      title: 'Project Description',
      type: 'string',
      name: 'projectDescription',
    },
    {
      title: 'Link',
      name: 'projectLink',
      type: 'url',
    },
    {
      title: 'Tags',
      name: 'projectTags',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      title: 'Picture',
      name: 'projectImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Project Type',
      name: 'projectType',
      type: 'string',
      options: {
        list: projectTypes.map(({title, value}) => ({title, value})),
        layout: 'radio'
      }
    }
  ],
}