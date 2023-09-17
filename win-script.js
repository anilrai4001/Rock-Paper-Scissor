let rules = document.getElementById('rules');
let cross = document.getElementById('cross');

rules.addEventListener('click',()=>{
    instructions.style.scale=1;
})

cross.addEventListener('click',()=>{
    instructions.style.scale=0;
})