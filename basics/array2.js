const marvel_heros = ["Ironman", "spiderman", "thor"]
const dc_heros = ["superman", "flash"]
marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(dc_heros[1]);
const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros);

const all_new_heros = [...marvel_heros, ...all_heros]
console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,[8,9,10,11,12,13,]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh"))
console.log(Array.from({name: "hitesh"})); //interesting gives empty array object
let score1= 100;
let score2= 200;
let score3= 300;
console.log(Array.of(score1, score2, score3));
