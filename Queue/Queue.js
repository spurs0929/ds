// 使用Linked List實現Queue
// 節點
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// Queue
class Queue {
    constructor(){
        // 頭
        this.first = null;
        // 尾
        this.last = null;
        // 長度
        this.size = 0;
    }
    // 新增節點到佇列中
    enqueue(value){
        // 創建節點
        var newNode = new Node(value);
        // first不存在
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    // 移除佇列中的節點
    dequeue(){
        // first不存在代表queue中無節點
        if(!this.first) return null;
        // 暫存要移除的節點
        var temp = this.first;
        // first等於last
        if(this.first === this.last){
            // 清空last
            this.last = null;
        }
        // 改變first位置
        this.first = this.first.next;
        // 長度--
        this.size--;
        // 移除的值
        return temp.value;
    }
}