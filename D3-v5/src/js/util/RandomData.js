var d3 = require("d3");


export default {
    randomInt: (numSum , min , max) => {
  
        return d3.range(numSum).map( () => {
            var r = d3.randomUniform(min, max)();
            return parseInt(d3.format("d")(r));
        });
    },
    randomFloat: (numSum , min , max) => {

        return d3.range(numSum).map( () => {
            var r = d3.randomUniform(min, max)();
            return d3.format(".2")(r);
        });
    }
}