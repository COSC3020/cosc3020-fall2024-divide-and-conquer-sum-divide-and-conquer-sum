function divideAndConquerSum(a) {
    // Handle the trivial cases
    if (a.length == 0) return 0;
    else if (a.length == 1) return a[0];

    // Divide the array into three sub-arrays
    var mid1 = Math.floor((1 / 3) * a.length);
    var mid2 = Math.floor((2 / 3) * a.length);
    
    // Sum up the sub-arrays recursively
    var sum1 = divideAndConquerSum(a.slice(0, mid1));
    var sum2 = divideAndConquerSum(a.slice(mid1, mid2));
    var sum3 = divideAndConquerSum(a.slice(mid2, a.length));

    // Sum up the other sums
    return sum1 + sum2 + sum3;
}
