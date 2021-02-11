export const checkDomain = function (url) {
  if (url.indexOf('//') === 0) {
    url = `${location.protocol}${url}`;
  }
  return url
    .toLowerCase()
    .replace(/([a-z])?:\/\//, '$1')
    .split('/')[0];
};

export const isExternal = (url) =>
  (url.indexOf(':') > -1 || url.indexOf('//') > -1) &&
  checkDomain(location.href) !== checkDomain(url);
