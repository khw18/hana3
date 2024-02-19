interface Naver {
    userid: number;
    username: string;
    email: string;
}
interface Kakao {
    userid: number;
    userName: string;
    kakaotalk: string;
    email: string;
}
//인덱스 시그니처 활용
interface SnsUser {
    [idx: string]: string | number;
    email: string;
}

// + Partial을 활용한 방법
// type SnsUser = (Partial<Naver> | Partial<Kakao>) & { email: string };


// 다음 코드에 오류가 없으면 통과!
const naverUser: SnsUser = {userid: 1, username: 'HH', email: 'abc@naver.com'};
const kakaoUser: SnsUser = {userid: 1, userName: 'HH', kakaotalk: 'HH', email: 'abc@hanmail.net'};
// console.log(naverUser);
// console.log(kakaoUser);