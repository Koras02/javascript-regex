const regex = /abc/i; // 대소문자 구분 없음
console.log(regex.test("AbCde")); // true

const globalRegex = /abc/g;
const str = "abc abc abc";
console.log(str.match(globalRegex)); // ['abc', 'abc', 'abc']
