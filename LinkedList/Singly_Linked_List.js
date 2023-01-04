// 節點
class Node {
  constructor(value){
    // value
    this.value = value;
    // pointer
    this.next = null;
  }
}
// 單向鏈結串列
class SinglyLinkedList {
  constructor(){
    // head
    this.head = null;
    // tail 
    this.tail = null;
    // length
    this.length = 0;
  }
  // 新增節點到尾部
  push(value){
    // 創建新節點
    var newNode = new Node(value);
    // head不存在
    if(!this.head){
      // head等於newNode
      this.head = newNode;
      // tail等於newNode
      this.tail = newNode;
    }else {
      // tail next指向newNode
      this.tail.next = newNode;
      // 更新tail
      this.tail = newNode;
    }
    // 長度++
    this.length++
    return this;
  }
  // 刪除尾部節點
  pop(){
    if(!this.head) return undefined;
    // current
    var current = this.head;
    // new tail 
    var newTail = current;

    // current.next存在
    while(current.next){
      newTail = current;
      current = current.next;
    }
    // 刪掉原本的tail
    this.tail = newTail;
    // tail.next指向null
    this.tail.next = null;
    // 長度--
    this.length--;
    // length === 0
    if(this.length === 0){
      // 清空head
      this.head = null;
      // 清空tail
      this.tail = null;
    }
    // 回傳被刪除的node
    return current;
  }
  // 刪除頭部節點
  shift(){
    if(!this.head) return undefined;
    // 暫存head
    var currentHead = this.head;
    // this.head = 下一個節點
    this.head = currentHead.next;
    // 長度--
    this.length--;
    // 長度為0
    if(this.length === 0){
      // 清空head
      this.head = null;
      // 清空tail
      this.tail = null;
    }
    // 回傳被刪除的node
    return current;
  }
  // 新增節點到頭部
  unshift(value){
    // 創建新節點
    var newNode = new Node(value);
    // head不存在
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    // newNode.next -> head
    newNode.next = this.head;
    // head = newNode
    this.head = newNode;
    // 長度++
    this.length++;
    // 回傳list
    return this;
  }
  // 取得特定索引的節點
  get(index){
    // index為負 或 index大於list長度 
    if(index < 0 || index >= this.length) return null;
    // 計數器
    var counter = 0;
    // 從head開始
    var current = this.head;
    while(counter !== index){
      // 每次移動到下一個節點
      current = current.next;
      // 計數器++
      counter++;
    }
    return current;
  }
  // 設置新節點到特定的索引
  set(index, value){
    // 取得特定索引節點
    var node = this.get(index);
    // 節點存在?
    if(node){
      // 改變節點值
      node.value = value;
      // 回傳true
      return true;
    }
    // 回傳false
    return false;
  } 
  // 插入節點到某個索引
  insert(index, value){
    // 索引小於 0 或 索引大於list長度 回傳false
    if(index < 0 || index > this.length) return false;
    // 索引為list長度，操作push方法後回傳true
    if(index === this.length) return !!this.push(value);
    // 索引為0，操作unshift方法後回傳true
    if(index === 0) return !!this.unshift(value);
    // 創建新節點
    var newNode = new Node(value);
    // 索引的前一個節點
    var prev = this.get(index - 1);
    // 索引
    var temp = prev.next;
    // 在索引插入新節點
    prev.next = newNode;
    // 移動原索引節點
    newNode.next = temp;
    // list長度++
    this.length++;
    // 回傳true
    return true;
  }
  // 移除某索引的節點
  remove(index){
    // 索引為負 或 所以大於list長度
    if(index < 0 || index >= this.length) return undefined;
    // 索引為0，操作shift方法
    if(index === 0) return this.shift();
    // 索引為list長度，操作pop方法
    if(index === this.length) return this.pop();
    // 索引的前一個節點
    var prevNode = this.get(index - 1);
    // 要移除的節點
    var removed = prevNode.next;
    // 刪除特定索引節點
    prevNode.next = removed.next;
    // list長度--
    this.length--;
    // 回傳被移除的節點
    return removed;
  }
  // 反轉list
  reverse(){
    // node暫存head
    var node = this.head;
    // head變成tail
    this.head = this.tail;
    // tail變成head
    this.tail = node;
    var next;
    var prev = null;
    for(let i = 0; i < this.length; i++){
      next = node.next;
      node.next = prev;
      // node
      prev = node;
      // node.next
      node = next;
    }
    return this;
  }
  // 輸出所有list的節點值
  print(){
    var arr = [];
    var current = this.head;
    while(current){
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }
}