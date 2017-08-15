function Queue(){
  this.datastore = []
  this.enqueue = enqueue
  this.length = length
  this.dequeue = dequeue
  this.front = front
  this.back = back
  this.toString = toString
  this.empty = empty
}

// 进队列
function enqueue(element){
  this.datastore.push(element)
}

// 出队列
function dequeue(){
  return this.datastore.shift()
}

function length(){
  return this.datastore.length
}

// 获取队首数据
function front(){
  return this.datastore[0]
}

// 获取队尾数据
function back(){
  return this.datastore[this.datastore.length-1]
}

// 获取所有数据
function toString(){
  return this.datastore
}

// 查看队列是否为空
function empty(){
  return this.datastore.length == 0
}

module.exports = Queue
