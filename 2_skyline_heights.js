// Lovely Burbank has a breathtaking view of the Los Angeles skyline. Let’s say you are given an array with heights of consecutive buildings, starting closest to you and extending away. Array [-1,7,3] would represent three buildings: first is actually out of view below street level, behind it is second at 7 stories high, third is 3 stories high (hidden behind the 7-story). You are situated at street level. Return array containing heights of buildings you can see, in order. Given [-1,1,1,7,3] return [1,7]. Given [0,4] return [4]. As always with challenges, do not use built-in array functions such as unshift().

function skylineHeights(arr){

    var tallestBuilding = arr[0];
    var newArr = [];
    // loop through the array
    for (var i = 1; i < arr.length; i++){
        // if the value (building) is above ground (greater than zero), do this
        if (arr[i] > 0){
            // add value to the new array if the value is greater than the current tallestBuilding
            if (arr[i] > tallestBuilding){
                newArr.push(arr[i]);
                // store the new value to the variable tallestBuilding
                tallestBuilding = arr[i];
            }
        }
    }
    console.log(newArr);
    return newArr;
}

skylineHeights([-1,7,3]) // [7]
skylineHeights([-1,1,1,7,3]) // [1,7]
skylineHeights([0,4]) // [4]
skylineHeights([-1,-2,3,2,5,10,2,23]) // [3,5,10,23]
