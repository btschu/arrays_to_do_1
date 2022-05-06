// In JavaScript, the Array object has numerous useful methods. It does not, however, contain a method that will randomize the order of an array’s elements. Let’s create shuffle(arr), to efficiently shuffle a given array’s values. Work in-place, naturally. Do you need to return anything from your function?

function shuffle(arr) {
    var x
    var temp
    for( var i = 0; i < arr.length; i++) {
        x = Math.trunc(Math.random()*arr.length);
        temp = arr[i]
        arr[i] = arr[x]
        arr[x] = temp
    }
    console.log(arr);
    return arr
}

shuffle([3,5,3,2,1,5,6])