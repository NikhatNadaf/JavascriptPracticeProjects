let btn=document.querySelector("button")

btn.addEventListener("click",()=>{
    let v1=document.querySelector("#input1").value;
    let v2=document.querySelector("#input2").value;
    let add=Number(v1)+Number(v2);
    document.querySelector("#add").innerText=add;
})