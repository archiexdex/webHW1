let ptr = require('../test/calc.js');

QUnit.test( "isOper", function (assert) {
        assert.strictEqual( ptr.isOper([ 'oper', 'mod']) , true,   "is oper" );
        assert.strictEqual( ptr.isOper([ 'val', -123])  , false,  "is not oper" );
        assert.strictEqual( ptr.isOper([ undefined, undefined ])  , false,  "is not oper" );
});
