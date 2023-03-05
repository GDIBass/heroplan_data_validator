export interface IdAndName {
  id: number;
  name: string;
}

const getIdAndNameFromFilename = (filename: string): IdAndName => {
  const trimmed = filename.substring(0, filename.length - '.yml'.length);
  const splitTrim = trimmed.split('-');
  if (splitTrim.length !== 2) {
    throw new Error(
      `Filename must be in <id>-<name>.yml format : filename:${filename}`
    );
  }
  if (isNaN(parseInt(splitTrim[0], 10))) {
    throw new Error(
      `Id for filename must be an integer <id>-<name>.yml format : filename:${filename}`
    );
  }
  const id = parseInt(splitTrim[0], 10);
  const name = splitTrim[1];

  return {id, name};
};

export default getIdAndNameFromFilename;
