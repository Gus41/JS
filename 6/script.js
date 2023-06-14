let nums = [10,20,30,40,50];
const objs = document.getElementsByTagName("div");
for ( let i = 0 ; i < nums.length ; i ++ ){
  console.log(nums[i]);
}

console.log("----------------------");
for ( n in objs ){
  console.log(n);
}
console.log("For of");
for ( n of objs ){
    console.log(n);
    n.innerHTML = "oshi";
}