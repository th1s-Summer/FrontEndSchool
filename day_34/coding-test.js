// 목차(실전 코딩테스트 풀이)
// 1. 18년도
// https://programmers.co.kr/learn/courses/30/lessons/17681?language=javascript
// 주제 : 2진법, 진법 연산, replace, or 연산
[9, 20, 28, 18, 11]
[30, 1, 21, 17, 28]
let x = 9;
x.toString()
x.toString(2)
x.toString(8)
x.toString(16)

let x = 9;
let y = 30;

x.toString(2);
y.toString(2);

'01001'
'11110'
'-----'
'11111'

'01001'
'11110'
'-----'
'11111'


let z = '11111';
z.replace(/1/g, '#').replace(/0/g, ' ')
'#####'

(9 | 30).toString(2).replace(/1/g, '#').replace(/0/g, ' ');
(9 & 30).toString(2).replace(/1/g, '#').replace(/0/g, ' ');
(5 | 3).toString(2).replace(/1/g, '#').replace(/0/g, ' ');
(31 | 14).toString(2).replace(/1/g, '#').replace(/0/g, ' ');

'00101'
'00011'
'-----'
'  ###'

// || - or
// && - and
// ! - not

/////////////////////

100000 - 1 == 11111;

(9 | 30)
.toString(2)
.replace(/1/g, '#')
.replace(/0/g, ' ');

////////////////////

let n = 5;
let arr1 = [9, 20, 28, 18, 11];
let arr2 = [30, 1, 21, 17, 28];

function solution(n, arr1, arr2) {
    let result = []
    for (let i = 0; i < n; i++) {
        result.push((arr1[i] | arr2[i]).toString(2).replace(/1/g, '#').replace(/0/g, ' '));
    }
    return result;
}

console.log(solution(n, arr1, arr2));


////////////////////

// 유틸리티 모듈

const zip = (a, b) => a.map((value, index)=>[value, b[index]]);

const fillZero = (n, arr) => { return '0'.repeat(n - arr.length) + arr }

////

let n = 5;
let arr1 = [9, 20, 28, 18, 11];
let arr2 = [30, 1, 21, 17, 28];

function solution(n, arr1, arr2) {
    let result = []
    // const zip = (a, b) => a.map((value, index)=>[value, b[index]]);
    const fillSpace = (n, arr) => { return ' '.repeat(n - arr.length) + arr }
    for (let i = 0; i < n; i++) {
        result.push(fillSpace(n, (arr1[i] | arr2[i]).toString(2).replace(/1/g, '#').replace(/0/g, ' ')));
    }
    return result;
}

console.log(solution(n, arr1, arr2));

////

let n = 5;
let arr1 = [9, 20, 28, 18, 11];
let arr2 = [30, 1, 21, 17, 28];

function solution(n, arr1, arr2) {
    let result = []
    const zip = (a, b) => a.map((value, index)=>[value, b[index]]);
    const fillSpace = (n, arr) => { return ' '.repeat(n - arr.length) + arr }
    for (let [i, j] of zip(arr1, arr2)) {
        result.push(fillSpace(n, (i | j).toString(2).replace(/1/g, '#').replace(/0/g, ' ')));
    }
    return result;
}

console.log(solution(n, arr1, arr2));


////





// 2. 19년도
// 3. 20년도
// 4. 21년도
