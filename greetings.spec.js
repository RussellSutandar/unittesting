// Unit tests to cover the greet() function
// To run these tests, make sure you're in the folder containing this file
// run the command: npm install to setup the testing framework
// Thn run the command: npm run test
// The tests should run successfully
import Greet from `./greetings-solution`

describe('test greet()', function () {
    it('should greet a name', function () {
        expect(Greet('Elizabeth')).toEqual('Hello, Elizabeth');
    })

    it('should greet a name', function () {
        expect(Greet('ELIZABETH')).toEqual('HELLO ELIZABETH!');
    })

    it('should greet a name', function () {
        expect(Greet()).toEqual('Hello there!');
    })

    it('should greet a name', function () {
        expect(Greet(['a', 'b'])).toEqual('Hello, a, b');
    })
})