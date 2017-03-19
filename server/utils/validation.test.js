var expect = require('expect');
var {isRealString} = require('./validation')

describe('isRealString', () => {

  it('should reject non-string values', () => {
    var result = isRealString(4);
    expect(result).toBe(false);
    result = isRealString();
    expect(result).toBe(false);
  });

  it('should reject strings with only spaces', () => {
    var result = isRealString('    ');
    expect(result).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    var result = isRealString('  KenEllis123   ');
    expect(result).toBe(true);
  });

});
