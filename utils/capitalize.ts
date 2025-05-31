const capitalize = (str: string): string => {
  const capitalizedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalizedStr;
};

export default capitalize;
