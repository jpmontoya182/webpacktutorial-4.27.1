import './style.css'
import Icon from './car.png'
import XmlData from './data.xml'

function component(){
    let element = document.createElement('div');
    element.innerHTML = 'Hello Webpack';
    element.classList.add('hello');

    var myIcon = new Image()
    myIcon.src = Icon

    element.appendChild(myIcon)

    console.log(XmlData)

    return element
}

document.body.appendChild(component());