let users = [];
register = () =>{
    let tmepName = document.getElementById('name').value;
    let tempEmail = document.getElementById('email').value;
    let userCount = users.filter((x)=>{
        return x.email == tempEmail;
    })
    if(userCount.length == 0){
        let user = {
            name: tmepName,
            email: tempEmail,
        }
        users.push(user)
    }
    else{
        alert("User already exists")
    }
    console.log(users)
    document.getElementById('name').value ="";
    document.getElementById('email').value ="";
    let container = document.getElementById('userContainer');
    container.innerHTML = "";
    users.map((user)=>{
        let div = document.createElement('div');
        div.classList.add('user-card')
        let name = document.createElement('h4');
        let email = document.createElement('p');
        name.innerHTML = user.name;
        email.innerHTML = user.email;
        container.appendChild(div);
        div.appendChild(name);
        div.appendChild(email);
    })
}
function checkEmail() {
    let tempEmail = document.getElementById('email').value;

    let emailExist = users.filter((user)=>{
        return user.email == tempEmail
    })
    let alert = documnet.getElementById('alert');
    if(emailExist.length == 0){
        alert.classList.add('d-none');
        alert.classList.remove('danger')
    }
    else{
        alert.classList.remove('d-none');
        alert.classList.add('danger')
    }
}