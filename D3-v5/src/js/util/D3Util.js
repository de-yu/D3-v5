
var d3 = require("d3");

 var D3init = {
    init:(svg , width , height , padding) => {
      return svg.attr("width", width+padding*2)
        .attr("height", height+padding*2).append("g")
        .attr("transform" ,"".concat("translate(" , padding , "," , padding , ")"));
    },
    xScale:(min , max , width) => {
      return d3.scaleLinear()
            .domain([min, max])
            .range([0, width]);
    },
    yScale:(min , max , height) => {
      return d3.scaleLinear()
            .domain([min, max])
            .range([height , 0]);
    },
    appendxAxis : (svg, height , xAxis) =>{
          svg.append("g")
          .attr("class","x axis")
          .attr("transform","translate(0,"+ height+")")
          .call(xAxis);
    },
    appendyAxis :(svg , yAxis) =>{
          svg.append("g")
          .attr("class","y axis")
          .attr("transform","translate(0,0)")
          .call(yAxis);
    }
}


export {D3init};