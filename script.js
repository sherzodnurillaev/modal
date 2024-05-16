const menu = document.querySelector('aside')
const mondal = document.querySelector('dialog')
const mClose = document.querySelector('.menu_close')
const cBut = document.querySelectorAll('button')
const mids = document.querySelectorAll('.mid')

mids.forEach(mid => {
    mid.onclick = () => {
        mid.style.height = '100%'
    }
    mid.ondblclick = () => {
        mid.style.height = '60px'
    }
})

cBut.forEach(but =>{
    but.onclick =()=> {
        if (but.className === 'menu') {
            menu.style.right = '0'
        } else if (but.className === 'mondal') {
            mondal.showModal()
        } else if (but.className === 'close') {
            mondal.close()
        } else if (but.className === 'x') {
            menu.style.right = '-100%'
        }
    }
})
