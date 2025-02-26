// 이메일 주소 검증
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailRegex.test("example@example.com")); // true
console.log(emailRegex.test("exampleexample.com")); // false

// 전화번호 검증 (형식 123-4560-7890)
const phoneRegex = /^\d{3}-\d{4}-\d{4}$/;
console.log(phoneRegex.test("123-4567-8910")); // true
console.log(phoneRegex.test("1232-4567-8910")); // false

// URL 검증
const urlRegex = /^(https?:\/\/)?([a-z0-9.-]+)(:[0-9]+)?(\/[^\s]*)?$/i;
console.log(urlRegex.test("https://example.com")); // true
