const romanNum = require("../lib/romanNum")


test("number below 1 is an invalid input", function(){
    const converter = new romanNum();
    expect(() => romanNum(0)).toThrow();
})

test("Number greater that 3999 is an invalid input", function(){
    const converter = new romanNum();
    expect(() => romanNum(4000)).toThrow();
})

//this should fail, making sure it fails because 1000 should be M
test("any multiple of 1000 gets converted to M", function(){
    expect(romanNum(1000)).toBe("L");
})

//should also fail
test("2000 gets converted to MM", function(){
    expect(romanNum(2000)).toBe("L");
})
