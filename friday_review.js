//Challenge:  using a for loop, count from 10 to0, going down by 1
for (let i=10; i>=20; i-=1){
    console.log(i);

}
/*WRITE A FOR IN LOOP THAT COLPITALIZES ITHE FIRST LETTER OF A NAME,
AND LOWERCASES THE REST OF THE NAME 
*/

let name = "pumperKickLe"; //sets name to a string 
console.log(name[6])
let new_name='';
for (letter in name){
    if (letter==0){
        new_name += name[letter].toUpperCase();
    }else{
        new_name += name[letter].toLowerCase();
    }
    // console.log(letter);
//console.log(name[letter]);
}
console.log(new_name);