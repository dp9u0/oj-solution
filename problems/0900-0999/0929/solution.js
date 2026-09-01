/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  let set = new Set(emails.map(email => {
    let [local, domain] = email.split("@");
    return `${local.slice(0, local.indexOf('+')).replace(/\./g, '')}@${domain}`;
  }))
  return set.size;
};

/**
// TEST:
console.log(numUniqueEmails(["test.email+alex@leetcode.com",
  "test.e.mail+bob.cathy@leetcode.com",
  "testemail+david@lee.tcode.com"
]))
*/