
const btn1 = document.querySelector('.email form .button')
const arr = ['azmi']



function validation(){
    let inpt = document.querySelector('.email form input[type="text"]').value
    let text = document.querySelector('.text p:nth-child(2)')
    let form = document.querySelector('.email form input[type="text"]')
    let overlay = document.querySelector('.overlay')

    // inpt.style.backgroundColor='salmon'

    if(inpt === ''){
        text.style.display='block'
        form.classList.add('unvalid')
        form.style.transition='.3s'
        
    }
    if(inpt){
        // window.open("winchat-main/index.html")
        overlay.style.display='block'
    }

}








