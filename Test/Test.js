
let l = [5, 3, 8 ,1, 18 , 158, -5, "banana"];
let pp = l[0];

for(let i = 0; i < l.length; i++) {
  for(let j = i + 1 ; j < l.length; j++) {
    
    if(l[j] < l[i]) {
      pp = l[j];
      l[j] = l[i];
      l[i] = pp;
    }
  }

}

console.log(l);