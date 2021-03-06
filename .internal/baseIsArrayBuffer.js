import baseGetTag from './.internal/baseGetTag.js';
import isObjectLike from './isObjectLike.js';

const arrayBufferTag = '[object ArrayBuffer]';

/**
 * The base implementation of `isArrayBuffer` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
 */
function baseIsArrayBuffer(value) {
  return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
}

export default baseIsArrayBuffer;
