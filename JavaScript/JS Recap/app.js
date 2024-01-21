name = () =>{
    let name = document.getElementById('name').value
    console.log(name) 
}

createBox = () =>{
    let container = document.getElementById('container');
    let box = document.createElement('div')
    box.classList.add('box');
    container.appendChild(box);
}