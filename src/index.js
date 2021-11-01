import './styles.css'
import {Button} from './button.js'
import {home} from './home.js'
import {menu} from './menu.js'
import {contact} from './contact.js'

let c = document.getElementById("content")
let nav = document.getElementById("nav_bar")
let c_page = document.createElement('div')

let home_button = new Button('Home')
let menu_button = new Button('Menu')
let contact_button = new Button('Contact')

nav.appendChild(home_button.element)
nav.appendChild(menu_button.element)
nav.appendChild(contact_button.element)



home_button.element.addEventListener('click', () => { 
    c.innerHTML = ""
    home_button.element.classList.add('clicked')
    menu_button.element.classList.remove('clicked')
    contact_button.element.classList.remove('clicked')
    home()
})
menu_button.element.addEventListener('click', () => { 
    c.innerHTML = ""
    home_button.element.classList.remove('clicked')
    menu_button.element.classList.add('clicked')
    contact_button.element.classList.remove('clicked')
    menu()
})
contact_button.element.addEventListener('click', () => { 
    c.innerHTML = ""
    home_button.element.classList.remove('clicked')
    menu_button.element.classList.remove('clicked')
    contact_button.element.classList.add('clicked')
    contact()
})

home_button.element.classList.add('clicked')
home()