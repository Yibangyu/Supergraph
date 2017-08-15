var Supergraph = require('./Supergraph')

var g = new Supergraph(6)
g.addEdg(0,1,2)
g.addEdg(0,3,3)
g.addEdg(0,2,8)
g.addEdg(1,4,4)
g.addEdg(3,4,5)
g.addEdg(2,5,7)
g.addEdg(4,5,10)

var path = g.pathTo(0,5)
var str = ''
while(path.length()>0){
  if(path.length()>1){
    str += path.pop()+'-'
  }else{
    str += path.pop()
  }
}

console.log('最短路径为:'+str)
console.log('最短距离为:'+g.getDistance(5,0))
