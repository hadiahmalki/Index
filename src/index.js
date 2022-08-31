/* const hadiah = {
	name: 'Hadiah',
	age: 99,
	photo: [],
}

// eslint-disable-next-line no-unused-vars
const sarah = {
	name: 'Sarah',
	age: 10,
	photo: [],
}

console.log(hadiah) */
// eslint-disable-next-line no-unused-vars
class person {
	constructor(name, age) {
		this.name = name
		this.age = age
		this.photo = []
	}

	greet(person) {
		console.log(`Hello ${person.name},this is ${this.name}`)
	}

	addPhoto(photo) {
		this.photo.push(photo)
	}
}

class Photo {
	constructor(filename) {
		this.filename = filename
	}
}
function signUp(name, age) {
	return new person(name, age)
	/* name,
		age,
		photo: [],
		greet() {
			console.log(`Hello, this is ${this.name}`) */
}

const mihri = signUp(`mihri ${35}`)
const hadiah = signUp(`hadiah ${99}`)
// eslint-disable-next-line no-unused-vars
const sarah = signUp(`sarah ${10}`)
const photo = new Photo('berlin.jpg')

// console.log(mihri.greet(hadiah))
sarah.addPhoto(photo)
console.log(sarah)
