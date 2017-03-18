const expect = require('chai').expect;

// Test suite
describe('Mocha', () => {
	// Test spec (unit test)
	it('should run our test using npm', () => {
		expect(true).to.be.ok;
	});

	it('should have another test setup');
	it('should validate home page js functions');
	it('should be ready for the playground')
});

describe('Test suite', () => {
	describe('...within a test suite', () => {
		it('should return true to be okay', () => {
			expect(true).to.be.okay;
		});
	});
});