import './styles.css'

const menu = () => { 
    let content = document.getElementById('content')
    let main = document.createElement('div')
    let main_menu = document.createElement('div')
    let burger = document.createElement('div')

    main.classList.add('main')
    main_menu.classList.add('item')
    burger.classList.add('item') 

    main_menu.innerHTML = 'Here you can find all items on our menu.  New items being added all the time!'
    burger.innerHTML = 'Our special burger! It has stuff on it! Mmmm.'
    
    content.appendChild(main) 
    main.appendChild(main_menu)
    main.appendChild(burger)
}

export { menu }