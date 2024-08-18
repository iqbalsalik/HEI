const serviceCategories = document.querySelectorAll('.allServicesCategory p');
const annualMainContract = document.getElementById("annualMainContract");
const serviceDescContainer = document.querySelector(".serviceDescContainer");
const productCommissioning = document.getElementById("productCommissioning");
const siteCommissioning = document.getElementById("siteCommissioning");
const afterSalesServices = document.getElementById("afterSalesServices");
const repairingServices = document.getElementById("repairingServices");
const designAndDevelopmenet = document.getElementById("designAndDevelopmenet");
// const annualMcA = document.getElementById("annualMcA");
// const productCmssA = document.getElementById("productCmssA");



serviceCategories.forEach((category) => {
  category.addEventListener('click', () => {
    serviceCategories.forEach((otherCategory) => {
      otherCategory.classList.remove('active');
    });
    category.classList.add('active');
  });
});

annualMainContract.addEventListener("click",()=>{
    const children = serviceDescContainer.children;
    for(let i = 0;i<children.length;i++){
        children[i].classList.add("displayNone")
        children[i].classList.remove("displayBlock")
    }
    const annulaMainContractDesc = document.getElementById("annualMC");
    annulaMainContractDesc.classList.add("displayBlock")
})

productCommissioning.addEventListener("click",()=>{
    const children = serviceDescContainer.children;
    for(let i = 0;i<children.length;i++){
        children[i].classList.add("displayNone")
        children[i].classList.remove("displayBlock")
    }
    const productCmss = document.getElementById('productCmss')
    productCmss.classList.add("displayBlock")
})

siteCommissioning.addEventListener("click",()=>{
    const children = serviceDescContainer.children;
    for(let i = 0;i<children.length;i++){
        children[i].classList.add("displayNone")
        children[i].classList.remove("displayBlock")
    }
    const SiteCommsning = document.getElementById("SiteCommsning")
    SiteCommsning.classList.add("displayBlock")
})

afterSalesServices.addEventListener("click",()=>{
    const children = serviceDescContainer.children;
    for(let i = 0;i<children.length;i++){
        children[i].classList.add("displayNone")
        children[i].classList.remove("displayBlock")
    }
    const afterSServices = document.getElementById("afterSServices");
    afterSServices.classList.add("displayBlock")
})

repairingServices.addEventListener("click",()=>{
    const children = serviceDescContainer.children;
    for(let i = 0;i<children.length;i++){
        children[i].classList.add("displayNone")
        children[i].classList.remove("displayBlock")
    }
    const repairingS = document.getElementById("repairingS");
    repairingS.classList.add("displayBlock")
})

designAndDevelopmenet.addEventListener("click",()=>{
    const children = serviceDescContainer.children;
    for(let i = 0;i<children.length;i++){
        children[i].classList.add("displayNone")
        children[i].classList.remove("displayBlock")
    }
    const dndevlopment = document.getElementById("dndevlopment");
    dndevlopment.classList.add("displayBlock")
})

