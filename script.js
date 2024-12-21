const Arr = [1,2,3,4];
//  const Double = Arr.map((ele)=>ele*2);
//  console.log(Double);

 const triple = Arr.forEach((val,i,a)=>(a[i]=val*3));
 console.log(triple,Arr);