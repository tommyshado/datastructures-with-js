describe("Using a stack", function(){

    it("you should be able to push and pop 1 value", function (){

        const stack = Stack();
        
        stack.push('cat');
        assert.equal('cat', stack.pop());
        assert.equal(undefined, stack.pop());

    });


    it("you should be able to push values to the stack and get it back", function (){

        const stack = Stack();
        stack.push('cat');
        stack.push('cow');
        stack.push('giraffe');
        
        assert.equal('giraffe', stack.pop());
        assert.equal('cow', stack.pop());
        assert.equal('cat', stack.pop());
        assert.equal(undefined, stack.pop());

    });

    it("you should be able to instantiate an empty stack", function (){
        const stack = Stack();
        assert.equal(undefined, stack.pop());
    });

})