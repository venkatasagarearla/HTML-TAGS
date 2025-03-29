
 const prompt = require("prompt-sync")({sigint:true});
//with out parameters and without return type
function square(){
    const side = parseInt(prompt('enter the side of square'));
    const area=side * side;
    console.log('the arae of the square is'+' '+area);
}
square();
const radius=parseInt(prompt('enter radus of the circle'))
function circle(radius){
    const area2=3.142*radius* radius;
      console.log('the area of the circle is'+area2);
}
circle(radius);
    
function rectangle(){
    const length=prompt('enter length of the rectangle');
    const breadth=prompt('enter breadth of the rectangle')
     return length * breadth;
    

}
const area2=rectangle();
console.log('the area  of the rectangle is'+area2);

const base=prompt('enter base of the traigle');
const height=prompt('enter the height of the traingle');
 function traingle(base,height ){
    return (0.5)* base* height;


 }
 const area3=traingle(base,height);
 console.log('the area of thr traingle is'+ area3);



