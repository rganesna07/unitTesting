const romanNum = require("../lib/romanNum")

//this file contains all of my AAA where I arrange, act, and assert all my tests. my commented out test cases reflect this. I intentionally
// failed my test cases frequently to make sure my conversions were working. If they failed as expected, which I would understand 
// with the "received" attribute in the test. If it failed for the expected reason, I would go back in and change my tests so that they would pass.\
// If my test failed because it receieved a roman numeral I did not expect, I went back into the conversion file to figure out why it failed and refactored.
// I would then intentionally fail my test again to confirm it failed for the right reason. Once I was sure, I changed my tests so that they would pass.
test("number below 1 is an invalid input", function(){
    expect(() => romanNum(0)).toThrow();
})

test("Number greater that 3999 is an invalid input", function(){
    expect(() => romanNum(4000)).toThrow();
})

/* THESE ARE THE TESTS THAT FAIL!
test("number below 1 is an invalid input", function(){
    expect(() => romanNum(1)).toThrow();
})

test("Number greater that 3999 is an invalid input", function(){
    expect(() => romanNum(3900)).toThrow();
}) */

/* THESE ARE TESTS THAT FAIL!

    test("each time 1000 goes into the arabic Number, M gets added to the string. So, 1000 converts to M.", function(){
        expect(romanNum(1000)).toBe("MMMM");
    })
    test("2000 gets converted to MM", function(){
        expect(romanNum(2000)).toBe("MMMMM");
    })
        test("3000 gets converted to MM", function(){
    expect(romanNum(3000)).toBe("MMMMM");
    })
*/
test("each time 1000 goes into the arabic Number, M gets added to the string. So, 1000 converts to M.", function(){
    expect(romanNum(1000)).toBe("M");
})


test("2000 gets converted to MM", function(){
    expect(romanNum(2000)).toBe("MM");
})

test("3000 gets converted to MM", function(){
    expect(romanNum(3000)).toBe("MMM");
})


/* THESE ARE TESTS THAT FAIL!

    test("100 gets converted to C", function(){
        expect(romanNum(100)).toBe("MMMMM");
    })

    test("900 gets converted to CCCCCCCCC", function(){
        expect(romanNum(900)).toBe("MMMMM");
    })

*/
test("100 gets converted to C", function(){
    expect(romanNum(100)).toBe("C");
})

test("900 gets converted to CCCCCCCCC", function(){
    expect(romanNum(900)).toBe("CCCCCCCCC");
})

/* THESE ARE TESTS THAT FAIL!

    test("100 gets converted to C", function(){
        expect(romanNum(100)).toBe("MMMMM");
    })

    test("900 gets converted to CCCCCCCCC", function(){
        expect(romanNum(900)).toBe("MMMMM");
    })

*/
test("50 converts to L", function(){
    expect(romanNum(50)).toBe("L");
})

/* THESE IS A TEST THAT WILL FAIL!

    test("2378 converts to MMCCCLXXVIII", function(){
        expect(romanNum(2378)).toBe("MMMMMM");
    })

*/
test("2378 converts to MMCCCLXXVIII", function(){
    expect(romanNum(2378)).toBe("MMCCCLXXVIII");
})

/* THESE ARE TESTS THAT FAIL!

    test("10 converts to X", function(){
    expect(romanNum(10)).toBe("MMMM");
    })


    test("40 converts to XXXX", function(){
        expect(romanNum(40)).toBe("MMMMMM");
    })

*/
test("10 converts to X", function(){
    expect(romanNum(10)).toBe("X");
})


test("40 converts to XXXX", function(){
    expect(romanNum(40)).toBe("XXXX");
})


/* THESE ARE TESTS THAT FAIL!

    test("5 converts to roman V", function(){
        expect(romanNum(5)).toBe("MMMM");
    })

    test("1 converts to roman I", function(){
        expect(romanNum(1)).toBe("MMM");
    })


*/
test("5 converts to roman V", function(){
    expect(romanNum(5)).toBe("V");
})

test("1 converts to roman I", function(){
    expect(romanNum(1)).toBe("I");
})

test("3999 converts to roman MMMCCCCCCCCCLXXXXVIIII", function(){
    expect(romanNum(3999)).toBe("MMMCCCCCCCCCLXXXXVIIII");
})

