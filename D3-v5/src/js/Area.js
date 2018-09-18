
var d3 = require("d3");
import {D3init} from './util/D3Util'


        area();

function area ()
{
     var x = d3.range(0,100,1);
  var y = d3.range(100).map(function() {
    var r = d3.randomUniform(0,50)();
    return d3.format("d")(r);
  });

  var data = [];

  for (var i = 0;i < x.length;i++)
  {
    data.push({x:x[i],y:y[i]});
  }
    var width = 960,height = 540,padding = 30;
    //追加svg元素
    var svg = d3.select("body").append("svg")
            .datum(data)
            .attr("width", 960)
            .attr("height", 500)
            .append("g")
            .attr("transform", "translate(10,10)");
    
    
  var xScale = D3init.xScale(0,100,width);
  var yScale = D3init.yScale(0,50,height);
  
    //新建面积生成器	
    var area = d3.area()
            .x(function (d)
            {
                return xScale(d.x);
            })//x坐标
            .y1(function (d)
            {
                return yScale(d.y);
            })//顶线
            .y0(500);//基线
    //追加路径数据
    svg.append("path")
            .attr("fill", "steelblue")
            .attr("d", area);
}