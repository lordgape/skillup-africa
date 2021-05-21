const Validator = require('validator');
const Common = require('./Common');

module.exports = class TodoValidation {
  // description cannot be empty. We dont want only numbers. we dont want boolean - Product manager.
  static async todoCreation(description) {
    let error = {};

    if (Common.isEmpty(description)) {
      error.description = 'Description is required';
    }

    if (!Common.isEmpty(description)) {

      if (Validator.isNumeric(description)) {
        error.description = 'We do not accept only digit';
      }

      if (Validator.isBoolean(description)) {
        error.description = 'We do not accept boolean values';
      }

    }

    return {
      error,
      isValid: Object.keys(error).length == 0
    };
  }
};

// Mocha Jest = Test Runner Assert Library    Test doubles spy stub mock  - .spec.js
