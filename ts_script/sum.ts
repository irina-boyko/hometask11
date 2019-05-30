module.exports = function sum(value:number) {
    let counter = value;
    function result(value2:number) {
        if (value2 == undefined) {
            return counter;
        } else {
            counter += value2;
            return result;
        }
    }
 return result;
}

