
QUnit.module( "Array.prototype.back" , function() {
    QUnit.test( "test", function (assert) {
        assert.deepEqual( backTest1.back(), undefined , "accept");
        assert.deepEqual( backTest2.back(), 'XD' , "accept");
        assert.deepEqual( backTest3.back(), 12 , "accept");
        assert.deepEqual( backTest4.back(), null , "accept");
        assert.deepEqual( backTest5.back(), undefined , "accept");
    });
});

QUnit.module("Check Type", () => {
    QUnit.test( "isVal", function (assert) {
        assert.strictEqual( isVal(valTest)  , true,   "is val" );
        assert.strictEqual( isVal(operTest) , false,  "is not val" );
        assert.strictEqual( isVal(nilTest)  , false,  "is not val" );
    });
    QUnit.test( "isOper", function (assert) {
        assert.strictEqual( isOper(operTest) , true,   "is oper" );
        assert.strictEqual( isOper(valTest)  , false,  "is not oper" );
        assert.strictEqual( isOper(nilTest)  , false,  "is not oper" );
    });
});

QUnit.module( "Check function evaluate" , function () {

    QUnit.module( "without negative" , function () {
        QUnit.test( "basic test", function (assert) {
            assert.strictEqual( evaluate(addTest.in), addTest.out, "Add test accept" );
            assert.strictEqual( evaluate(subTest.in), subTest.out, "Sub test accept" );
            assert.strictEqual( evaluate(mulTest.in), mulTest.out, "Mul test accept" );
            assert.strictEqual( evaluate(divTest.in), divTest.out, "Div test accept" );
            assert.strictEqual( evaluate(modTest.in), modTest.out, "Mod test accept" );
        });
        QUnit.test( "advance test", function (assert) {
            assert.strictEqual( evaluate(ad1Test.in), ad1Test.out, "Adv test1 accept" );
            assert.strictEqual( evaluate(ad2Test.in), ad2Test.out, "Adv test2 accept" );
            assert.strictEqual( evaluate(ad3Test.in), ad3Test.out, "Adv test3 accept" );
            assert.strictEqual( evaluate(ad4Test.in), ad4Test.out, "Adv test4 " );
        });
    });

    QUnit.module( "with negative" , function () {
        QUnit.test( "base test", function (assert) {
            assert.strictEqual( evaluate(naddTest.in), naddTest.out, "Add test accept" );
            assert.strictEqual( evaluate(nsubTest.in), nsubTest.out, "Sub test accept" );
            assert.strictEqual( evaluate(nmulTest.in), nmulTest.out, "Mul test accept" );
            assert.strictEqual( evaluate(ndivTest.in), ndivTest.out, "Div test accept" );
            assert.strictEqual( evaluate(nmodTest.in), nmodTest.out, "Mod test accept" );
        });
        QUnit.test( "advance test", function (assert) {
            assert.strictEqual( evaluate(nad1Test.in), nad1Test.out, "Adv test1 accept" );
            assert.strictEqual( evaluate(nad2Test.in), nad2Test.out, "Adv test2 accept" );
            assert.strictEqual( evaluate(nad3Test.in), nad3Test.out, "Adv test3 accept" );
            assert.strictEqual( evaluate(nad4Test.in), nad4Test.out, "Adv test4 accept" );
        });
    });

});

