import data from './'
const MOCK_SETTINGS = {
  PROJECTS: true,
  USERS: true,
  DATASETS: true,
  CONNECTIONS: true,
};

export const getConnections = (config) => {
  if (MOCK_SETTINGS.CONNECTIONS) return Promise.resolve("123");
};
