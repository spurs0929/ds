// 使用Linked List實現Stack
// 節點
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
// 堆疊
class Stack{
  constructor(){
    // 頭
    this.first = null;
    // 尾
    this.last = null;
    // 長度
    this.size = 0;
  }
  // 新增節點到堆疊
  push(value){
    var newNode = new Node(value);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    }else {
      // 暫存first
      var temp = this.first;
      // 原first位置改成newNode
      this.first = newNode;
      // first.next 改成first
      this.first.next = temp;
    }
    return ++this.size;
  }
  // 刪除最後一個節點
  pop(){
    // 堆疊中無節點，回傳null
    if(!this.first) return null;
    // 預定刪除的節點
    var temp = this.first;
    // 堆疊中只有一個節點
    if(this.first === this.last){
      this.last = null;
    }
    // 其他情況
    this.first = this.first.next;
    // 長度--
    this.size--;
    // 回傳被刪除的節點
    return temp.value;
  }
}