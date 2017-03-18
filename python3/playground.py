class Example(object):
	def __init__(self, log):
		self.log = log

	def helloWorld(self):
		print(self.log)

example = Example("Hello from Python, Jungle Gym!")
example.helloWorld()