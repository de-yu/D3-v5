
var d3 = require("d3");
import {D3init} from './util/D3Util'
import rand from './util/RandomData';

confusion_matrix()

function confusion_matrix()
{
    var predict =  rand.randomInt(10, 0, 2);
    var correct =  rand.randomInt(10, 0, 2);
   
    var matrix = new Array(9);
   
   for(var i=0;i<9;i++){
       matrix[i] = 0
   }
   for(var i=0;i<predict.length;i++){
     matrix[correct[i]*3+predict[i]]++;
   }
   console.log(predict);
   console.log(correct);
   console.log(matrix);
    var width = 960, height = 540, padding = 30;
   
    var svg = d3.select("body").append("svg")
    svg = D3init.init(svg, width, height, padding)
    
    var xScale = D3init.xScale(0, 1, height);
    var yScale = D3init.yScale(0, 1, height);

        var table = svg.selectAll(".table")
            .data(matrix)
            .enter().append("g")
            .attr("class", "table")
            .attr("transform", function (d, index)
            {
                return "translate(" + xScale((index%3) * 0.33) + "," + yScale(parseInt(index/3)*0.33) + ")";
            });
            
        table.append("rect")
        .attr("width", 50)
        .attr("height", function (d)
        {
            return  (50);
        }).attr("stroke", function (d, index)
        {

            return 'black';
        });
}