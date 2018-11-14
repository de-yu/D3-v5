var d3 = require("d3");

import {D3init} from './util/D3Util'
import rand from './util/RandomData';

OrdinalLine();

function OrdinalLine()
{
  var dataset = [{time:"201801" , "average":"32"} , {time:"201802" , "average":"22.6"} , {time:"201803" , "average":"26"}];
  
  
    var width = 960,
            height = 540,
            padding = 30;

    var svg = d3.select("body").append("svg")
    svg = D3init.init(svg, width, height, padding)
    
    var yScale = D3init.yScale(0, 50, height);
    var xScale = d3.scaleOrdinal()
            .domain(dataset.map(function(d){return d.time}))
            .range([0,100,200]);
    
        var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);
    D3init.appendxAxis(svg, height, xAxis)
    D3init.appendyAxis(svg, yAxis)
    
      var line = d3.line();

    line.x((d, i) => (xScale(d.time)));
    line.y((d, i) => (yScale(d.average)));
    
        svg.append('path')
            .attr("d", () => (line(dataset)))
            .style("stroke", "steelblue")
            .style("fill", "none")
    var point = svg.append('g')
            .attr("id" , "point")
    var dot = point.selectAll(".dot")
            .data(dataset)
            .enter()
            .append('g')
            .attr("class", "dot");
    
    
    dot.append('circle')
            .attr("r", "2") 
            .attr("transform", function (d, index)
            {
                return "translate(" + (xScale(d.time)) + "," + (yScale(d.average)) + ")";
            });
}
