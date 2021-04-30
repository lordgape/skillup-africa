// Declaration
const eligibleForPayroll = (listOfEmployee, callback) => {
  const db = {
    John: true,
    Doe: false,
    Jane: true
  };

  let badPayOut = listOfEmployee.some((item) => !db[item]);

  if (badPayOut) {
    callback('Please do not process payroll. Not all are eligible');
  } else {
    listOfEmployee = listOfEmployee.filter((item) => db[item]);
    callback(null, listOfEmployee);
  }
};

const printEligibleEmployee = (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
};

//  module.exports = {eligibleForPayroll};

exports.smartPayroll = eligibleForPayroll;

exports.printEligibleEmployee = printEligibleEmployee;
