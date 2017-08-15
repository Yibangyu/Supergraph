// 引入队列，广度优先搜索的时候需要用到
var Queue = require('./Queue')
var Stack = require('./Stack')


// 高级图，寻找两地之间的最短路径
function Supergraph(v){
  this.vertices = v
  this.edgs = 0
  this.adj = []
  this.edgeTo = []
  this.visited = []
  this.marked = []
  for(var i=0;i<this.vertices;i++){
    this.adj[i] = []
    this.visited[i] = []
    this.marked[i] = false
  }
  this.addEdg = addEdg
  this.getDistance = getDistance
  this.spotDistance = spotDistance
  this.bfs = bfs
  this.pathTo = pathTo
  this.toString = toString
}

function addEdg(v,w,d){
  this.adj[v].push({index:w,distance:d})
  this.adj[w].push({index:v,distance:d})
  this.edgs++
}

function toString(){
  for(var i=0;i<this.vertices;++i){
    console.log(i+'->')
    console.log(this.adj[i])
  }
}

// 广度优先搜索
function bfs(s){
  var queue = new Queue()
  queue.enqueue(s)
  while(queue.length() > 0){
    var v = queue.dequeue()
    if(!this.marked[v]){
      this.marked[v] = true
    for(var w=0;w<this.adj[v].length;w++){
      // this.visited[v].indexOf(this.adj[v][w]['index']) == -1
      if( this.adj[v][w]['index']!=this.edgeTo[v] && this.adj[v][w]['index'] != s ){
        this.visited[this.adj[v][w]['index']].push(v)
        queue.enqueue(this.adj[v][w]['index'])

        // 遇到重复路径，就对当前路径何之前的路径进行比较，短的胜出
        if( this.edgeTo[this.adj[v][w]['index']] ){
          var lastV = this.edgeTo[this.adj[v][w]['index']]
          var distance1 = this.getDistance(this.adj[v][w]['index'],s)
          this.edgeTo[this.adj[v][w]['index']] = v
          var distance2 = this.getDistance(this.adj[v][w]['index'],s)
          if(distance1 < distance2){
            this.edgeTo[this.adj[v][w]['index']] = lastV
          }
        }else{
          this.edgeTo[this.adj[v][w]['index']] = v
        }

      }
    }
  }

  }
}

// 获取当前点到起点的距离
function getDistance(end,begin){
  var path = []
  var distance = 0
  for(var i=end;i!=begin;i=this.edgeTo[i]){
    path.push(i)
  }
  path.push(begin)
  var i = 0
  while(i<path.length-1){
    distance+=this.spotDistance(path[i],path[i+1])
    i++
  }
  return distance
}

// 获取两个点之间的距离
function spotDistance(spot1,spot2){
  for(var i=0;i<this.adj[spot1].length;i++){
    if(this.adj[spot1][i]['index'] == spot2){
      return this.adj[spot1][i]['distance']
    }
  }
  return null
}

// 获取路径
function pathTo(w,v){
  this.bfs(w)
  var source = w
  if(this.visited[v].length == 0){
    return undefined
  }
  var path = new Stack()
  for(var i=v;i!=source;i=this.edgeTo[i]){
    path.push(i)
  }
  path.push(source)
  return path
}

module.exports = Supergraph
