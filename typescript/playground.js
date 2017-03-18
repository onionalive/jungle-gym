//
// Typescript Playground
// 
// example 1 
var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function (name) {
        console.log(name);
    };
    return Greeter;
}());
var greeter = new Greeter();
greeter.greet('Hello from Typescript, Jungle Gym!');
