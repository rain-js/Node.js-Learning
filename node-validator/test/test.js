var assert = require('assert')
var validator = require('../lib/index')

describe('validator', function() {
	describe('#isEmail()', function() {
		it('should return true when string is a valid email address', function() {
			assert.equal(validator.isEmail('foo@gmail.com'), true)
		})
	})
})