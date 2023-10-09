let vegs = document.getElementById('veg');
let nonvegs = document.getElementById('nonveg');
let foods = document.getElementById('food');

vegs.addEventListener('click',()=>{
    foods.style.backgroundImage="url('veg.food.jpg')"
})

nonvegs.addEventListener('click',()=>{
    foods.style.backgroundImage="url('nonveg.food.jpg')"
})