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

const copiedperson = {...person};
console.log(copiedperson);
