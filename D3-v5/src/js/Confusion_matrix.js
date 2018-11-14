
var d3 = require("d3");
import {D3init} from './util/D3Util'
import rand from './util/RandomData';

function confusion_matrix()
{
    var predict =  rand.randomInt(100, 0, 1);
    var correct =  rand.randomInt(100, 0, 1);
   
    var width = 960, height = 540, padding = 30;
   
    var svg = d3.select("body").append("svg")
    svg = D3init.init(svg, width, height, padding)
}