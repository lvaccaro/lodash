import getTag from './.internal/getTag.js';
import isObjectLike from './isObjectLike.js';

/** `Object#toString` result references. */
const setTag = '[object Set]';

/**
 * The base implementation of `isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

export default baseIsSet;
