
var d3 = require("d3");
import rand from './util/RandomData';
import {D3init} from './util/D3Util'

scatter();

function scatter ()
{
    var x = rand.randomFloat(100, 0, 1);
    var y = rand.randomFloat(100, 0, 1);
    var label = rand.randomInt(100, 0, 1);

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
            .data(x)
            .attr("r", "5")
            .attr("fill", function (d, index)
            {
                return d3.schemeCategory10[label[index]];
            })
            .on("mouseover", handleMouseOver)
            .on("mouseout", handleMouseOut)

    function handleMouseOver (d, i)
    {
        svg.append("text")
                .attr("id", "t" + d.x + "-" + d.y + "-" + i)
                .attr("x", 40)
                .attr("y", 40)
                .text("(" + x[i] + " , " + y[i] + ")");
    }

    function handleMouseOut (d, i)
    {
        d3.select("#t" + d.x + "-" + d.y + "-" + i).remove();
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
