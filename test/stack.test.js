class Stack {
    constructor() {
        this.top = -1;
        this.items = {};
    }
    get peek() {
        return this.items[this.top];
    }
    push(value) {
        this.top += 1;
        this.items[this.top] = value;
    }
    popOff(){
        this.items[this.top] = {};
        this.top -= 1;
        this.items[this.top] = {};
    }
}

//todo Refactor tha cod!!

//describe to define a test suite
describe('My Stack', () => {

    //jest helper functions init, the stack is set up as a global variable.
    let stack;
    //beforeEach is to re-initialize the stack before new test
    beforeEach(() => {
       stack = new Stack();
    });

    //it, it is the individual test
    it('should EXAMPLE', function () {
        
    });

    it.todo('todo example');

    it('is created empty', function () {
        //toBe is the matcher, checks to reference equality between two objects
        expect(stack.top).toBe(-1);
        //toEqual checks to value equality
        expect(stack.items).toEqual({});
    });

    it('can push to the top', function () {
        stack.push('🐉');
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe('🐉')
    });

    it('can pop off', function () {
        stack.push('12041998');
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe('12041998')
        stack.popOff();
        expect(stack.top).toBe(-1);
        expect(stack.peek).toEqual({});
    });
})