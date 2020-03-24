

// const nameChecker = require('./nameChecker');
// const supertest = require('supertest');
// const app = require('../../server/index');

// /* https://stackoverflow.com/questions/55088482/jest-not-implemented-window-alert */
// describe('Testing the test path', () => {
//     test('It should get test path',() => {
//         const jsdomAlert = window.alert;  // remember the jsdom alert
//         window.alert = () => {};  // provide an empty implementation for window.alert
        
//         // expect(nameChecker.checkForName('test')).toBeFalsy();
//         expect(nameChecker.checkForName('test')).toBe(false);

//         window.alert = jsdomAlert;  // restore the jsdom alert
//     });
// });

// describe('Testing the test path', () => {
//     test('It should get test path',() => {
//         const jsdomAlert = window.alert;  // remember the jsdom alert
//         window.alert = () => {};  // provide an empty implementation for window.alert
        
//         // expect(nameChecker.checkForName('https://www.google.com')).toBeTruthy();
//         // expect(nameChecker.checkForName('http://www.google.com')).toBeTruthy();
//         expect(nameChecker.checkForName('https://www.google.com')).toEqual('https://www.google.com');
//         expect(nameChecker.checkForName('http://www.google.com')).toEqual('http://www.google.com')

//         window.alert = jsdomAlert;  // restore the jsdom alert
//     });
// });


const nameChecker = require('./nameChecker');
const supertest = require('supertest');
const app = require('../../server/index');

/* https://stackoverflow.com/questions/55088482/jest-not-implemented-window-alert */
describe('Testing the test path', () => {
    test('It should get test path',() => {
        const jsdomAlert = window.alert;  // remember the jsdom alert
        window.alert = () => {};  // provide an empty implementation for window.alert
        
        expect(nameChecker.checkForName('Picard')).toBeFalsy();

        window.alert = jsdomAlert;  // restore the jsdom alert
    });
});

describe('Testing the test path', () => {
    test('It should get test path',() => {
        const jsdomAlert = window.alert;  // remember the jsdom alert
        window.alert = () => {};  // provide an empty implementation for window.alert
        
        expect(nameChecker.checkForName('Cerberus')).toBeTruthy();

        window.alert = jsdomAlert;  // restore the jsdom alert
    });
});