
var d3 = require("d3");

scatter();

function scatter()
{
        var x = d3.range(100).map(d3.randomUniform(0, 1));
        var y =d3.range(100).map(d3.randomUniform(0, 1));
        
        var width = 960,
                height = 540;
        
        var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")

        var xScale = d3.scaleLinear()
                .domain([0, 1])
                .range([0, width-50]);
                var yScale = d3.scaleLinear()
                .domain([0, 1])
                .range([0, height-30]);
        var xAxis = d3.axisBottom(xScale);
        var yAxis = d3.axisLeft(yScale);
        
        var dot = svg.selectAll(".dot")
                .data(x)
                .enter()
                .append('g')
                .attr("class", "dot")
                .attr("transform", function (d , index)
                {
                    return "translate(" +( xScale(d)+30) + "," +(yScale(y[index])+10) + ")";
                });

        dot.append('circle')
                .data(x)
                .attr("r" , "5")
        
        
        
        svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(30," + (height-20) + ")")
        .call(xAxis);

        svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(30,10)")
        .call(yAxis);
}