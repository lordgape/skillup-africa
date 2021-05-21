const { expect } = require('chai');
const Commom = require('../../validation/Common');

describe('Validation', () => {
  it('Can validate empty string', () => {
    
    expect(Commom.isEmpty(null)).to.equal(true);
    expect(Commom.isEmpty(undefined)).to.equal(true);
    expect(Commom.isEmpty('')).to.equal(true);
    expect(Commom.isEmpty('  ')).to.equal(true);
    expect(Commom.isEmpty({})).to.equal(true);

  });
});
