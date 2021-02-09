const { expect } = require('chai');
const formatFullname = require('../formatFullname.js');

describe('formatFullname', () => {
  it('should change properly letters size', () => {
    expect(formatFullname('jOHn dOE')).to.equal('John Doe');
    expect(formatFullname('amanda doe')).to.equal('Amanda Doe');
  });

  it('should return an error if "fullName" arg length is 0', () => {
    expect(formatFullname('')).to.equal('Error');
  });

  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(32)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function () { })).to.equal('Error');
  });

  it('should return an error if the given data format is incorrect', () => {
    expect(formatFullname('John Mark Doe')).to.equal('Error');
    expect(formatFullname('John')).to.equal('Error');
    expect(formatFullname('John Henry Mark Anthony Richard William Doe')).to.equal('Error');
  });

});