import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  for (var i in members) {
    if (typeof (members[i]) !== "string") {
      delete members[i]
    }
    else {
      members[i] = members[i].trim()
    }
  }
  members = members.map(elem => elem[0])
  members = members.sort().join("").toUpperCase()
  return members
}
