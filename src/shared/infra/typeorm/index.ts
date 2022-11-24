import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (host = 'rentx_database'): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  const newOptions = {
    ...defaultOptions,
    host,
  };

  return createConnection(newOptions);
};
