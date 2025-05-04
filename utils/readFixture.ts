import path from 'node:path';
import fs from 'node:fs/promises';

const getFixturePath = (fixtureName: string): string => {
  const fixturePath = path.join(__dirname, '..', '__fixtures__', fixtureName);
  return fixturePath;
};

const readFixture = async (
  fixtureName: string,
  encoding: BufferEncoding = 'utf-8'
): Promise<string> => {
  const fixturePath = getFixturePath(fixtureName);
  const contents = await fs.readFile(fixturePath, { encoding });
  return contents;
};

export default readFixture;
