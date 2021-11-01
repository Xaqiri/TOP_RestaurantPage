const contact = () => { 
    let content = document.getElementById('content')
    let main = document.createElement('div')
    let contact_item = document.createElement('div')

    main.classList.add('main')
    contact_item.classList.add('item')
    
    contact_item.innerHTML = 'Soon to be populated with all contact items!'

    content.appendChild(main) 
    main.appendChild(contact_item)
}

export { contact }