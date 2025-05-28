let multipy = function(x,y){
    console.log(x*y);
}


// bind mathod 

let multipyByTwo = multipy.bind(this,2);


multipyByTwo(5);   // 10

let multipyBySix =  multipy.bind(this, 6);

multipyBySix(12) // 72 

// means simpl  6 is fixed as a second variable

multipyBySix(4,5);  // 24

// not working 
let multipyByFive = multipy.bind(this , 5, 6) // 30 always 

multipyByFive(4);



// using closer function

let  muti = function(x){
     return function (y){
        console.log(x*y)
     }
}

let mutiBy8 = muti(8);

mutiBy8(10) ; // 80
