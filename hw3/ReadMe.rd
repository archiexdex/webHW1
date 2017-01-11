# Unit Test On Brower

## calc.js

To test calc.js, you need to open test/calcTest.html
    - Array.prototype.back
    - Check Type
        - isVal
        - isOper
    - Check function evaluate
        - without negative
            - basic test
            - advance test
        - with negative
            - basic test
            - advance test
    - Check class Calc
        - Test reset
            - base 10
            - base 2
            - base 8
            - base 16
        - Test toString
            - without negative
            - with negative
        - Test exec
            - with cmd
                - c
                - ce 1
                - ce 2
                - bs 1
                - bs 2
                - neg 1
                - neg 2
                - calc 1
                - calc 2
            - without cmd
                - test1
                - test2
                - test3
                - test4

## main.js

To test main.js, you need to open test/userCtrTest.html

    - User Controll
        - help button test
        - base 2
        - base 8 test 1
        - base 8 test 2
        - base 10 test 1
        - base 10 test 2
        - base 16 test 1
        - base 16 test 2
        - expression test

# Offline qunit

you have to install `QUnit` with `npm install qunit`
`cd offline_qunit`
`npm install qunit`
`./node_modules/.bin/qunit -c ../test/calc.js -t calcTest.js`


# Coverage
Because blanket.js can't work for ES6, so I use babel to change code from ES6 to ES5.

- calc.js 96.55%
- main.js 83.67%

# Bug
I found a bug that when I click "2 + ce =", it should be '2' but it show '20'
