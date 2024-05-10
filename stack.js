class stackOver {
    constructor() {
        this.stack = []
        this.size = 5;
    }
    isEmpty() {
        if (this.stack.length == 0) {
            console.log("stack is Underflow");
        }
    }
    isFull() {
        if (this.stack.length == this.size) {
            console.log("stack is overflow");
        }
    }
    insert(Element) {
        if (this.stack.length < this.size) {
            this.stack.push(Element)
        }
    }
    print() {
        this.stack.map((val, ind) => {
            console.log(val);
        })
    }
    remove() {
        if (this.stack.length != 0) {
            this.stack.pop()
        }
    }
    reverse() {
        for (let i = this.stack.length - 1; i >= 0; i--) {
            console.log(this.stack[i]);
        }
    }
    lastsecNum(){
        let last=this.stack[1]
        console.log("LastsecondElement",last);
    }
    lastNum(){
        let last=this.stack[0]
        console.log("last Element",last);
    }
    firstNum(){
        let first=this.stack[this.stack.length-1]
        console.log("top Element",first);
    }

}

let s1 = new stackOver()
s1.insert(1)
s1.insert(2)
s1.insert(3)
s1.insert(4)
s1.isFull()
s1.isEmpty()
s1.print()
s1.lastsecNum()
s1.reverse()
s1.lastNum()
s1.firstNum()

// let stack = []
// let size = 5;

// function isEmpty(stack) {
//     if (stack.length == 0) {
//         console.log("stack Underflow");
//     }
// }
// function isFull(stack) {
//     if (stack.length == size) {
//         console.log("stack is overflow");
//     }
// }
// function insert(stack, element) {
//     if (stack.length < size) {
//         stack.push(element)
//     }
// }
// function remove(stack) {
//     if (stack.length != 0) {
//         stack.pop()
//     }
// }
// function print(stack) {
//     stack.map((val, ind) => {
//         console.log(val);
//     })
// }
// function reverse(stack) {
//     for (let i = stack.length - 1; i >= 0; i--) {
//         console.log(stack[i]);
//     }
// }
// function lastsecNum(stack) {
//     let secondElement=stack[1]
//     console.log("last second element =",secondElement);
// }
// function lastNum(stack){
//     let lastelement=stack[0]
//     console.log("Last Element =",lastelement);
// }
// function topNum(stack){
//     let topElement=stack[stack.length-1]
//     console.log("top Element =",topElement);
// }
// insert(stack, 1)
// insert(stack, 2)
// insert(stack, 3)
// insert(stack, 4)
// insert(stack, 5)
// reverse(stack)
// print(stack)
// lastsecNum(stack)
// lastNum(stack)
// topNum(stack)