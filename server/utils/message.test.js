var expect = require('expect');
var {generateMessage} = require('./message.js');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var text = "this is the test text";
    var from = "testuser123";
    var output = generateMessage(from, text);
    expect(output.from).toBe(from);
    expect(output.text).toBe(text);
    expect(output.createdAt).toBeA('number');
  });
});
