import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  var arr = []
  for (var i in options) {
    arr.push(options[i])
  }
  var arr_sub = [], arr_full = [], arr_big = []
  for (var i = 0; i < arr[3]; i++)
    arr_sub.push(arr[2])
  arr_sub = arr_sub.join(`${arr[4]}`)
  arr_full.push((str + arr_sub))
  for (var i = 0; i < arr[0]; i++)
    arr_big.push(arr_full)
  arr_big = arr_big.join(`${arr[1]}`)
  return arr_big
}
