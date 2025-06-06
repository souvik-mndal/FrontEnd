function pro(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("holaa");
        },8000);
    })
}
async function fun1(){
    console.log("start");
    let x = await pro();
    console.log("end");
    return x;
    
}
fun1().then((d)=>{
    console.log("the d ",d);
})