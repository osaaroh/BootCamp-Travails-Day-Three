const data = require("../word_class");

describe("Case for some falsy values", function() {

    it("should return 5 for (2,3)", function() {
        expect(data.add(2,3)).toEqual(5);
    });

    /*it("should return 'no value' for undefined", function() {
        expect(data.dataTypes(undefined)).toEqual('no value');
    });*/

});
