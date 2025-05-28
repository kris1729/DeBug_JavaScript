


let sum = (a) => {
    return  (b) =>  {
      return  (b !== undefined)?sum(a + b):a;
       
    }
}


// or

let  summ = (a)=> (b) => (b!==undefined)?summ(a+b):a;


let a = sum(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)(0)(0)(); 
let  b = summ(1)(2)(3)(4)();


console.log(a);
console.log(b);

// ========
{
  s = 10;  // treat like a var ,  global scoping
}

console.log(s);

// =====

isLoggeIn = true;
loged = false;
console.log(20 + isLoggeIn); // 21
console.log(10*loged);  // 0


// ====
console.log('11'+'2') // '112' string
console.log('11'+2) // '112'  string
console.log('11'*2) // 22 number 
console.log(2+2+'2') // "42" string
console.log('2'-'1') // 1 number 
console.log('2'+'2'-3 ) // 19 number
console.log('2'+'2'-3+'2') // "192" string
console.log('2'*'3') // 6 number
console.log('2'+'3'*5) // "215" string * -> +
console.log('4'/'2') // 2 number
console.log(2*8/4+2)  //  / * + -
console.log('22'/11 + '5'*2 + '2');  // 10 + 2 + '2'  -- '122' string

console.log('a'/2) // NaN  not a number (same with * , -)
console.log('a'+2) // a2
console.log('a'*'2') // NaN