class Playground
	def initialize(hello)
		@hello = hello
	end

	def greetings()
		puts @hello
	end
end

playground = Playground.new("Hello from Ruby, Battlefield!");
playground.greetings()
