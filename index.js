var pointer=document.getElementsByClassName('list-group-item');
console.log(pointer);
console.log(pointer[2]);
pointer[2].textContent='hello3';
pointer[0].style.fontWeight='bold';
pointer[1].style.fontWeight='bold';
pointer[2].style.fontWeight='bold';
pointer[2].style.background='yellow';
pointer[3].style.fontWeight='bold';

//for(var i=0;i<pointer.length;i++){
//    pointer[i].style.background='green';
