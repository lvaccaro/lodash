import createFlow from './.internal/createFlow.js';

/**
 * Creates a function that returns the result of invoking the given functions
 * with the `this` binding of the created function, where each successive
 * invocation is supplied the return value of the previous.
 *
 * @since 3.0.0
 * @category Util
 * @param {...(Function|Function[])} [funcs] The functions to invoke.
 * @returns {Function} Returns the new composite function.
 * @see flowRight
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * const addSquare = flow([add, square]);
 * addSquare(1, 2);
 * // => 9
 */
const flow = createFlow();

export default flow;
