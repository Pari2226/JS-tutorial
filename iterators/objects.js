const myObject = {
  js: 'javascript',
  cpp: 'C++',
  rb: "ruby",
  swift: "swift by apple"
}
// for in Object printing
for(const key in myObject){
  console.log(`${key} shortcut is for ${myObject[key]}`);
  
}

// for in loop
const programming = ["js","cpp","c","c#"]
for(const key in programming){
  console.log(programming[key]);
}