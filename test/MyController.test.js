var assert = require('assert');
var MyController = require('../api/MyController');

describe('MyController', function() {
	describe('capitalizeWord', function() {
		it('should capitalize word', function() {
			assert.equal('Phantom', MyController.capitalizeWord('phantom'));
		});
		it('should not capitalize other chars in word', function() {
			assert.equal('McLyea', MyController.capitalizeWord('mcLyea'));
		});
	});
});