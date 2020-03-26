const validateForm = require('./validateForm')
const supertest = require('supertest');
const app = require('../../server/index');

describe('should have correct web url', () => {
    test("it should return false if the url does not start with http:// or https://", () => {
        expect(validateForm.validateUrl('www.google.com')).toBeTruthy();
    });
    test('should return false if input field is empty', () => {
        expect(validateForm.validateUrl('')).toBe(false);
    });
    test("it should return true if the url starts with http://", () => {
        expect(validateForm.validateUrl('http://www.google.com')).toBe(true);
    });
    test("it should return true if the url starts with https://", () => {
        expect(validateForm.validateUrl('https://www.google.com')).toBe(true);
    });
    test("it should return true if the url starts with http:// but does not include www.", () => {
        expect(validateForm.validateUrl('https://google.com')).toBe(true);
    });
    test("it should return true if the url starts with https:// but does not include www.", () => {
        expect(validateForm.validateUrl('https://google.com')).toBe(true);
    });
});