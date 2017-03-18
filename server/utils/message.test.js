var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message.js');

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

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = "testuser123";
    var latitude = 38.082817299999995;
    var longitude = -84.5589946;
    var output = generateLocationMessage(from, latitude, longitude);
    expect(output.from).toBe(from);
    expect(output.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`);
    expect(output.createdAt).toBeA('number');
  });
});

// https://www.google.com/maps?q=38.082817299999995,-84.5589946
