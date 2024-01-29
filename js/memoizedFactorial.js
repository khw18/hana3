let runCnt = 0;
// function factorial(n){
//     runCnt += 1;
//     if(n==1) return 1;
//     return n * factorial(n-1);
// }
// const f3 = factorial(3);
// console.log("🚀 ~ f3:", f3, runCnt)
// runCnt = 0;

const memoizedTable = {};

function factorial(n){
    runCnt++;
    if(n==1) return 1;
    return memoizedTable[n] || (memoizedTable[n] = n * factorial(n-1));
}

function memoized(fn){
    const memoizedTable = {};
    return function(k){
        return memoizedTable[k] || (memoizedTable[k] = fn(k));
    };
}

function memoizedFactorial(n) {

}


const mf3 = factorial(3);
console.log("🚀 ~ f3:", mf3, runCnt)
runCnt = 0;
console.log("🚀 ~ f3:", mf3, runCnt)
runCnt = 0;
console.log("🚀 ~ f3:", factorial(5), runCnt)
runCnt = 0;
