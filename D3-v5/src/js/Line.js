var d3 = require("d3");

import {D3init} from './util/D3Util'
import rand from './util/RandomData';

line();

function line ()
{
    var x = d3.range(1, 101, 1);
    var y = d3.range(100).map(function ()
    {
        var r = d3.randomUniform(0, 50)();
        return d3.format("d")(r);
    });
    var data = [];

    for (var i = 0; i < x.length; i++)
    {
        data.push({x: x[i], y: y[i]});
    }

    var width = 960,
            height = 540,
            padding = 30;

    var svg = d3.select("body").append("svg")
        var defs = d3.select("svg").append('defs')
        

    svg = D3init.init(svg, width, height, padding)

    var xScale = D3init.xScale(0, 100, width);
    var yScale = D3init.yScale(0, 50, height);

    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);
    D3init.appendxAxis(svg, height, xAxis)
    D3init.appendyAxis(svg, yAxis)

        defs.append('marker')
                        .attr("id" , "dot")
                .attr('markerWidth' , 5)
                .attr('markerHeight' , 5)
                .attr("viewBox" , "0 0 10 10")
                .attr('refX' , 5)
                .attr('refY' , 5)
                .append("circle")
                .attr("cx" , 5)
                .attr("cy" , 5)
                .attr("r" , 5)
                .attr("fill" , "red");
        
    var line = d3.line();

    line.x((d, i) => (xScale(d.x)));
    line.y((d, i) => (yScale(d.y)));

    //path 有變更
    svg.append('path')
            .attr("marker-start","url(#dot)")
            .attr("marker-mid","url(#dot)")
            .attr("marker-end","url(#dot)")
            .attr("d", () => (line(data)))
            .style("stroke", "steelblue")
            .style("fill", "none");
    
    var point = svg.append('g')
            .attr("id" , "point")
    var dot = point.selectAll(".dot")
            .data(x)
            .enter()
            .append('g')
            .attr("class", "dot");
          
/*
    dot.append('circle')
            .data(data)
            .attr("r", "2") 
            .attr("transform", function (d, index)
            {
                return "translate(" + (xScale(d.x)) + "," + (yScale(d.y)) + ")";
            });
    */
    dot.append('rect')
            .data(data)
            .attr('x' , function(d , index){
                return xScale(d.x)-4.8;
            })
            .attr('y' , '0')
            .attr('height' , () =>(height))
            .attr('width' , () =>(width/data.length))
            .attr('fill-opacity' , '0.0')
            .on("mouseover", handleMouseOver)
            .on("mouseout", handleMouseOut)

    console.log(svg.selectAll(".dot"));


        function handleMouseOver (d, i)
    {
        var text = "(" + d.x + "," + d.y + ")";
        svg.append("g")
                .attr("id", "text")
                .attr("transform", function ()
                {
                 return "translate(" + (xScale(d.x)) + "," + (yScale(d.y)) + ")";
                });
        svg.select("#text")
                .append("text")
                .text(() => (text))
                .attr("fill", "#000");
        
        svg.select("#point :nth-child(" + (i+1) + ") circle")
            .attr("r", "5") 

    }

    function handleMouseOut (d, i)
    {

        d3.select("#text").remove();
              svg.select("#point :nth-child(" + (i+1) + ") circle")
            .attr("r", "2") 
    }
}