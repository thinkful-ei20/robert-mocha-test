const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('The fizzBuzzer function', () => {

  it('should return fizz for an argument of 3', () => {
    const three = fizzBuzzer(3);
    expect(three).to.equal('fizz');
  });

  it('should return buzz for an argument of 5', () => {
    const five = fizzBuzzer(5);
    expect(five).to.equal('buzz');
  });

  it('should return fizz-buzz for an argument of 15', () => {
    const fifteen = fizzBuzzer(15);
    expect(fifteen).to.equal('fizz-buzz');
  });
  it('should return the number for an argument is not a multiple of 3 or 5', () => {
    const three = fizzBuzzer(7);
    expect(three).to.equal(7);
  });

  it ('should raise error if arg is not a number', () => {
    const invalid = ['a', 'b', 'c'];
    invalid.forEach(input => {
      expect(() => fizzBuzzer(input)).to.throw(Error);
    });
  });
});

