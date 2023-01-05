// 節點
class Node {
  constructor(value){
    // value
    this.value = value;
    // next node
    this.next = null;
    // prev node
    this.prev = null;
  }
}
// 雙向鏈結串列
class DoublyLinkedList {
  constructor(){
    // head
    this.head = null;
    // tail
    this.tail = null;
    // length
    this.length = 0;
  }
  // 新增節點到雙向鏈結串列tail
  push(value){
    // 創建節點
    var newNode = new Node(value);
    // length為0
    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    }else {
      // 新增節點到tail後
      this.tail.next = newNode;
      // 新節點的prev為舊的tail
      newNode.prev = this.tail;
      // 更新新節點到tail
      this.tail = newNode;
    }
    // 長度++
    this.length++;
    // 返回此雙向鏈結串列
    return this;
  }
  // 從tail端刪除節點
  pop(){
    // head不存在
    if(!this.head) return undefined;
    // 預計刪除的節點
    var poppedNode = this.tail;
    // list長度為1
    if(this.length === 1){
      // 刪除head
      this.head = null;
      // 刪除tail
      this.tail = null;
    }else {
      // tail變成tail的前一個節點
      this.tail = poppedNode.prev;
      // 刪除原本tail節點
      this.tail.next = null;
      // 刪除poppedNode的前一個節點
      poppedNode.prev = null;
    }
    // list長度--
    this.length--;
    // 回傳poppedNode
    return poppedNode;
  }
  // 從head端刪除節點
  shift(){
    // list長度為0
    if(this.length === 0) return undefined;
    // 預計刪除的節點
    var shiftNode = this.head;
    // list長度為1
    if(this.length === 1){
      // 刪除head
      this.head = null;
      // 刪除tail
      this.tail = null;
    }else {
      // head變成head的下一個節點
      this.head = shiftNode.next;
      // 刪除原本head節點
      this.head.prev = null;
      // 刪除shiftNode的前一個節點
      shiftNode.next = null;
    }
    // list長度--
    this.length--;
    // 回傳shiftNode
    return shiftNode;
  }
  // 新增節點到雙向鏈結串列head
  unshift(value){
    // 創建節點
    var newNode = new Node(value);
    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    }else {
      // 新增節點到head前
      this.head.prev = newNode;
      // 新節點的next為舊的head
      newNode.next = this.head;
      // 更新新節點到head
      this.head = newNode;
    }
  }
  // 取得特定索引的節點
  get(index){
    // 索引不存在
    if(index < 0 || index >= this.length) return null;
    var count;
    var current;
    // 處理list前半段
    if(index <= this.length / 2){
      // count從0開始
      count = 0;
      // 從head開始往後找
      current = this.head;
      while(count !== index){
        current = current.next;
        count++;
      }
    // 處理list後半段
    }else {
      count = this.length - 1;
      // 從tail開始往前找
      current = this.tail;
      while(count !== index){
        current = current.prev;
        count--;
      }
    }
    // 回傳節點
    return current;
  }
  // 設置新節點到特定索引
  set(index, value){
    // 獲取目標節點
    var targetNode = this.get(index);
    // 目標節點不為null
    if(targetNode !== null){
      // 目標節點值設定為value
      targetNode.value = value;
      // 設置成功回傳true
      return true;
    }
    // 設置失敗回傳false
    return false;
  }
  // 插入節點到特定索引
  insert(index, value){
    // 節點不存在
    if(index < 0 || index > this.length) return false;
    // 索引為0，操作unshift方法後回傳true
    if(index === 0) return !!this.unshift(value);
    // 索引為list長度，操作push方法後回傳true
    if(index === this.length) return !!this.push(value);

    // 一般情況
    // 創建節點 newNode
    var newNode = new Node(value);
    // 索引的前一個節點 Node index-1
    var beforeNode = this.get(index - 1);
    // 暫存原index的節點 Node index
    var afterNode = beforeNode.next;

    // index位置的節點變成newNode
    beforeNode.next = newNode;
    // newNode的前一位置為beforeNode
    newNode.prev = beforeNode;
    // index位置節點的下一個節點變成原index的節點
    newNode.next = afterNode;
    // 原index節點的前一個變成newNode
    afterNode.prev = newNode;
    // list長度++
    this.length++;
    // 回傳true
    return true;
  }
}
