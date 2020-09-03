//const myheading =document.querySelector('h1');
//myheading.textContent='hello world';
//document.querySelector('html').onclick=function(){
  //  alert('stop poking');
//}
let myimage=document.querySelector('img');

myimage.onclick =function(){ 
    let mysrc=myimage.getAttribute('src');

    if(mysrc === 'C:\Users\JOSEPH RAJU\Pictures\Saved Pictures/untitled.png'){
        myimage.setAttribute('src','C:\Users\JOSEPH RAJU\Pictures\Saved Pictures/th4DLBOH1M.jpg');
    }else{
        myimage.setAttribute('src','C:\Users\JOSEPH RAJU\Pictures\Saved Pictures/untitled.png');
    }
}