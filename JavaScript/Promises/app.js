// console.log("Downloading...")
// setTimeout(()=>{
//     console.log("Image Downloaded!")
// },3000)
// console.log("Image is Processed!")

// let promise = new Promise((resolve,reject)=>{
//     resolve();
//     // reject();
// })
// promise.then(()=>{
//     console.log("Task completed")
// }).catch(()=>{
//     console.log("Something Went Wrong")
// })

// console.log("Downloading....")
// let taskA = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Image Downloaded!")
//         resolve()
//     },3000)
// })

// taskA.then(()=>{
//     console.log("Image is Processed!")
// }).catch(()=>{
//     console.log("Error in Image Download");
// })
qoutes = () =>{

let random = Math.floor(Math.random()*16)
fetch("https://type.fit/api/quotes")
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data)
    let qouteContainer = document.getElementById('quoteContainer')
    qouteContainer.innerHTML = ""
    qouteContainer.classList.remove('d-none')
    let h2 = document.createElement('h2')
    let p = document.createElement('p')
    h2.innerHTML = data[random].text
    p.innerHTML =  data[random].author
    qouteContainer.appendChild(h2)
    qouteContainer.appendChild(p)
    p.classList.add('author')
})
}

