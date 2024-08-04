const sales = document.getElementById("sales");
const services = document.getElementById("services");
const engineering = document.getElementById("engineering");
const rAndD = document.getElementById("r&d");
const hr = document.getElementById('hr');
const li = document.getElementById('RolesUl').children;
const allDescContainer = document.querySelector(".allDescContainer").children;


sales.addEventListener("click",()=>{
    for(let i = 0;i<li.length;i++){
        li[i].classList.remove('active')
    }
    sales.classList.add('active')
    for(let i = 0;i<allDescContainer.length;i++){
        allDescContainer[i].classList.remove('displayFlex');
        allDescContainer[i].classList.add("displayNone")
    }
    const salesDesc = document.getElementById("salesDesc");
    salesDesc.classList.remove("displayNone");
    salesDesc.classList.add("displayFlex")
})

services.addEventListener("click",()=>{
    for(let i = 0;i<li.length;i++){
        li[i].classList.remove('active')
    }
    services.classList.add('active')
    for(let i = 0;i<allDescContainer.length;i++){
        allDescContainer[i].classList.remove('displayFlex');
        allDescContainer[i].classList.add("displayNone")
    }
    const serviceDesc = document.getElementById("serviceDesc");
    serviceDesc.classList.remove("displayNone");
    serviceDesc.classList.add("displayFlex")
})

engineering.addEventListener("click",()=>{
    for(let i = 0;i<li.length;i++){
        li[i].classList.remove('active')
    }
    engineering.classList.add('active')
    for(let i = 0;i<allDescContainer.length;i++){
        allDescContainer[i].classList.remove('displayFlex');
        allDescContainer[i].classList.add("displayNone")
    }
    const EngineeringDesc = document.getElementById("EngineeringDesc");
    EngineeringDesc.classList.remove("displayNone");
    EngineeringDesc.classList.add("displayFlex")
})

rAndD.addEventListener("click",()=>{
    for(let i = 0;i<li.length;i++){
        li[i].classList.remove('active')
    }
    rAndD.classList.add('active')
    for(let i = 0;i<allDescContainer.length;i++){
        allDescContainer[i].classList.remove('displayFlex');
        allDescContainer[i].classList.add("displayNone")
    }
    const rAndDDesc = document.getElementById("r&dDesc");
    rAndDDesc.classList.remove("displayNone");
    rAndDDesc.classList.add("displayFlex")
})

hr.addEventListener("click",()=>{
    for(let i = 0;i<li.length;i++){
        li[i].classList.remove('active')
    }
    hr.classList.add('active')
    for(let i = 0;i<allDescContainer.length;i++){
        allDescContainer[i].classList.remove('displayFlex');
        allDescContainer[i].classList.add("displayNone")
    }
    const hrDesc = document.getElementById("hrDesc");
    hrDesc.classList.remove("displayNone");
    hrDesc.classList.add("displayFlex")
})