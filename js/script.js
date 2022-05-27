const offcanvas = document.querySelector('.js-offcanvas')
const btnCanvas = document.querySelector('.btn-canvaOff')
const colorCanva = document.querySelector('.heade-js')
const exitCanva = document.querySelector('.exit')


btnCanvas.addEventListener( 'click', ()=> {
    offcanvas.classList.add('canvas-active')
    
})
exitCanva.addEventListener('click', () => { 
    offcanvas.classList.remove('canvas-active')
})

window.addEventListener('scroll',  ()=> {
    if (window.scrollY > 0) {
        colorCanva.classList.add('canvas-color')
   
    }
    if (window.scrollY == 0) {
        colorCanva.classList.remove('canvas-color')
    }
  

})
