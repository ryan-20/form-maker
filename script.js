const iadd = () => {

    let type = document.querySelector('#type').value 
    let label = document.querySelector('#label').value 

    switch(type){
        case 'Text': appendText(label)
            break
        case 'Button': appendButton(label)
            break
        case 'Textfield': appendField(label)
            break
        case 'Password': appendPassword(label)
            break 
        case 'Email': appendEmail(label)
            break 
    }

}

const idelete = () => {

    let recent = display.lastElementChild;

    if (recent) {
      display.removeChild(recent);
    }

}


const appendText = (label = "Default") => {

    let elem = document.createElement('text')

    elem.setAttribute('class', 'form-control mt-2 text-start border-dark')
    elem.textContent = label

    document.querySelector('#display').append(elem)

}

const appendButton = (label = "Default") => {

    let elem = document.createElement('button')
 
    elem.setAttribute('class', 'btn btn-primary form-control mt-2')
    elem.textContent = label

    document.querySelector('#display').append(elem)

}

const appendField = (label = "Default") => {

    let elem = document.createElement('input')

    elem.setAttribute('placeholder', label)
    elem.setAttribute('class', 'form-control mt-2 border-dark')

    document.querySelector('#display').append(elem)

}

const appendPassword = (label = "Default") => {

    let elem = document.createElement('input')

    elem.setAttribute('placeholder', label)
    elem.setAttribute('class', 'form-control mt-2 rounded border-dark')
    elem.setAttribute('type', 'Password');

    document.querySelector('#display').append(elem)

}

const appendEmail = (label = "Default") => {

    let elem = document.createElement('input')

    elem.setAttribute('placeholder', label + '@email.com')
    elem.setAttribute('class', 'form-control mt-2 border-dark')
    elem.setAttribute('type', 'email');

    document.querySelector('#display').append(elem)

}