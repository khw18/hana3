// 피보나치 수열을 memoization하여 출력하는 함수를 작성해 보세요.
// 수열의 규칙은 f(n) = f(n - 2) + f(n - 1)  (단, n <= 1 일 때 f(n) = n)
// 즉, 0 ~ 9까지의 값은 각각 [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] 이다.
// fibonacci(5); // 5
// fibonacci(7); // 13

function f(n) {
    const seq = [];
    if(n <= 1) return n;
    return f(n - 2) + f(n - 1);
}

function memoized(fn) {
    const cache = {};
    return function (k) {
        if (cache[k]) {
            return cache[k];
        }
        cache[k] = fn(k);
        return cache[k];
    };
}



