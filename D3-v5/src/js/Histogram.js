
var d3 = require("d3");
import rand from './util/RandomData';
import {D3init} from './util/D3Util'

        histogram();

function histogram ()
{
    // d3 random 改變
    var values = d3.range(1000).map(d3.randomNormal(0.5, 0.1));

    var width = 960,
            height = 540,
            padding = 30;

    var svg = d3.select("body").append("svg")
    svg = D3init.init(svg, width, height, padding)

    var xScale = D3init.xScale(0, 1, width);


    var data = d3.histogram()
            .domain(xScale.domain())
            .thresholds(xScale.ticks(20))(values);


    var yScale = d3.scaleLinear()
            .domain([0,d3.max(data, function (d)
                {
                    return d.length;
                })])
            .range([height,0]);

    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);

    D3init.appendxAxis(svg, height, xAxis)
    D3init.appendyAxis(svg, yAxis)

    var bar = svg.selectAll(".bar")
            .data(data)
            .enter().append("g")
            .attr("class", "bar")
            .attr("transform", function (d, index)
            {
                return "translate(" + xScale(index * 0.05) + "," + yScale(d.length) + ")";
            });

    bar.append("rect")
            .attr("width", width / data.length)
            .attr("height", function (d)
            {
                return  (height-yScale(d.length));
            }).attr("fill", function (d, index)
            {

                return d3.interpolateRdYlGn(index / data.length);
            });

}