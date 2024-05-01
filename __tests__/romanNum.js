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

test("3000 gets converted to MM", function(){
    expect(romanNum(3000)).toBe("MMM");
})

test("100 gets converted to C", function(){
    expect(romanNum(100)).toBe("C");
})

test("900 gets converted to CCCCCCCCC", function(){
    expect(romanNum(900)).toBe("CCCCCCCCC");
})

test("50 converts to L", function(){
    expect(romanNum(50)).toBe("L");
})

test("370 converts to MMCCCLXX", function(){
    expect(romanNum(2370)).toBe("MMCCCLXX");
})


test("10 converts to X", function(){
    expect(romanNum(10)).toBe("X");
})


test("40 converts to XXXX", function(){
    expect(romanNum(40)).toBe("XXXX");
})

//should fail
test("5 converts to V", function(){
    expect(romanNum(5)).toBe("XXXX");
})
