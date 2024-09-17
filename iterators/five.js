const coding = ["js","cpp","java","python"]

// callback
// coding.forEach( function (item) {
//   console.log(val);
// })

coding.forEach((item) => {
  console.log(item);
}) //callback  function

function printMe(item){
  console.log(item);
}
coding.forEach(printMe)