//트리와 트리탐색(DFS, BFS)

// const tree = {
//   root: {
//     value: 4,
//     left: {
//       value: 3,
//       left: {
//         value: 1,
//         left: null,
//         right: null,
//       },
//       right: {
//         value: 10,
//         left: null,
//         right: null,
//       }
//     },
//     right: {
//       value: 8,
//       left: {},
//       right: {}
//     }
//   }
// }

//이진 트리 구현하기
class Node {
  constructor(data) {
    this.value = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    let init = new Node('init');
    this.root = init;
    this.dataLength = 0;
  }

  length() {
    return this.dataLength;
  }

  //이진탐색트리 데이터 넣기
  insert(data) {
    let newData = new Node(data);
    let currentNode = this.root;

    if (this.root.value === 'init') {
      this.root = newData;
      this.dataLength += 1;
      return;
    }

    for (let i = 0; i < this.dataLength; i++) {
      if (data < currentNode.value) {
        if (currentNode.left) {//현재노드왼쪽에 노드있을땐
          currentNode = currentNode.left;
          continue;
        } else {//데이터 넣을 자리가있다면
          currentNode.left = newData;
          this.dataLength += 1;
          return this;
        }
      } else if (data > currentNode.value) {
        if (currentNode.right) {
          currentNode = currentNode.right;
          continue;
        } else {
          currentNode.right = newData;
          this.dataLength += 1;
          return this;
        }
      }
    }
  }


  //깊이우선탐색 -> Stack구조를 사용한다. FILO
  depthFirstSearch() {
    let searchOrder = [];
    let stack = [];
    let currentNode = this.root;
    for (let i = 0; i < this.dataLength; i++) {
      searchOrder.push(currentNode.value)
      if (currentNode.left) {
        stack.push(currentNode.left);
      }
      if (currentNode.right) {
        stack.push(currentNode.right);
      }
      currentNode = stack.pop();
    }
    return searchOrder;
  }


  //너비우선탐색 -> Queue구조를 사용한다.FIFO
  breadthFirstSearch() {
    let searchOrder = [];
    let queue = [];
    let currentNode = this.root;

    for (let i = 0; i < this.dataLength; i++) {
      searchOrder.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
      currentNode = queue.shift();
    }
    return searchOrder;
  }
}

const limeTree = new BinaryTree()
limeTree.insert(10);
limeTree.insert(15);
limeTree.insert(4);
limeTree.insert(7);
limeTree.insert(9);
limeTree.insert(14);
limeTree.insert(2);
console.log(limeTree)
console.log(limeTree.depthFirstSearch());
console.log(limeTree.breadthFirstSearch());