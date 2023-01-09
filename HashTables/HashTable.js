// 雜湊表
class HashTable {
  constructor(size=53){
    this.keyMap = new Array(size);
  }
  // 雜湊函式
  _hash(key){
    let total = 0;
    let WEIRD_PRIME = 31;
    // 餘數%
    for(let i = 0; i < Math.min(key.length, 100); i++){
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    // 回傳值
    return total;
  }
  // 新增資料
  set(key, value){
    let index = this._hash(key);
    // keyMap[index]為空
    if(!this.keyMap[index]){
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  // 獲取資料
  get(key){
    let index = this._hash(key);
    if(this.keyMap[index]){
      // 儲存多個array的情況
      for(let i = 0; i < this.keyMap[index].length; i++){
        if(this.keyMap[index][i][0] === key){
          // 回傳儲存值
          return this.keyMap[index][i][1];
        }
      }
    }
    // 回傳undefined
    return undefined;
  }
  // 獲取所有keys
  keys(){
    let keysArr = [];
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j = 0; j < this.keyMap[i].length; j++){
          if(!keysArr.includes(this.keyMap[i][j][0])){
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
  // 獲取所有values
  values(){
    let valuesArr = [];
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j = 0; j < this.keyMap[i].length; j++){
          if(!valuesArr.includes(this.keyMap[i][j][1])){
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}
