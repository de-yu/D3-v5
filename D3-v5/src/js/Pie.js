
var d3 = require("d3");
import {D3init} from './util/D3Util'

        pie();

function pie() {
  var data = [1,1,2,3,5,8,13,21];

  var width = 960,height = 540,padding = 30;
  var svg = d3.select("body").append("svg")
  svg = D3init.init(svg,width,height,padding).attr("transform","translate(" + width / 2 + "," + height / 2 + ")");

  var pie = d3.pie();
  var color = d3.schemeCategory10;

  var radius = height / 2;

  var arc = d3.arc()
          .innerRadius(0)
          .outerRadius(radius);

  var arcs = svg.selectAll("path")
          .data(pie(data))
          .enter().append("path")
          .style("fill",function(d,i) {
            return color[i];
          })
          .attr("d",arc)
			arcs.append("text")
				.attr("transform", function(d) { 
					return "translate(" + arc.centroid(d) + ")"; 
				})
				.attr("dy", ".35em")
				.attr("text-anchor", "middle")
				.text(function(d,i) { return i; });
}