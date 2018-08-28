
var d3 = require("d3");

his();

function his()
{
    // d3 random 改變
    var values = d3.range(1000).map(d3.randomNormal(0.5, 0.1));

var width = 960,
        height = 500,
        padding = 6;

//  scale 有改變
var x = d3.scaleLinear()
        .domain([0, 1])
        .range([0, width]);

// layout.histogram 改變
var data = d3.histogram()
    .domain(x.domain())
    .thresholds(x.ticks(20))(values);

//  scale 有改變
var y = d3.scaleLinear()
        .domain([0, d3.max(data, function (d)
            {
                return d.length;
            })])
        .range([0 , height]);
// axis 改變
var xAxis = d3.axisBottom(x);

var svg = d3.select("body").append("svg")
        .attr("width", width + 30)
        .attr("height", height + 30)
        .append("g")
        .attr("transform", "translate(" + padding * 2 + "," + padding + ")");

var bar = svg.selectAll(".bar")
        .data(data)
        .enter().append("g")
        .attr("class", "bar")
        .attr("transform", function (d , index)
        {
            return "translate(" + x(index * 0.05) + "," +(height -  y(d.length)) + ")";
        });
        
        bar.append("rect")
        .attr("width", width/data.length)
        .attr("height", function (d)
        {
            return  y(d.length)+ 5;
        }).attr("fill" , function(d , index){

            return d3.interpolateRdYlGn(index/data.length);
        });

        svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(" + padding + "," + height + ")")
        .call(xAxis);
}