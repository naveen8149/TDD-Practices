const chai = require('chai');
const assert = chai.assert;
const functions= require('../functions');

describe('sum', function(){
    it('should return 5 when adding 2.5 and 2.5', function(){
        assert.equal(functions.sum(2.5, 2.5), 5);
    });

        it('should return 7 when adding 3 and 4', function(){
            assert.equal(functions.sum(3, 4), 7);
        });

        it('should return 4 when adding 7 and -3', function(){
            assert.equal(functions.sum(7, -3), 4);
        });
});

describe('tail', function(){
    it ('it should return null when the array is empty', function(){
        let arr =[];
        assert.isNull(functions.tail(arr));
    });

    it ('it should return 9 when the array is [7,5,9]', function(){
        let arr =[7,5,9];
        assert.equal(functions.tail(arr),9);
    });

    it ('it should return Hi when the array is [Hello,Hi]', function(){
        let arr =['Hello','Hi'];
        assert.equal(functions.tail(arr),'Hi');
    });
});

describe('merge', function(){
    it('it should return null when both the arrays are empty', function(){
        let arr1 = [];
        let arr2 = [];
        assert.isNull(functions.merge(arr1,arr2));

    });

    it('it should return [6,5,7,4] when arrays are [6,7] and [5,4] ', function(){
        let arr1 = [6,7];
        let arr2 = [5,4];
        assert.deepEqual(functions.merge(arr1,arr2), [6,5,7,4]);

    });

    it('it should return [4,3,7,6] when merging [4.0,7.0] and [3.0,6.0]', function(){
        let arr1 = [4.0,7.0];
        let arr2 = [3.0,6.0];
        assert.deepEqual(functions.merge(arr1,arr2), [4,3,7,6]);

    });


});