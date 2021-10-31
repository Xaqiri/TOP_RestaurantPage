const contact = () => { 
    let c = document.createElement('div')
    let container = document.getElementById('content')
    c.innerHTML = 'Welcome to the contact page'
    
    container.appendChild(c)    
}

export { contact }