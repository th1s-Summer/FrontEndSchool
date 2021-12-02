// 글이 100개
// 25개는 일상
// 50개는 개발관련 글
// 25개는 취미
let blogs = [{
    id : 1,
    title : 'title1',
    content : 'content1',
    section : '일상'
}, {
    id : 2,
    title : 'title2',
    content : 'content2',
    section : '취미'
}, {
    id : 3,
    title : 'title3',
    content : 'content3',
    section : '개발'
}, {
    id : 4,
    title : 'title4',
    content : 'content4',
    section : '개발'
}];

let s = '개발';
let data = s? blogs.filter(b => b.section === s) : blogs;
//data 입력시 '개발'을 filter시켰기에 해당 키워드 관련된 것만 나오고, let s = ''; 를 비워두면 전체검색이 된다.
