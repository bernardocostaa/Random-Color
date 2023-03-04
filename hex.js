const hexDecimal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector('.btn')
const spanColor = document.querySelector('.cod-cor')


btn.addEventListener('click',()=>{
  let hex = '#'
 for(let i =0; i < 6; i++){
  hex += hexDecimal[randomHex()]
 }
 spanColor.textContent = hex
 document.body.style.background = hex
})

function randomHex(){
  return Math.floor(Math.random() * hexDecimal.length)
}