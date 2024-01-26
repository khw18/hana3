//1
for(let i = 0.1; i <= 1; i+=0.1) console.log(+i.toFixed(1));

//2
function getLength(x) {
    return (x ?? 0).toString().length;
}

function addPoints(a, b) {
    const len = Math.max(getLength(a), getLength(b));
    const ret = +(a+b).toFixed(len-2);
    console.log("🚀 ~ addPoints ~ ret:", ret)
}

console.log(addPoints(0.21354, 0.1));  
console.log(addPoints(0.14, 0.28));    
console.log(addPoints(0.34, 0.226));   
console.log(addPoints(null, 0.226));   

//3
const user = {id: 1, name: 'Hong', passwd: 'xxx', addr: 'Seoul'}
const {passwd, ...userinfo} = user;
console.log("🚀 ~ userinfo:", userinfo)

//4
const arr = [[{id: 1}], [{id:2}, {id: 3}]]

const [ [{id:id1}], [ {id:id2}, {id:id3} ] ] = arr;
console.log(id1, id2, id3);

