//linked List 구현하기

//객체로 만들어보기

const list = {
  head: {
    value: 100,
    next: {
      value: 20,
      next: {
        value: 35,
        next: {
          value: 31,
          next: null
        }
      }
    }
  }
}

//35를 출력하고 싶다
console.log(list.head.next.next.value);

//class로 구현해보기 : Node객채와 linkedList객체 만들기

class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    //초기화
    let init = new Node("init");
    this.head = init;
    this.tail = init;
    // 데이터 순회와 삽입을 위한 속성초기화
    this.length = 0;
    this.currentNode = undefined;
  }

  //마지막에 데이터 추가하는 메소드
  append(data) {
    let newData = new Node(data);
    if (this.length === 0) {
      this.head = newData;
      this.tail = newData;
      this.length += 1;
    } else {
      this.tail.next = newData;
      this.tail = newData;
      console.log(this.tail)
      this.length += 1;
    }
  }

  getData() {
    let currentNode = this.head;
    let dataArray = [];
    for (let i = 0; i < this.length; i++) {
      dataArray.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return dataArray;
  }

  insertData(data, index) {
    let currentNode = this.head;
    let newData = new Node(data);
    for (let i = 0; i < this.length; i++) {
      if (index === 0) {
        newData.next = this.head;
        this.head = newData;
        this.length += 1;
      } else if (index-1 === i) {
        newData.next = currentNode.next;
        currentNode.next = newData;
        this.length += 1;
      } else {
        currentNode = currentNode.next;
      }
    }
    return currentNode;
  }
}

const myFirstLinkedList = new LinkedList();

myFirstLinkedList.append(40);
myFirstLinkedList.append(41);
myFirstLinkedList.append(42);
myFirstLinkedList.append(43);

console.log(myFirstLinkedList.insertData(20, 1));
console.log(myFirstLinkedList.insertData(23, 4));
console.log(myFirstLinkedList.insertData(221, 3));
console.log(myFirstLinkedList.getData());
