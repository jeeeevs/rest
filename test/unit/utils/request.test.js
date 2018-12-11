import assert from 'assert';

import {getModule} from '../../helper'

const  {getFullUrl} = getModule('src/utils/request'); 

describe('util/request', ()=> {
    describe('#getFullUrl()', ()=> {
      it('should return the same url when only haseUrl is given', () =>{
            const base = 'https://hackernoon.com';
            assert.strictEqual(getFullUrl({baseUrl: base}),base)
      });
      it('should return the url/version when version is given given', () =>{
        const base = 'https://hackernoon.com';
        assert.strictEqual(getFullUrl({baseUrl: base,version: 'v2'}),`${base}/v2`)
  });
    });
  });
  