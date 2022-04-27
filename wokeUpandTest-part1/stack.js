// 스택(Stack)과 큐(Queue) 구현하기
//스택 : 카드쌓기. Last In First Out : push와 pop만 가능

class Stack {
  constructor(){
    this.arr = [];
  }

  push(data) {
    this.arr.push(data);
  }

  pop() {
    return this.arr.pop();
  }

  isEmpty() {
    if (this.arr.length == 0) {
      return true;
    } else {
      return false;
    }
  }

  firstElement() {
    return this.arr[0];
  }

  lastElement() {
    return this.arr[this.arr.length - 1];
  }
}


let stack1 = new Stack();
stack1.push(10);
stack1.push(20);
stack1.push(30);
stack1.push(40);
stack1.push(50);

console.log(stack1)
console.log(stack1.pop());
console.log(stack1)
console.log(stack1.firstElement())
console.log(stack1.lastElement())
console.log(stack1.isEmpty())