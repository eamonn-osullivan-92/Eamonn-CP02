const cowsay = require('cowsay')
const colors = require('colors')

console.log(
	colors.zebra(
		cowsay.say({
			text: "I'm a moooodule",
			e: 'oO',
			T: 'U ',
		})
	)
)
