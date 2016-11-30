/**
 * Created by conor on 11/30/16.
 */

var fullname = 'Jon Smith';

var obj = {
  fullname: 'Bill Johnson',
    prop: {
      fullname: 'Katie Carter',
      getFullName: function () {
          return this.fullname;
      }
    }

};

console.log(obj.prop.getFullName());

var test = obj.prop.getFullName();

console.log(test);

