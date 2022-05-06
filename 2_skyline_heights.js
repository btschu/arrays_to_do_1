// Lovely Burbank has a breathtaking view of the Los Angeles skyline. Let’s say you are given an array with heights of consecutive buildings, starting closest to you and extending away. Array [-1,7,3] would represent three buildings: first is actually out of view below street level, behind it is second at 7 stories high, third is 3 stories high (hidden behind the 7-story). You are situated at street level. Return array containing heights of buildings you can see, in order. Given [-1,1,1,7,3] return [1,7]. Given [0,4] return [4]. As always with challenges, do not use built-in array functions such as unshift().

function skylineHeights(arr){
    var max = arr[0];
    var newarr = [];

    for (var i = 1; i < arr.length; i++){
        if (arr[i] > 0){
            if (arr[i] > max){
                newarr.push(arr[i]);
                max = arr[i];
            }
        }
    }
    console.log(newarr);
    return newarr;
}


skylineHeights([-1,7,3]) // [7]
skylineHeights([-1,1,1,7,3]) // [1,7]
skylineHeights([0,4]) // [4]
