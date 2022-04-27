let string = new Set('abcadifefkdfajlweifddsaasdf');
console.log(string); //Set(12) {"a", "b", "c", "d", ...}
console.log(string.size); //12
//중복되지 않는 값의 개수만.

array = 'abcadifefkdfajlweifddsaasdf'.split('');
let string2 = new Set(array) //어레이로도 만들 수 있다.
console.log(string2); 
console.log(string2.has('f'));
string2.delete('f');
console.log(string2.size)

//delete, has, size와 같은 메소드 사용가능.
