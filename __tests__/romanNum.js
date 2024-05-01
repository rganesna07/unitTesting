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
test("each time 1000 goes into the arabic Number, M gets added to the string. So, 1000 converts to M.", function(){
    expect(romanNum(1000)).toBe("M");
})


test("2000 gets converted to MM", function(){
    expect(romanNum(2000)).toBe("MM");
})

test("100 gets converted to C", function(){
    expect(romanNum(100)).toBe("C");
})

test("500 gets converted to CCCCC", function(){
    expect(romanNum(500)).toBe("CCCCC");
})