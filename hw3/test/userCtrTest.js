QUnit.module( "User Controll" , function () {

    QUnit.test( "help button test", function (assert) {
        let finish = assert.async();
        $('.help-btn').trigger('click');
        $('.help-wrapper').trigger('click');
        setTimeout(function() {
            assert.ok( $('.help-wrapper').css('display').indexOf('none') <= 0, "click help correct");
            finish();
        }, 1000);
    });


    QUnit.test( "base 2", function (assert) {console.log("AAA");
        let done = assert.async();
        $('.base.bin').trigger('click');
        $('.button[data-content=c]').trigger('click');
        setTimeout(function() {
            $('.button[data-content=val-1]').trigger('click');
            $('.button[data-content=val-0]').trigger('click');
        }, 100);
        setTimeout(function() {
            assert.strictEqual( $('.value').html(), '10', "base 2 correct");
            done();
        }, 1000);
    });

    QUnit.test( "base 8 test 1", function (assert) {console.log("BBB");
        let done = assert.async();
        $('.base.oct').trigger('click');
        $('.button[data-content=c]').trigger('click');
        setTimeout(function() {
            $('.button[data-content=val-1]').trigger('click');
            $('.button[data-content=val-0]').trigger('click');
            $('.button[data-content=val-2]').trigger('click');
            $('.button[data-content=val-3]').trigger('click');
        }, 100);
        setTimeout(function() {
            assert.strictEqual( $('.value').html(), '1023', "base 8 correct");
            done();
        }, 1000);
    });

    QUnit.test( "base 8 test 2", function (assert) {console.log("CCC");
        let done = assert.async();
        $('.base.oct').trigger('click');
        $('.button[data-content=c]').trigger('click');
        setTimeout(function() {
            $('.button[data-content=val-4]').trigger('click');
            $('.button[data-content=val-5]').trigger('click');
            $('.button[data-content=val-6]').trigger('click');
            $('.button[data-content=val-7]').trigger('click');
        }, 100);
        setTimeout(function() {
            assert.strictEqual( $('.value').html() , '4567' , "base 8 correct");
            done();
        }, 1000);
    });

    QUnit.test( "base 10 test 1", function (assert) {
        let done = assert.async();
        $('.base.dec').trigger('click');
        $('.button[data-content=c]').trigger('click');
        setTimeout(function() {
            $('.button[data-content=val-1]').trigger('click');
            $('.button[data-content=val-0]').trigger('click');
            $('.button[data-content=val-2]').trigger('click');
            $('.button[data-content=val-3]').trigger('click');
            $('.button[data-content=val-4]').trigger('click');
        }, 100);
        setTimeout(function() {
            assert.ok( $('.value').html() == '10234', "base 10 correct");
            done();
        }, 1000);
    });

    QUnit.test( "base 10 test 2", function (assert) {
        let done = assert.async();
        $('.base.dec').trigger('click');
        $('.button[data-content=c]').trigger('click');
        setTimeout(function() {
            $('.button[data-content=val-5]').trigger('click');
            $('.button[data-content=val-6]').trigger('click');
            $('.button[data-content=val-7]').trigger('click');
            $('.button[data-content=val-8]').trigger('click');
            $('.button[data-content=val-9]').trigger('click');
        }, 100);
        setTimeout(function() {
            assert.ok( $('.value').html() == '56789', "base 10 correct");
            done();
        }, 1000);
    });

    QUnit.test( "base 16 test 1", function (assert) {
        let done = assert.async();
        $('.base.hex').trigger('click');
        $('.button[data-content=c]').trigger('click');
        setTimeout(function() {
            $('.button[data-content=val-a]').trigger('click');
            $('.button[data-content=val-b]').trigger('click');
            $('.button[data-content=val-c]').trigger('click');
        }, 1000);
        setTimeout(function() {
            assert.strictEqual( $('.value').html() ,'abc', "base 16 correct");
            done();
        }, 1000);
    });

    QUnit.test( "base 16 test 2", function (assert) {
        let done = assert.async();
        $('.base.hex').trigger('click');
        $('.button[data-content=c]').trigger('click');
        setTimeout(function() {
            $('.button[data-content=val-d]').trigger('click');
            $('.button[data-content=val-e]').trigger('click');
            $('.button[data-content=val-f]').trigger('click');
        }, 100);
        setTimeout(function() {
            assert.strictEqual( $('.value').html() ,'def', "base 16 correct");
            done();
        }, 1000);
    });

    QUnit.test( "expression test", function (assert) {
        let done = assert.async();
        $('.base.dec').trigger('click');
        $('.button[data-content=c]').trigger('click');
        setTimeout(function() {
            $('.button[data-content=val-7]').trigger('click');
            $('.button[data-content=oper-add]').trigger('click');
            $('.button[data-content=val-9]').trigger('click');
            $('.button[data-content=oper-sub]').trigger('click');
            $('.button[data-content=val-4]').trigger('click');
            $('.button[data-content=neg]').trigger('click');
            $('.button[data-content=oper-mul]').trigger('click');
            $('.button[data-content=val-3]').trigger('click');
            $('.button[data-content=oper-div]').trigger('click');
            $('.button[data-content=val-2]').trigger('click');
            $('.button[data-content=oper-mod]').trigger('click');
            $('.button[data-content=val-6]').trigger('click');
            $('.button[data-content=calc]').trigger('click');
        }, 1500);

        setTimeout(function() {
            assert.strictEqual( $('.value').html() ,'0', "base 16 correct");
            done();
        }, 1000);
    });


});
