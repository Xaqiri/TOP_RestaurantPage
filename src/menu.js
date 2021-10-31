const menu = () => { 
    let intro = document.createElement('div')
    let container = document.getElementById('content')
    let content = document.createElement('div')
    intro.innerHTML = 'Welcome to the menu page'
    content.innerHTML = 'Here we\'ll have a list of all of our menu items'
    container.appendChild(intro)    
    container.appendChild(content)
}

export { menu }