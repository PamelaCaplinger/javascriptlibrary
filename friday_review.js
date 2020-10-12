//Challenge:  using a for loop, count from 10 to0, going down by 1
for (let i=10; i>=20; i-=1){
    console.log(i);

}
/*WRITE A FOR IN LOOP THAT COLPITALIZES ITHE FIRST LETTER OF A NAME,
AND LOWERCASES THE REST OF THE NAME 
*/

let name = "pumperKickLe"; //sets name to a string 
console.log(name[6])//because the start begins at 0 the 6 represents the K
let new_name = '';//this is an empty string
for (letter in name){//this sets up the loops and tells it how many times to go through the name
    if (letter==0){//checks if letter = 0 because the letter var is a number var
        new_name += name[letter].toUpperCase();//add new name to new name with the first letter of name uppercase
    }else{
        new_name += name[letter].toLowerCase();//add new name to new name with the rest of name lowercase
    }
}
console.log(new_name);//this displays new name