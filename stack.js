var stack = function () {
    this.count = 0;
    this.storage = {};


    //entering values into end of  stack

    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;

    }
    //deleting value from the top of a stack
    this.pop = function () {
        if (this.count === 0) {
            return undefined;
        }
    
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
    this.size = function () {
        return this.count;
    }
    this.peek = function (value) {
        return  this.storage[this.count - 1];
        
    }
}
 
var myStack = new stack();
 myStack.push(1);
myStack.push(2);

myStack.peek();
myStack.pop();
myStack.push('lilly');
myStack.peek();

console.log(myStack.size());

console.log(myStack.peek());

console.log(myStack.pop());
console.log( myStack.peek());

