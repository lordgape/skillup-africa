const Validator = require('validator');

module.exports = class TodoValidation {
  // description cannot be empty. We dont want only numbers. we dont want boolean - Product manager.
  static async todoCreation(description) {
    let error = {};

    if (Validator.isEmpty(description)) {
      error.description = 'We do not accept empty description';
    }

    if (Validator.isNumeric(description)) {
      error.description = 'We do not accept only digit';
    }

    if (Validator.isBoolean(description)) {
      error.description = 'We do not accept boolean values';
    }

    return {
      error,
      isValid: Object.keys(error).length == 0
    };
  }
};
