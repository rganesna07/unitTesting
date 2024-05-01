const verifyPassword = require("../lib/verifyPassword")

/*
 * This function verifies whether a password satisfies the following criteria:
 *   * Contains at least 8 characters
 *   * Contains at least one lowercase letter
 *   * Contains at least one uppercase letter
 *   * Contains at least one numerical digit
 *   * Contains at least one of the following symbols: !@#$%^&*
 *   * Does not contain invalid characters (spaces and other symbols not listed
 *     above)
 */

test("verification fails when password has less than 8 characters", function(){
    expect(verifyPassword("1234567").length).toBe(false)
    expect(verifyPassword("1234567").pass).toBe(false)
})

test("verification fails when password has no lowercase letters", function(){
    expect(verifyPassword("PASSWORD@1").lowercase).toBe(false)
    expect(verifyPassword("PASSWORD@1").pass).toBe(false)
})

test("verification fails when password has no uppercase letters", function(){
    expect(verifyPassword("password@1").uppercase).toBe(false)
    expect(verifyPassword("password@1").pass).toBe(false)
})

test("verification fails when password has no numbers", function(){
    expect(verifyPassword("password@").digit).toBe(false)
    expect(verifyPassword("password@").pass).toBe(false)
})

test("verification fails when password has no symbols", function(){
    expect(verifyPassword("Password1").symbol).toBe(false)
    expect(verifyPassword("Password1").pass).toBe(false)
})


test("verification fails when password has a space", function(){
    expect(verifyPassword("Pass word@1").noInvalid).toBe(false)
    expect(verifyPassword("Pass word@1").pass).toBe(false)
})

test("verification fails when password has an invalid symbol (not any of the following: !@#$%^&*)", function(){
    expect(verifyPassword("Password-1").noInvalid).toBe(false)
    expect(verifyPassword("Password-1").pass).toBe(false)
})

test("verification passes when password has at least one lowercase letter", function(){
    expect(verifyPassword("pASSWORD@1").lowercase).toBe(true)
    expect(verifyPassword("pASSWORD@1").pass).toBe(true)
})

test("verification passes when password has at least  8 characters", function(){
    expect(verifyPassword("pAsSwOrD1@").length).toBe(true)
    expect(verifyPassword("pAsSwOrD1@").pass).toBe(true)
})

test("verification passes when password has at least 1 uppercase letter", function(){
    expect(verifyPassword("pAssword@1").uppercase).toBe(true)
    expect(verifyPassword("pAssword@1").pass).toBe(true)
})

test("verification passes when password has at least 1 number", function(){
    expect(verifyPassword("pAssword1@").digit).toBe(true)
    expect(verifyPassword("pAsswor1d@").pass).toBe(true)
})


test("verification passes when password has a valid symbol (!@#$%^&*)", function(){
    expect(verifyPassword("Password@1").noInvalid).toBe(true)
    expect(verifyPassword("Password@1").pass).toBe(true)
})

test("verification passes when password doesn't have a space", function(){
    expect(verifyPassword("thisisMypassword1@").noInvalid).toBe(true)
    expect(verifyPassword("thisisMypassword1@").pass).toBe(true)
})
