import './styles.css'

const home = () => { 
    let content = document.getElementById('content')
    let main = document.createElement('div')
    let about = document.createElement('div')
    let hours = document.createElement('div')
    let location = document.createElement('div')
    let hours_dict = { 
        'Sunday': '6am-3pm',
        'Monday': '6am-3pm',
        'Tuesday': '6am-3pm',
        'Wednesday': '6am-3pm',
        'Thursday': '6am-3pm',
        'Friday': '6am-3pm',
        'Saturday': '6am-3pm'
    }
    main.classList.add('main')
    about.classList.add('item')
    hours.classList.add('item')
    location.classList.add('item') 
    
    about.innerHTML = 'This is a short paragraph about the restaurant.<br/>We cook food and stuff, which you can then eat.<br/>After paying for it.  Money first.<br/>'
    //hours.innerHTML = 'Sunday: 6am-3pm<br/>Monday: 6am-3pm<br/>Tuesday: 6am-3pm<br/>Wednesday: 6am-3pm<br/>Thursday: 6am-3pm<br/>Friday: 6am-3pm<br/>Saturday: 6am-3pm<br/>'
    location.innerHTML = '1234 Super Real Way, Legitland'
    content.appendChild(main) 
    main.appendChild(about)
    main.appendChild(hours)
    Object.keys(hours_dict).forEach((i) => { 
        let day = document.createElement('p')
        day.innerHTML = i + ': ' + hours_dict[i]
        hours.appendChild(day)
    })
    main.appendChild(location)
}

export { home }