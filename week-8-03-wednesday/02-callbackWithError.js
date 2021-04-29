// Declaration
const eligibleForPayroll = (listOfEmployee, callback) => {
  const db = {
    John: true,
    Doe: false,
    Jane: true,
  };

  // db[john]

  let notAllAreEligible = listOfEmployee.some((item) => !db[item]);
  listOfEmployee = listOfEmployee.filter((item) => db[item]);

  if(notAllAreEligible) {
    callback("Please do not process payroll. Not all are eligible")
  }
  else {
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

// Usage
eligibleForPayroll(["John", "Doe", "Jane"], printEligibleEmployee);

// Todo Complete eligibleForPayroll function so it alert its callback about some employee not been eligible for payroll
