import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
   if (!date) {
      return 'Unable to determine the time of year!'
   }
   try {
      date.getTime()
   }
   catch (err) {
      throw new Error('Invalid date!')
   }
   let m = date.getMonth()
   if (m == 8 || m == 9 || m == 10) { return 'autumn' }
   if (m == 11 || m == 0 || m == 1) { return 'winter' }
   if (m == 2 || m == 3 || m == 4) { return 'spring' }
   if (m == 5 || m == 6 || m == 7) { return 'summer' }
}
