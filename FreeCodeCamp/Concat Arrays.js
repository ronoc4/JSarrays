/**
 * Created by conor on 8/10/16.
 */

function diffArray(arr1, arr2) {
    newArr = arr1.concat(arr2);
    // Same, same; but different.

    function check (item) {
        if(arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1) {
            return item;
        }
    }

    return newArr.filter(check);
}

console.log(diffArray([1, 2, 3, 5, 4,6 , 7 , 7 ,8,  122], [1, 2, 3, 4, 5, 23, 3, 45]));


