import fs from 'fs/promises';

export const deleteFile = async (fileName: string): Promise<void> => {
  try {
    await fs.stat(fileName);
  } catch (error) {
    return;
  }

  await fs.unlink(fileName);
};
