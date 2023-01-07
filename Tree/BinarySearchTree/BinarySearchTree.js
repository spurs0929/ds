// 節點
class Node {
  constructor(value){
    this.value = value;
    // left
    this.left = null;
    // right
    this.right = null;
  }
}

// BST
class BinarySearchTree{
  constructor(){
    // root
    this.root = null;
  }
  // 新增節點
  insert(value){
    var newNode = new Node(value);
    // 沒有根節點
    if(this.root === null){
      // 根節點變成新增的節點
      this.root = newNode;
      // 返回二元搜尋樹物件
      return this;
    }
    // current預設從根節點開始
    var current = this.root;
    while(true){
      // 新增節點的值與根節點一樣
      if(value === current.value) return undefined;
      // 新增節點至根節點左側
      if(value < current.value){
        // 左側無節點
        if(current.left === null){
          current.left = newNode;
          return this;
        }
        current = current.left;
        // 新增節點至根節點右側
      } else {
        if(current.right === null){
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    } 
  }
  // 搜尋節點
  find(value){
    // 沒有根節點
    if(this.root === null) return false;
    // current預設從根節點開始
    var current = this.root;
    // 旗標
    var found = false;
    // 根節點存在且旗標為false
    while(current && !found){
       // 輸入節點值小於根節點值
      if(value < current.value){
        // current變為curent.left
        current = current.left;
         // 輸入節點值大於根節點值
      } else if (value > current.value){
        // current變為curent.right
        current = current.right;
      } else {
        // 旗標改成true
        found = true;
      }
    }
    // 沒找到節點
    if(!found) return false;
    // 找到節點
    return current;
  }
  // 節點是否存在BST中
  contains(value){
    // 沒有根節點
    if(this.root === null) return false;
    // current預設從根節點開始
    var current = this.root;
    // 旗標
    var found = false;
    // 根節點存在且旗標為false
    while(current && !found){
       // 輸入節點值小於根節點值
      if(value < current.value){
        // current變為curent.left
        current = current.left;
         // 輸入節點值大於根節點值
      } else if (value > current.value){
        // current變為curent.right
        current = current.right;
      } else {
        // 節點存在根節點中回傳true
        return true;
      }
    }
    // 節點不存在根節點中回傳false
    return false;
  }
}