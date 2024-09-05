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


document.querySelector('#annual_service_wrap a').addEventListener('click', function(event) {
  event.preventDefault(); // prevent default anchor behavior
  const serviceContainer = document.querySelector('#serviceContainer');
  serviceContainer.scrollIntoView({ behavior: 'smooth' }); // scroll to the element
  annualMainContract.click(); // simulate a click on the <p> tag
});

document.querySelector('#pc_service_wrap a').addEventListener('click', function(event) {
  event.preventDefault(); // prevent default anchor behavior
  const serviceContainer = document.querySelector('#serviceContainer');
  serviceContainer.scrollIntoView({ behavior: 'smooth' }); // scroll to the element
  productCommissioning.click(); // simulate a click on the <p> tag
});

document.querySelector('#stc_service_wrap a').addEventListener('click', function(event) {
  event.preventDefault(); // prevent default anchor behavior
  const serviceContainer = document.querySelector('#serviceContainer');
  serviceContainer.scrollIntoView({ behavior: 'smooth' }); // scroll to the element
  siteCommissioning.click(); // simulate a click on the <p> tag
});

document.querySelector('#ass_service_wrap a').addEventListener('click', function(event) {
  event.preventDefault(); // prevent default anchor behavior
  const serviceContainer = document.querySelector('#serviceContainer');
  serviceContainer.scrollIntoView({ behavior: 'smooth' }); // scroll to the element
  afterSalesServices.click(); // simulate a click on the <p> tag
});

document.querySelector('#sd_service_wrap a').addEventListener('click', function(event) {
  event.preventDefault(); // prevent default anchor behavior
  const serviceContainer = document.querySelector('#serviceContainer');
  serviceContainer.scrollIntoView({ behavior: 'smooth' }); // scroll to the element
  designAndDevelopmenet.click(); // simulate a click on the <p> tag
});

document.querySelector('#rs_service_wrap a').addEventListener('click', function(event) {
  event.preventDefault(); // prevent default anchor behavior
  const serviceContainer = document.querySelector('#serviceContainer');
  serviceContainer.scrollIntoView({ behavior: 'smooth' }); // scroll to the element
  repairingServices.click(); // simulate a click on the <p> tag
});




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


const servicesContainer = document.querySelector('.services-container1');
const services = servicesContainer.querySelectorAll('p');
const leftBtn = document.querySelector('.left-btn1');
const rightBtn = document.querySelector('.right-btn1');


let currentIndex = 0;

leftBtn.addEventListener('click', () => {
  if (currentIndex !== 0) {
    currentIndex--;
    updateServices();
  }
});

rightBtn.addEventListener('click', () => {
  if (currentIndex !== services.length - 1) {
    currentIndex++;
    updateServices();
  }
});

function updateServices() {
  services.forEach((service, index) => {
    if (index >= currentIndex && index < currentIndex + 3) {
      service.style.display = 'block';
    } else {
      service.style.display = 'none';
    }
  });

  // Disable buttons when reaching the first or last index
  if (currentIndex === 0) {
    leftBtn.disabled = true;
    rightBtn.disabled = false;
  } else if (currentIndex === services.length - 3) {
    leftBtn.disabled = false;
    rightBtn.disabled = true;
  } else {
    leftBtn.disabled = false;
    rightBtn.disabled = false;
  }
}


updateServices();



  


