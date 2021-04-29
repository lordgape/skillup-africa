 const { promisify } = require("util");


const eligibleForPayroll = (listOfEmployee, callback) => {
  // source of truth
  const db = {
    John: true,
    Doe: false,
    Jane: true,
  };

  listOfEmployee = listOfEmployee.filter((item) => db[item]);

  callback(null, listOfEmployee); // Obey rule. Yes
};


// const mySpecialFunction = ;

// eligibleForPayroll(["John", "Doe", "Jane"], (err, data) => {
//   if (err) {
//     console.log(err);
//   }

//   console.log(data);
// });



const eligibleForPayrollPromized = promisify(eligibleForPayroll);

// Todo convert eligibleForPayroll to use promise instead of callback

// const momentOfTruth = async () => {
//   const employees =  await eligibleForPayrollPromized(["John", "Jane"]);

//   console.log(employees);
// }

// momentOfTruth();

// eligibleForPayrollPromized(["John", "Jane"]).then((res) => console.log(res));


