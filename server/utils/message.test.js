const expect = require('expect');
const {generateMessage} = require('./message.js');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = "Dipak Chavda";
        var text = "Jay Swaminarayan!";
        var result = generateMessage(from, text);
        expect(result.from).toBe(from);
        expect(result.text).toBe(text);
        expect(result.createdAt).toBeA('number');
        expect(result).toInclude({
            from,
            text
        });
    });
});
