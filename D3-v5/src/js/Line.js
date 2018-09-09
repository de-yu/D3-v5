var d3 = require("d3");

line();

function line ()
{
    var x = d3.range(0, 100, 1);
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
                height = 540 , padding = 30;
        
        var svg = d3.select("body").append("svg")
        .attr("width", width+padding*2)
        .attr("height", height+padding*2).append("g");


    var line = d3.line();

    var xScale = d3.scaleLinear()
            .domain([0, 100])
            .range([0, width]);
    
    var yScale = d3.scaleLinear()
            .domain([0, 50])
            .range([height , 0]);

    line.x(function (d, i)
    {
        return xScale(d.x);
    })
    line.y(function (d, i)
    {
        return yScale(d.y);
    });
    
    svg.attr("transform" ,"translate(30,30)");
    
    //path 有變更
    svg.append('path')
    .attr( "d" ,  function ()
        {
            return line(data);
        })
    .style( "stroke" , "steelblue")
    .style("fill" , "white");
    
        var dot = svg.selectAll(".dot")
            .data(x)
            .enter()
            .append('g')
            .attr("class", "dot")
            .attr("transform", function (d , index)
            {
                return "translate(" +( xScale(d)) + "," +(yScale(y[index])) + ")";
            });

    dot.append('circle')
            .data(x)
            .attr("r" , "2")

    
            var xAxis = d3.axisBottom(xScale);
        var yAxis = d3.axisLeft(yScale);
        svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0,540)")
        .call(xAxis);

        svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(0,0)")
        .call(yAxis);
}