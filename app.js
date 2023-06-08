let colors = ['red', "blue", "rgba(133,122,200)", "#f15025"]
const button = document.getElementById('bt')
const colour = document.querySelector(".colour")
let counter = 0;
bt.addEventListener("click", function(){
if(counter<colors.length){
    document.body.style.backgroundColor=colors[counter]
    colour.style.backgroundColor= colors[counter]
    colour.textContent=colors[counter]
}
});
