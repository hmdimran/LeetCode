/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let initial = 0;
  operations.forEach((element) => {
    if (element.charAt(1) == "-") {
      initial = initial - 1;
    } else if (element.charAt(1) == "+") {
      initial = initial + 1;
    }
  });
  return initial;
};
