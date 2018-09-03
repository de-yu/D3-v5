
var d3 = require("d3");

scatter();

function scatter()
{
        var x = d3.range(100).map(function(){
            var r = d3.randomUniform(0, 1)();
            return d3.format(".2")(r);
        });
        var y =d3.range(100).map(function(){
            var r = d3.randomUniform(0, 1)();
            return d3.format(".2")(r);
        });
        var label = d3.range(100).map(function(){
            var r = d3.randomUniform(0, 1)();
            return d3.format("d")(r);
        });
        
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
                .attr("fill" , function(d , index){
                    return d3.schemeCategory10[label[index]];
                })
                .on("mouseover", handleMouseOver)
                .on("mouseout" , handleMouseOut)
                
        function handleMouseOver(d, i) {


            svg.append("text")
                    .attr("id" , "t" + d.x + "-" + d.y + "-" + i)
                    .attr("x" , 40)
                    .attr("y" , 40)
                    .text("(" + x[i] + " , " + y[i] + ")");
          }
        
         function handleMouseOut(d, i) {
            d3.select("#t" + d.x + "-" + d.y + "-" + i).remove();
          }   
        
        svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(30," + (height-20) + ")")
        .call(xAxis);

        svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(30,10)")
        .call(yAxis);
}
