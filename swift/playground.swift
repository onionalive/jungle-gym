class Example {
	var name: String
	
	init(name: String) {
		self.name = name
	}

	func helloFriends() {
		let res = self.name
		print(res)
		return
	}
}

let example = Example(name: "Hello from Swift, Battlefield!")
example.helloFriends()