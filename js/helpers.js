/**
 * Throttles a function to only be called once within a specified time interval.
 *
 * @param {Function} fn - The function to be throttled.
 * @param {number} wait - The time interval in milliseconds within which the function can only be called once.
 * @returns {Function} - A throttled version of the input function.
 */
export const throttle = (fn, wait) => {
  var time = Date.now();
  return function () {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
};
