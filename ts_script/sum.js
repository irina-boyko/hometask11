module.exports = function sum(value) {
    var counter = value;
    function result(value2) {
        if (value2 == undefined) {
            return counter;
        }
        else {
            counter += value2;
            return result;
        }
    }
    return result;
};
