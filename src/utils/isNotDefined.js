const isNotDefined = (object, checkKey) => {
  if (object !== null && object !== 'undefined') {
    if (checkKey) {
      return object[checkKey] !== 'undefined';
    }
    return object !== 'undefined';
  }
  return false;
};

export default isNotDefined;
