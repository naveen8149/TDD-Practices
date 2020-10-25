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

    describe('Product', function(){
        it('should return 10 when multiplying 2.5 and 4.0', function(){
            assert.equal(functions.product(2.5, 4.0), 10);
        });
    
        it('should return 6 when multiplying 2 and 3', function(){
                assert.equal(functions.product(2, 3), 6);
        });
    
        it('should return -5 when multiplying 5 and -1', function(){
                assert.equal(functions.product(5, -1), -5);
        });
    });
    

    describe('min', function(){
        it('should return 0.003 when the arguments are 0.01 and 0.003', function(){
            assert.equal(functions.min(0.01, 0.003), 0.003);
        });
    
            it('should return 2 when the arguments are 2 and 3', function(){
                assert.equal(functions.min(2, 3), 2);
            });
    
            it('should return -5 when the arguments are -4 and -5', function(){
                assert.equal(functions.min(-4, -5), -5);
            });
    });
  
    describe('max', function(){
        it('should return -4 when the arguments are -4 and -8', function(){
            assert.equal(functions.max(-4, -8), -4);
        });
    
            it('should return 9 when the arguments are 9 and 9', function(){
                assert.equal(functions.max(9, 9), 9);
            });
    
            it('should return 0.01 when the arguments are 0.01 and 0.006', function(){
                assert.equal(functions.max(0.01, 0.006), 0.01);
            });
        });

    describe('head', function(){
        
    
        it ('it should return 6 when the array is [6,7,8]', function(){
            let arr =[6,7,8];
            assert.equal(functions.head(arr),6);
        });
    
        it ('it should return hey when the array is [hey,Hi]', function(){
            let arr =['hey','Hi'];
            assert.equal(functions.head(arr),'hey');
        });

        it ('it should return null when the array is empty', function(){
            let arr =[];
            assert.isNull(functions.head(arr));
        });
    });

        describe('mid', function(){
        
    
            it ('it should return 4 when the array is [3,4,5]', function(){
                let arr = [3,4,5];
                assert.deepEqual(functions.mid(arr), 4 );
            });
        
            it ('it should return [2,3] when the array is [2,3,4,5]', function(){
                let arr =[2,3,4,5];
                assert.deepEqual(functions.mid(arr),[3,4]);
            });
            it ('it should return David when the array is [john,David,jack]', function(){
                 let arr = ['john','David','jack'];
                assert.deepEqual(functions.mid(arr),'David');
            });
    
            });
            
    describe('total', function(){
        
    
        it ('it should return 12 when the array is [3,4,5]', function(){
            let arr =[3,4,5];
            assert.equal(functions.total(arr),12);
        });
    
        it ('it should return 15 when the array is [1,2,3,4,5]', function(){
            let arr =[1,2,3,4,5];
            assert.equal(functions.total(arr),15);
        });

        it ('it should return NULL when the array is empty', function(){
            let arr =[];
            assert.isNull(functions.total(arr));
        });
    });
        
        describe('average', function(){
        
    
            it ('it should return 4 when the array is [3,4,5]', function(){
                let arr =[3,4,5];
                assert.equal(functions.average(arr),4);
            });
        
            it ('it should return 3 when the array is [6,2,1]', function(){
                let arr =[6,2,1];
                assert.deepEqual(functions.average(arr),3);
            });
    
            it ('it should return NULL when the array is empty', function(){
                let arr =[];
                assert.isNull(functions.average(arr));
            });
        });

            describe('smallest', function(){
        
    
                it ('it should return 6 when the array is [6,7,8]', function(){
                    let arr =[6,7,8];
                    assert.equal(functions.smallest(arr),6);
                });
            
                it ('it should return 1.25 when the array is [1.25,4.0,8.75]', function(){
                    let arr =[1.25,4.0,8.75];
                    assert.equal(functions.smallest(arr),1.25);
                });
        
                it ('it should return NULL when the array is empty', function(){
                    let arr =[];
                    assert.isNull(functions.smallest(arr));
                });

            });

            
            describe('largest', function(){
    
                    it ('it should return NULL when the array is empty', function(){
                        let arr =[];
                        assert.isNull(functions.largest(arr));
                    });

                    it ('it should return 9 when the array is [6,7,9]', function(){
                        let arr =[6,7,9];
                        assert.deepEqual(functions.largest(arr),9);
                    });
                
                    it ('it should return 10.0 when the array is [5.0,8.0,10.0]', function(){
                        let arr =[5.0,8.0,10.0];
                        assert.deepEqual(functions.largest(arr),10.0);
                    });
            
            });
            
        