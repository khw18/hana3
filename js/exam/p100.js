// for-in문을 사용하여 배열의 인덱스를 출력하시오.
// for-in문을 사용하여 배열의 원소(값)를 출력하시오. (of)

const arr = [100, 200, 300, 400, 500, 600, 700];

for (let i in arr) {
    console.log(i);
}
for (let i in arr) {
    console.log(arr[i]);
}
console.log();
// 3. for-in문을 사용하여 프로퍼티 이름(키)을 출력하시오.
// 4. for-in문을 사용하여 프로퍼티 값을 출력하시오.
// 5. for-of문을 사용하여 프로퍼티 값을 출력하시오.
// 6. level 프로퍼티가 열거(entries)되지 않도록 설정하시오.
// // Object.defineProperty
// 7. role 프로퍼티는 읽기전용으로 설정하시오. // Object.freeze
const obj = { name: 'lim', addr: 'Yongsan', level: 1, role: 9, receive: false }
for (let i in obj) {
    console.log(i);
}