QUnit.module( "Check class Calc" , function () {

    // let ptr = Calc;
    QUnit.module( "Test reset" , function () {
        QUnit.test( "base 10", function (assert) {
            let ptr = new Calc();
            ptr.reset(10);
            assert.deepEqual( ptr.base, 10, "Base test accept");
            assert.deepEqual( ptr.value, 0, "Value test accept");
            assert.deepEqual( ptr.buffer, [['val', 0]], "Buffer test accept");
            assert.deepEqual( ptr.calc, false, "Calc test accept");
        });
        QUnit.test( "base 2", function (assert) {
            let ptr = new Calc();
            ptr.reset(2);
            assert.deepEqual( ptr.base, 2, "Base test accept");
            assert.deepEqual( ptr.value, 0, "Value test accept");
            assert.deepEqual( ptr.buffer, [['val', 0]], "Buffer test accept");
            assert.deepEqual( ptr.calc, false, "Calc test accept");
        });
        QUnit.test( "base 8", function (assert) {
            let ptr = new Calc();
            ptr.reset(8);
            assert.deepEqual( ptr.base, 8, "Base test accept");
            assert.deepEqual( ptr.value, 0, "Value test accept");
            assert.deepEqual( ptr.buffer, [['val', 0]], "Buffer test accept");
            assert.deepEqual( ptr.calc, false, "Calc test accept");
        });
        QUnit.test( "base 16", function (assert) {
            let ptr = new Calc();
            ptr.reset(16);
            assert.deepEqual( ptr.base, 16, "Base test accept");
            assert.deepEqual( ptr.value, 0, "Value test accept");
            assert.deepEqual( ptr.buffer, [['val', 0]], "Buffer test accept");
            assert.deepEqual( ptr.calc, false, "Calc test accept");
        });
    });
    QUnit.module( "Test toString" , function () {
        QUnit.test( "without negative" , function (assert) {
            let ptr = new Calc();
            ptr.value = 16;
            assert.deepEqual( ptr.toString(2), '10000', "base 2 accept" );
            assert.deepEqual( ptr.toString(8), '20', "base 8 accept" );
            assert.deepEqual( ptr.toString(10), '16', "base 10 accept" );
            assert.deepEqual( ptr.toString(16), '10', "base 16 accept" );
        });
        QUnit.test( "with negative" , function (assert) {
            let ptr = new Calc();
            ptr.value = -16;
            assert.deepEqual( ptr.toString(2), '1111111111101111', "base 2 accept" );
            assert.deepEqual( ptr.toString(8), '177757', "base 8 accept" );
            assert.deepEqual( ptr.toString(10), '-16', "base 10 accept" );
            assert.deepEqual( ptr.toString(16), 'ffef', "base 16 accept" );
        });
    });
    QUnit.module( "Test exec" , function () {

        QUnit.module( "with cmd" , function () {
            QUnit.test( "c" , function (assert) {
                let ptr = new Calc();
                ptr.base = 10;
                ptr.value = 1;
                ptr.calc = true;
                ptr.buffer = [['val', 1]];
                ptr.exec('c');
                assert.deepEqual( ptr.value, 0, "value accept");
                assert.deepEqual( ptr.calc, false, "calc accept");
                assert.deepEqual( ptr.buffer, [['val', 0]], "buffer accept");
            });
            QUnit.test( "ce 1" , function (assert) {
                let ptr = new Calc();
                ptr.base = 10;
                ptr.value = 2;
                ptr.calc = false;
                ptr.buffer = [['val', 1], ['oper','add'], ['val', 2]];
                ptr.exec('ce');
                assert.deepEqual( ptr.value, 0, "value accept");
                assert.deepEqual( ptr.buffer, [['val', 1], ['oper', 'add'], ['val', 0]], "buffer accept");
            });
            QUnit.test( "ce 2" , function (assert) {
                let ptr = new Calc();
                ptr.base = 10;
                ptr.value = 1;
                ptr.calc = false;
                ptr.buffer = [['val', 1], ['oper','add']];
                ptr.exec('ce');
                assert.deepEqual( ptr.value, 0, "value accept");
                assert.deepEqual( ptr.buffer, [['val', 1], ['oper', 'add'], ['val', 0]], "buffer accept");
            });
            QUnit.test( "bs 1" , function (assert) {
                let ptr = new Calc();
                ptr.base = 10;
                ptr.value = 12;
                ptr.calc = false;
                ptr.buffer = [['val', 12]];
                ptr.exec('bs');
                assert.deepEqual( ptr.value, 1, "value accept");
                assert.deepEqual( ptr.buffer, [['val', 1]], "buffer accept");
            });
            QUnit.test( "bs 2" , function (assert) {
                let ptr = new Calc();
                ptr.base = 10;
                ptr.value = 12;
                ptr.calc = false;
                ptr.buffer = [['val', 12], ['oper','add']];
                ptr.exec('ce');
                assert.deepEqual( ptr.value, 1, "value accept");
                assert.deepEqual( ptr.buffer, [['val', 12], ['oper', 'add'], ['val', 1]], "buffer accept");
            });
            QUnit.test( "neg 1" , function (assert) {
                let ptr = new Calc();
                ptr.base = 10;
                ptr.value = 1;
                ptr.calc = false;
                ptr.buffer = [['val', 1]];
                ptr.exec('neg');
                assert.deepEqual( ptr.value, -1, "value accept");
                assert.deepEqual( ptr.buffer, [['val', -1]], "buffer accept");
            });
            QUnit.test( "neg 2" , function (assert) {
                let ptr = new Calc();
                ptr.base = 10;
                ptr.value = 1;
                ptr.calc = false;
                ptr.buffer = [['val', 1], ['oper','add']];
                ptr.exec('neg');
                assert.deepEqual( ptr.value, -1, "value accept");
                assert.deepEqual( ptr.buffer, [['val', 1], ['oper','add'], ['val', -1]], "buffer accept");
            });
            QUnit.test( "calc 1" , function (assert) {
                let ptr = new Calc();
                ptr.base = 10;
                ptr.value = 12;
                ptr.calc = false;
                ptr.buffer = [['val', 1], ['oper','add'], ['val', 12]];
                ptr.exec('calc');
                assert.deepEqual( ptr.value, 13, "value accept");
                assert.deepEqual( ptr.calc, true, "calc accept");
                assert.deepEqual( ptr.buffer, [['val', 13]], "buffer accept");
            });
            QUnit.test( "calc 2" , function (assert) {
                let ptr = new Calc();
                ptr.base = 10;
                ptr.value = 1;
                ptr.calc = false;
                ptr.buffer = [['val', 1], ['oper','add']];
                ptr.exec('calc');
                assert.deepEqual( ptr.value, 2, "value accept");
                assert.deepEqual( ptr.calc, true, "calc accept");
                assert.deepEqual( ptr.buffer, [['val', 2]], "buffer accept");
            });
        });

        QUnit.module( "without cmd" , function () {
            QUnit.test( "test1" , function (assert) {
                let ptr = new Calc();
                ptr.base = 10;
                ptr.reset(10);
                ptr.exec("val-1");
                ptr.exec("val-2");
                assert.deepEqual( ptr.value, 12, "value accept");
                assert.deepEqual( ptr.buffer, [['val', 12]], "buffer accept");
            });
            QUnit.test( "test2" , function (assert) {
                let ptr = new Calc();
                ptr.base = 10;
                ptr.reset(10);
                ptr.exec("val-1");
                ptr.exec("val-2");
                ptr.exec("oper-add");
                assert.deepEqual( ptr.value, 12, "value accept");
                assert.deepEqual( ptr.buffer, [['val', 12], ['oper', 'add']], "buffer accept");
            });
            QUnit.test( "test3" , function (assert) {
                let ptr = new Calc();
                ptr.base = 10;
                ptr.reset(10);
                ptr.exec("val-1");
                ptr.exec("val-2");
                ptr.exec("oper-add");
                ptr.exec("val-3");
                assert.deepEqual( ptr.value, 3, "value accept");
                assert.deepEqual( ptr.buffer, [['val', 12], ['oper', 'add'], ['val', 3]], "buffer accept");
            });
            QUnit.test( "test4" , function (assert) {
                let ptr = new Calc();
                ptr.base = 10;
                ptr.reset(10);
                ptr.exec("val-1");
                ptr.exec("val-2");
                ptr.exec("oper-add");
                ptr.exec("oper-sub");
                assert.deepEqual( ptr.value, 12, "value accept");
                assert.deepEqual( ptr.buffer, [['val', 12], ['oper', 'sub']], "buffer accept");
            });
        });
    });

});
