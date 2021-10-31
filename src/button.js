class Button { 
    constructor(name) { 
        this.name = name
        this.element = document.createElement('button')
        this.element.innerHTML = this.name
    }
}

export {Button}