/**
 * Created by conor on 11/30/16.
 *
 * https://www.sitepoint.com/5-typical-javascript-interview-exercises/
 */

'use strict';

String.prototype.repeatify = String.prototype.repeatify || function (times) {
  let str = '';

  for(let i = 0; i < times; i++) {
      str+= this;
  }
        //console.log(this);
  return str;

};

console.log('hello'.repeatify(3));