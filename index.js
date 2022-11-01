
function add(days) {
  var addDays = require("date-fns/addDays");
  let date1 = new Date("22 Aug 2020");
  let result = addDays(date1, days);
  return `${result.getDate()}-${
    month[result.getMonth()+1]
  }-${result.getFullYear()}`;
}
console.log(add(5));
module.exports = add;
