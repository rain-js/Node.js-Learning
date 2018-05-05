module.exports = {
	isEmail: function(str) {
		return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(str)
	},
	isAllEnglish: function(str) {
		return /^[a-zA-Z]+$/.test(str)
	}
}