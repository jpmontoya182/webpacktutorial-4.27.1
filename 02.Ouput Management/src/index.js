import printMe from './print'

function component(){
    let element = document.createElement('div');
    let btn = document.createElement('button')

    element.innerHTML = 'Hello Webpack <br>';   
    btn.innerHTML = 'Click me and check the console'
    btn.onclick = printMe;

    element.appendChild(btn);

    return element
}

document.body.appendChild(component());