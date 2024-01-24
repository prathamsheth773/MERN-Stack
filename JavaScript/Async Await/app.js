processVideo = () =>{
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve('video proceess')
        },2000)
    })
}
// processVideo.then()

async function callProcessVideo(){
    console.log('Video Processing started')
    let result = await processVideo();
    console.log(result);
}
callProcessVideo();