const logger = () => (next) => (action) => {
  const returnVal = next(action);
  return returnVal;
};

export default logger;
