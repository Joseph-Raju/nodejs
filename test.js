const fetchdata= callback =>{
    setTimeout(() => {
        callback('done');
    }, 1500);
};
setTimeout(() => {
   console.log('timer is done'); 
   fetchdata((text) => {
       console.log(text);
   });
}, 2000);
console.log('hello');