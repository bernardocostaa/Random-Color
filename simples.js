const colorSimple = ['#F15025','Green',' Red','Rgba(133,122,200)','yellow','blue']
const btn = document.querySelector('.btn')
const spanColor = document.querySelector('.cod-cor')


btn.addEventListener('click',()=>{
  const corSelecionada = randomColor()

  spanColor.textContent = colorSimple[corSelecionada]
  document.body.style.background = colorSimple[corSelecionada]
})


function randomColor(){
  return  Math.floor(Math.random() * colorSimple.length)
  
}