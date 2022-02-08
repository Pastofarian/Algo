/* 
let l = [5, 3, 8 ,1];
let pp = 0;

for(let i = 0; i < l.length; i++) {
  for(let j = 1; j < l.length; j++) {
    
    if(l[j] < l[j-1]) {
      pp = l[j-1];
      l[j-1] = l[j];
      l[j] = pp;
      console.log(l);
    }
  } 

} */

let l = [5, 3, 8 ,1];
let temp;
for(let i = 0; i < l.length; i++) {
  for(let j = i + 1; j < l.length; j++) {
    if(l[j] < l[i]) {
      temp = l[i];
      l[i] = l[j];
      l[j] = temp;
      console.log(l);
    }
  }
}