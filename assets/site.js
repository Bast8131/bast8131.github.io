
const modal=document.querySelector('.modal');
document.querySelectorAll('.gallery img').forEach(i=>i.addEventListener('click',()=>{
 document.querySelector('#modalImg').src=i.src;
 modal.classList.add('open');
}));
document.querySelector('#close').onclick=()=>modal.classList.remove('open');
modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('open')});
