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
  // 深度搜尋
  BFS(){
    // node初始為根節點
    var node = this.root;
    // result
    var data = [];
    // temp
    var queue = [];
    queue.push(node);

    // queue陣列有值
    while(queue.length){
      node = queue.shift();
      // node.value值存入結果陣列
      data.push(node.value);
      // 判斷左節點存在
      if(node.left) queue.push(node.left);
      // 判斷右節點存在
      if(node.right) queue.push(node.right);
    }
    // 回傳結果
    return data;
  }
  // 廣度搜尋(前序)
  DFSPreOrder(){
    var data = [];
    // tree traverse
    function traverse(node){
      // 根節點 -> 左節點 -> 右節點
      data.push(node.value);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  // 廣度搜尋(中序)
  DFSInOrder(){
    var data = [];
    // tree traverse
    function traverse(node){
      // 左節點 -> 根節點 -> 右節點
      if(node.left) traverse(node.left);
      data.push(node.value);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  // 廣度搜尋(後序)
  DFSPostOrder(){
    var data = [];
    // tree traverse
    function traverse(node){
      // 左節點 -> 右節點 -> 根節點
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
}