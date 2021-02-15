String.prototype.toUpperCaseFirstChar = function () {
  return this.substr(0, 1).toUpperCase() + this.substr(1);
};

export { default as getBrowserTheme } from './getBrowserTheme';
export { default as renderBlocks } from './renderBlocks';
export { default as parseLinks } from './parseLinks';

export { default as animationsKeyframes } from './animationsKeyframes';
export { default as isExternalURL } from './isExternalURL';
export { default as isNotDefined } from './isNotDefined';
