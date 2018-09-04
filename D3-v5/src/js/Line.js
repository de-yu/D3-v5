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
                height = 540;
        
        var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height)


    var line = d3.line();

    var xScale = d3.scaleLinear()
            .domain([0, 100])
            .range([0, width-50]);
    var yScale = d3.scaleLinear()
            .domain([0, 100])
            .range([0, height-30]);

    line.x(function (d, i)
    {
        return xScale(d.x);
    })
    line.y(function (d, i)
    {
        return yScale(d.y);
    });


    svg.append('path')
            .attr( "d" ,  function ()
                {
                    return line(data);
                })
            .style({
                //path颜色：steelblue
                "stroke": "steelblue",
                //path粗细：5
                "stroke-width": 5,
                //path填充：white
                "fill": "white"
            });
}