const person = {
    name: 'sam',
    age :21,
    greet(){
        console.log('hi,i am ' + this.name);
    }
};
const printname  = ({ name }) => {
    console.log(name);
}
printname(person);
const { name,age} = person;
console.log(name,age); 

//const copiedperson = {...person};
//console.log(copiedperson);
const hobbies = ['sports','cooking'];
const [hobby1,hobby2]=hobbies;
console.log(hobby1,hobby2);
/*for (let hobby of hobbies)
//{
  //  console.log(hobby);
//}
//console.log(hobbies.map(hobby => 'hobby '+ hobby));
//console.log(hobbies);
hobbies.push('programming');
console.log(hobbies);
const copiedarray =[...hobbies];
console.log(copiedarray);
 const toarray = (...args)=>{
     return args;
 };
console.log(toarray(1,2,3,2,3,));
*/
