import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  // if (!arr.isArray) {
  //   throw '\'arr\' parameter must be an instance of the Array!'
  // }
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] === '--double-next') {
      arr[i] = arr[i + 1]
    }
    if (arr[i] === '--double-prev') {
      arr[i] = arr[i - 1]
    }
    if (arr[i] === '--discard-next') {
      delete arr[i]
      delete arr[i + 1]
    }
    if (arr[i] === '--discard-prev') {
      delete arr[i]
      delete arr[i - 1]
    }
  }
  arr = arr.filter(elem => elem != null)
  return arr
}
