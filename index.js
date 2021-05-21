const addDays = require("date-fns/addDays");

function result(num) {
  return addDays(new Date(2020, 07, 22), num);
}

module.exports = result;
