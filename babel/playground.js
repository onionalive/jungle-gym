class Example {
	constructor() {
		this.hello = "Hello from Babel, Jungle Gym!";
	}

	hi() {
		console.log(this.hello);
	}
}

const example = new Example();
example.hi();