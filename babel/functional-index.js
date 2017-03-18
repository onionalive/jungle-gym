import { Functional, FunctionalSubClass } from './functional';

const mathematical = new Functional();
mathematical.log()
	.multiply(3)
	.log()
	.closures()
	.log()
	.add(4, 2)
	.log()
	.closures()
	.log()
	.add()
	.log()
	.closures()
	.log()
	.multiply()
	.log()
	.closures()
	.log()
	.multiply(20)
	.log()
	.closures()
	.log();

/*

THESE WON'T RUN BECAUSE CLOSURE FUNCTIONS ARE PRIVATE IN SCOPE 

mathematical.subtract(); 		// TypeError: mathematical.subtract is not a function
mathematical.subtractMore();
mathematical.addMore();
*/

const nl = `
|-------------|

 Using subclass

|-------------|
`;

console.log(nl);

const subclass = new FunctionalSubClass(5);
subclass.log()
	.multiply(3)
	.log()
	.closures()
	.log();

/*
	OUTPUT FROM THE CONSOLE 

	2
	multiply func
	6
	closure func subtract
	4
	add func
	10
	closure func subtractMore
	0
	add func
	5
	closure func subtract
	3
	multiply func
	6
	closure func subtract
	4
	multiply func
	80
	closure func addMore
	90

	|-------------|

	 Using subclass

	|-------------|

	5
	multiply func
	15
	closure func subtractMore
	5

 */