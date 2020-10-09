let i = 7;

//i=i + 1
for (i=0;  i <10; i++){
    console.log(i);

}

for (i=2; i<20; i+= 2){
    console.log(i);

}
console.log('global variable:', i);


//Challenge:  using a for loop, count from 10 to0, going down by 1

for ( i = 10; i >=0; i--) {
    console.log(i)
}
// challange: using a for loop, count from 0, going down by 2's to -24
for(i =0; i >= -25; i-= 2) {
    console.log(i)
}
//Challenge: using a for loop, go through a name and display each letter individually
let name = "Pamela Caplinger"

for (let i=0; i< name.length; i++){
console.log(name[i]);
}
// a better for of loop for an array or string(extreamly ppowerful) less math use all the time
/*(1)
for (<your_name_choise of <some collection>){
    <do something>
}
1. for loop dec.
2. of-is a build in word saying for all things in a collection common name is "for of " loop


for (1 of name){
    console.log(1)
}
/*

-make a for loop for where you add up all the number from 1 to fifty (should equal 1275)
*/
let sum =0;
/*for(var i=1; i <=50; i++){
     sums += i;
}*/

console.log(sum);

let student= {
    name: "justin",
    awesome: false,
    degree: "javescript",
    week: 1

} 
for (item in student) {
    //console.log(item);
    console.log(student[item]);

}

let cats= ['tabby', 'british shorthair','burmese']
for (cat in cats) {
    console.log(cat);
    console.log(cats[cat]);
}

/*
CHALLANGE
**********
-WRITE A FOR IN LOOP THAT COLPITALIZES ITHE FIRST LETTER OF A NAME,
AND LOWERCASES THE REST OF THE NAME 
*/
let name = 'jUstiN AhmAnN'

for(var i = 0; i < name.length; i++){

}













