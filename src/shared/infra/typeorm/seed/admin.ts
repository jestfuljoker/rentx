import { hash } from 'bcrypt';
import { v4 as uuidV4 } from 'uuid';

import createConnection from '../index';

async function create() {
  const connection = await createConnection('localhost');

  const id = uuidV4();
  const hashedPassword = await hash('admin', 8);

  connection.query(
    `
      INSERT INTO USERS
        (
          id,
          name,
          email,
          password,
          "driverLicense",
          "isAdmin",
          "createdAt"
        )
      VALUES
        (
          $1,
          'Admin',
          'admin@rentx.com',
          $2,
          '123456',
          true,
          now()
        )
    `,
    [id, hashedPassword],
  );

  await connection.close();
}

create().then(() => console.log('Admin user, successfully created!'));
