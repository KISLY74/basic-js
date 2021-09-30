import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
   n = n.toString().split('')
   var arr = [], n_copy = [], res_arr = []
   for (var i = 0; i < n.length; i++) {
      n_copy.push(n[i])
      n[i] = ','
      arr = n.filter(elem => elem !== ',')
      n[i] = n_copy[i]
      res_arr.push(+arr.join(''))
   }
   var max_elem = Math.max.apply(null, res_arr)
   return max_elem
}
