const cowsay = require('cowsay')
const colors = require('colors')

console.log(
	colors.zebra(
		cowsay.say({
			text: "I'm a moooodule for CP02",
			e: 'oO',
			T: 'U ',
		})
	)
)
