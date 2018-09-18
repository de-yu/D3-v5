var d3 = require("d3");
import {D3init} from './util/D3Util'


line();

function line() {
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

  var svg = d3.select("body").append("svg")
  svg = D3init.init(svg,width,height,padding)

  var xScale = D3init.xScale(0,100,width);
  var yScale = D3init.yScale(0,50,height);

  var line = d3.line();

  line.x((d,i)=> (xScale(d.x)));
  line.y((d,i)=> (yScale(d.y)));


  //path 有變更
  svg.append('path')
          .attr("d",function() {
            return line(data);
          })
          .style("stroke","steelblue")
          .style("fill","none");

  var dot = svg.selectAll(".dot")
          .data(x)
          .enter()
          .append('g')
          .attr("class","dot")
          .attr("transform",function(d,index) {
            return "translate(" + (xScale(d)) + "," + (yScale(y[index])) + ")";
          });

  dot.append('circle')
          .data(x)
          .attr("r","2")


  var xAxis = d3.axisBottom(xScale);
  var yAxis = d3.axisLeft(yScale);
  svg.append("g")
          .attr("class","x axis")
          .attr("transform","translate(0,540)")
          .call(xAxis);

  svg.append("g")
          .attr("class","y axis")
          .attr("transform","translate(0,0)")
          .call(yAxis);
}