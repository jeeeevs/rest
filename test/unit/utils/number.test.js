import assert from 'assert';

import {getModule} from '../../helper'

const  {getNumberOrString} = getModule('src/utils/number'); 

describe('util/number', ()=> {
    describe('#getNumberOrString()', ()=> {
      it('should return number if number is given', () =>{
        assert.strictEqual(getNumberOrString(5),5)
      });
      it('should return number if number as a string is given', () =>{
        assert.strictEqual(getNumberOrString('5'),5)
        assert.strictEqual(getNumberOrString('544'),544)
      });
      it('should return string if string is given', () =>{
        assert.strictEqual(getNumberOrString('a'),'a')
      });
    });
  });
  