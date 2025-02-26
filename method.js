// test()
// const test_regex = /abc/;
// console.log(test_regex.test("abcdsa")); // true

// exec()
// const exec_regex = /abc/;
// console.log(exec_regex.exec("abcdef")); // ['abc']

// String.prototype.match()
// const matchstr = "abcdef";
// console.log(matchstr.match(/abc/)); // ['abc']

// String.prototype.replace()
// const replacestr = "abcdef";
// console.log(replacestr.replace(/abc/, "xyz")); // 'xyzdef'

// String.prototype.split()
const str = "a,b,c";
console.log(str.split(/,/)); // ['a', 'b', 'c']
