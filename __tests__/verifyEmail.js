const verifyEmail = require("../lib/verifyEmail")

test("verification fails when email doesn't contain an @", function(){
    expect(verifyEmail("thisisaninvalidemail")).toBe(false)
})

test("verification fails when email doesn't contain a .", function(){
    expect(verifyEmail("thisisaninvalidemail")).toBe(false)
})


test("verification fails when email contains only numbers", function(){
    expect(verifyEmail("1082379012")).toBe(false)
})

test("verification fails when email contains only letters", function(){
    expect(verifyEmail("abcdefg")).toBe(false)
})


test("verification fails when email has more than @", function(){
    expect(verifyEmail("rganesna07@gmail@com")).toBe(false)
})

test("verification passes when email contains one @ and one .", function(){
    expect(verifyEmail("rganesna07@gmail.com")).toBe(true)
})

test("verification passes when email contains characters and numbers together (and also has one @ and one . for the domain name).", function(){
    expect(verifyEmail("rganesna24@gmail.com")).toBe(true)
})

test("verification passes when email contains special characters($, !, _, -, ?) and one @ and one .", function(){
    expect(verifyEmail("rganesna-_!?07@gmail.com")).toBe(true)
})

test("verification passes when email contains only  numbers  (and also has one @ and one . for the domain name).", function(){
    expect(verifyEmail("97139478@gmail.com")).toBe(true)
})

test("verification passes when email contains only  letters (and also has one @ and one . for the domain name).", function(){
    expect(verifyEmail("abcdefg@gmail.com")).toBe(true)
})


