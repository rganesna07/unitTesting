const romanNum = require("../lib/romanNum")

//should fail, because 1 is a valid number
test("number below 1 is an invalid input", function(){
    const converter = new romanNum();
    expect(() => romanNum(1)).toThrow();
})

//should fail, because 3999 is a valid number
test("Number greater that 3999 is an invalid input", function(){
    const converter = new romanNum();
    expect(() => romanNum(3999)).toThrow();
})