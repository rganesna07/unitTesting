module.exports= function romanNum(arabicNum){

    if (arabicNum <1 || arabicNum > 3999) {
        throw new Error ("Number is invalid. Must be between 1 and 3999, inclusive");
    }

    /*pseudocodish: decrement number value after checking the place from arabic
    number. increment the roman number string with the letter matching the 
    roman numeral equivalent*/
    /*| Arabic | Roman numeral |
    | ------ | ------------- |
    | 1      | I             |
    | 5      | V             |
    | 10     | X             |
    | 50     | L             |
    | 100    | C             |
    | 1000   | M             | */

    let romanNum = "";

    /*arabic 1000 = roman M*/
    while (arabicNum >= 1000){
        romanNum += "M";
        arabicNum -= 1000;
    }

    /*arabic 100 = roman C */
    while (arabicNum >= 100){
        romanNum += "C";
        arabicNum -= 100;
    }

    /*arabic 50 = roman L */
    while (arabicNum >= 50){
        romanNum += "L";
        arabicNum -= 50;
    }

    /*arabic 10 = roman X */
    while (arabicNum >= 10){
        romanNum += "X";
        arabicNum -= 10;
    }

    /*arabic 5 = roman V*/
    while (arabicNum >= 5){
        romanNum += "X";
        arabicNum -= 5;
    }

    return romanNum;
}