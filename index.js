/*let myname ="brian";

myname = "mwangi";

myname=5;

console.log(myname);*/

//console.log(mynum);
/*let mynum=6;
if (mynum===5)
{
console.log('True');
}
else{
    console.log('False');
}*/


/*let a,b ;

a=4;
b=6;

let times= a*b; 
let divide= a/b;
let add= a+b;
let subtract= a-b;

console.log("\nadd:",add,"\nsubtract:",subtract,"\ndivide:",divide,"\ntimes:",times);*/

/*function sum(a,b){
    let sum=a+b;
    console.log(sum);
}

sum(6,4)*/


// function mylicense(name,age){

//    if(age<18 && age>72)
//    {
//     console.log(name ,"Not applicable for a license");
//    } 
//    else{
//     console.log(name ,"Elligible for a lisense");
//    }

// }

// mylicense("Brian",19);



function generateNumberPattern(num){
for(let i=1;i<=num;i++){
    let row = '';
    for(let j = 1; j<=i; j++){
        row+=i
    }
    console.log(row);
 }
}
generateNumberPattern(5);

