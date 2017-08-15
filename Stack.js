// 进栈用push,出栈用pop,peek访问栈顶的元素
function Stack(){
  this.dataStore = []
  this.top = 0
  this.push = push
  this.pop = pop
  this.peek = peek
  this.clear = clear
  this.length = length
}

module.exports = Stack

function push(element){
  this.dataStore[this.top++] = element
}

function pop(){
  return this.dataStore[--this.top]
}

function peek(){
  return this.dataStore[this.top-1]
}

function clear(){
  this.top = 0
}

function length(){
  return this.top
}
