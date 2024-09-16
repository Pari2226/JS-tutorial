// IIFE
(function chai(){
  // named iife
  console.log(`DB CONNECTED`);
  
})();
// global scope's pollution problem so we use iife

( (name) =>  {
  console.log(`DB CONNECTED TWO ${name}`);
  
})('hello')