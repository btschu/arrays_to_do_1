// Create a standalone function that accepts two arrays and combines their values sequentially into a new array. Extra values from either array should be included afterward. Given [4,15,100] and [10,20,30,40], return new array containing [4,10,15,20,30,40,100].

function zip(arr1,arr2){
    // create a variable to store the new array
    var newArr = [];
    // loop through the two arrays and push them to the new array: alternate like a zipper
    for (var i = 0; i < arr1.length && i < arr2.length; i++){
        newArr.push(arr1[i]);
        newArr.push(arr2[i]);
    }
    // if array 1 has more values than array 2, push the extra values to the end of the new array
    for (var j = i; j < arr1.length; j++){
        newArr.push(arr1[j]);
    }
    // if array 2 has more values than array 1, push the extra values to the end of the new array
    for (var k = i; k < arr2.length; k++){
        newArr.push(arr2[k]);
    }
    console.log(newArr);
    return newArr;
}

zip([10,20,30,40],[1,2])
zip([1,2],[10,20,30,40])


//! another method done by Shelby

function zipper(){
    var arr1 = [1,3,5,7,9,11];
    var arr2 = [2,4,6,8,10,12,14,16,18];
    var zip = [];
    if(arr1.length == arr2.length){
        for(var i=0; i<arr1.length; i++){
            zip.push(arr1[i]);
            zip.push(arr2[i]);
            }
        }
    if(arr1.length > arr2.length){
        for(var n=0; n<arr1.length; n++){
            if (n>arr2.length-1){
                zip.push(arr1[n]);
            }
            else{
                zip.push(arr1[n]);
                zip.push(arr2[n]);
            }
        }
    }
    if (arr1.length < arr2.length){
        for(var x=0; x<arr2.length; x++){
            if (x>arr1.length-1){
                zip.push(arr2[x]);
            }
            else{
                zip.push(arr1[x]);
                zip.push(arr2[x]);
            }
        }
    }
    console.log('___________________________');
    console.log('Zipper:');
    console.log(zip);
}
zipper();