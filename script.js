let boxes = []
let average = 0
let boxesSum = 0
let reste = 0
const boxContainer = document.querySelector('#resultContainer')
const button = document.querySelector('#qtyButton')
const color = ['red', 'blue', 'green', 'yellow', 'violet']
const results = document.querySelector('.stack')
let getTas1
let getTas2
let getTas3
let getTas4
let getTas5

button.addEventListener('click', function () {
	fillArray()
	boxes.forEach((res, i) => displayBoxes(res, i))
})

function fillArray() {
	boxes = Array.from(
		document.querySelectorAll(".inputZone input[type='number']"),
		(el) => el.value
	)
}

function displayBoxes(res, idx) {
	boxesSum = boxes.reduce((a, b) => parseInt(a) + parseInt(b))
	average = parseInt(boxesSum / boxes.length)
	reste = boxesSum % boxes.length
	console.log('average: ', average)
	console.log('total boites: ', boxesSum)
	console.log('reste: ', reste);
	let group = document.createElement('div')
	group.classList.add('group')

	for (b = 0; b < res; b++) {
		let box = document.createElement('div')
		box.classList.add('compart')
		box.classList.add(color[idx])

		box.innerHTML = `<div></div>`
		group.appendChild(box)
	}
	results.append(group)
}
