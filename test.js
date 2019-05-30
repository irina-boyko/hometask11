const sum = require('./js_script/sum');
const assert = require('assert');

describe("sum", function () {

    it("test1", function () {
        assert.equal((sum(1)(2)()), 3);
    });

    it("test2", function () {
        assert.equal((sum(1)(2)(3)()), 6);
    });

    it("test3", function () {
        assert.equal((sum(1)(2)(3)(4)()), 10);
    });
});