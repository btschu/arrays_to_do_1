// Create a standalone function that accepts two arrays and combines their values sequentially into a new array. Extra values from either array should be included afterward. Given [4,15,100] and [10,20,30,40], return new array containing [4,10,15,20,30,40,100].

function zipIt(arr1,arr2){
    var newarr = [];
    for (var i = 0; i < arr1.length && i < arr2.length; i++){
        newarr.push(arr1[i]);
        newarr.push(arr2[i]);
    }

    for (var j = i; j < arr1.length; j++){
        newarr.push(arr1[j]);
    }
    for (var k = i; k < arr2.length; k++){
        newarr.push(arr2[k]);
    }
    console.log(newarr);
    return newarr;
}

// zipIt([10,20,30,40],[1,2])
zipIt([1,2],[10,20,30,40])
