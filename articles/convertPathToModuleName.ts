const convertPathToModuleName = (path: string) =>
  path
    .split('-')
    .map((fragment) => fragment[0].toUpperCase() + fragment.slice(1))
    .join('');

export default convertPathToModuleName;
