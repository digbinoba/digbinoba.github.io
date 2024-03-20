import { createClient, type ClientConfig } from '@sanity/client';

const config: ClientConfig = {
  projectId: 't12itcg3',
  dataset: 'production',
  apiVersion: '2024-03-06',
  useCdn: false,
};

const client = createClient(config);

export default client;
