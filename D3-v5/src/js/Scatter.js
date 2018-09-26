
var d3 = require("d3");
import rand from './util/RandomData';
import {D3init} from './util/D3Util'

        scatter();

function scatter ()
{
    var x = rand.randomFloat(100, 0, 1);
    var y = rand.randomFloat(100, 0, 1);

    var label = rand.randomInt(100, 0, 1);

    var point = [];
    for (var i = 0; i < 100; i++)
    {
        point.push({x: x[i], y: y[i], label: label[i]})
    }

    var width = 960, height = 540, padding = 30;

    var svg = d3.select("body").append("svg")
    svg = D3init.init(svg, width, height, padding)

    var xScale = D3init.xScale(0, 1, width);
    var yScale = D3init.yScale(0, 1, height);

    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);

    var dot = svg.selectAll(".dot")
            .data(x)
            .enter()
            .append('g')
            .attr("class", "dot")
            .attr("transform", function (d, index)
            {
                return "translate(" + xScale(d) + "," + yScale(y[index]) + ")";
            });

    dot.append('circle')
            .data(point)
            .attr("r", "5")
            .attr("fill", function (d, index)
            {
                return d3.schemeCategory10[d.label];
            })
            .on("mouseover", handleMouseOver)
            .on("mouseout", handleMouseOut)

    function handleMouseOver (d, i)
    {
        var text = "(" + d.x +"," + d.y+")";
        svg.append("g")
                .attr("id", "text")
                .attr("transform", function ()
                {
                    return "translate(" + (xScale(d.x)-25) + "," + (yScale(d.y)-30) + ")";
                });
        svg.select("#text")
                .append("text")
                .text(()=>(text))
                .attr("textLength" ,  text.length*6)
                .attr("y" , 15)
                .attr("fill", "#000");

    }

    function handleMouseOut (d, i)
    {
        d3.select("#text").remove();
    }

    svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0,540)")
            .call(xAxis);

    svg.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(0,0)")
            .call(yAxis);
}
