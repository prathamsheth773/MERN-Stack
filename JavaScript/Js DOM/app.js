changeColor = ()=>{
    let titleElement = document.getElementById('title');
    titleElement.style.color = " white";
    titleElement.style.backgroundColor="blueviolet"
}
Yes = () =>{
    let title = document.getElementById('title');
    title.innerHTML= "Thanks For Joining!!"
    document.getElementById('Yes').style.display ="none"
    document.getElementById('No').style.display ="none"
}
No = () =>{
    let title = document.getElementById('title');
    title.innerHTML= "You Can Watch Recording"
    document.getElementById('Yes').style.display ='none';
    document.getElementById('No').style.display ='none';
}
get = () =>{
    let value = document.getElementById('value').value
    console.log(value )
}