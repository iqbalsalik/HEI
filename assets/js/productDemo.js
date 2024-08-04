const wall_mounted_modules = document.getElementById("wall-mounted-modules");
const productList = document.getElementById("productListUl");
let children = productList.children;
const wallMountedContainer = document.getElementById("wallMountedContainer");
const productDetailsContainer = document.querySelector(".productDetailsContainer");
let productDetailsChildren = productDetailsContainer.children;
const singleDriveModules = document.getElementById("singleDriveModules");
const single_drive_modules = document.getElementById("single_drive_modules");
const high_power_single_drive = document.getElementById("high_power_single_drive");
const regenerative_single_drive = document.getElementById("regenerative_single_drive");
const regerative_single_drive_filter = document.getElementById("regerative_single_drive_filter");
const r_ultra_low_harmonic = document.getElementById("r_ultra_low_harmonic");
const ultra_low_harmonic = document.getElementById("ultra_low_harmonic");

wall_mounted_modules.addEventListener("click",()=>{

    for(let i = 0;i<children.length;i++){
        children[i].classList.remove('active')
    }
    wall_mounted_modules.classList.add("active");
    for(let i = 0;i<productDetailsChildren.length;i++){
        productDetailsChildren[i].classList.add("displayNone")
        productDetailsChildren[i].classList.remove("displayBlock")
    }
    wallMountedContainer.classList.remove("displayNone")
    wallMountedContainer.classList.add("displayBlock")

})

single_drive_modules.addEventListener("click",()=>{
    for(let i = 0;i<children.length;i++){
        children[i].classList.remove('active')
    }
    single_drive_modules.classList.add("active");
    for(let i = 0;i<productDetailsChildren.length;i++){
        productDetailsChildren[i].classList.add("displayNone")
        productDetailsChildren[i].classList.remove("displayBlock")
    }
    singleDriveModules.classList.remove("displayNone")
    singleDriveModules.classList.add("displayBlock")
})

high_power_single_drive.addEventListener("click",()=>{
    for(let i = 0;i<children.length;i++){
        children[i].classList.remove('active')
    }
    high_power_single_drive.classList.add("active");
    for(let i = 0;i<productDetailsChildren.length;i++){
        productDetailsChildren[i].classList.add("displayNone")
        productDetailsChildren[i].classList.remove("displayBlock")
    }
    const highPowerSingleDrive = document.getElementById("highPowerSingleDrive")
    highPowerSingleDrive.classList.remove("displayNone")
    highPowerSingleDrive.classList.add("displayBlock")
})

regenerative_single_drive.addEventListener("click",()=>{
    for(let i = 0;i<children.length;i++){
        children[i].classList.remove('active')
    }
    regenerative_single_drive.classList.add("active");
    for(let i = 0;i<productDetailsChildren.length;i++){
        productDetailsChildren[i].classList.add("displayNone")
        productDetailsChildren[i].classList.remove("displayBlock")
    }
    const RegenerativeSingleDrive = document.getElementById("RegenerativeSingleDrive")
    RegenerativeSingleDrive.classList.remove("displayNone")
    RegenerativeSingleDrive.classList.add("displayBlock")
})

regerative_single_drive_filter.addEventListener("click",()=>{
    for(let i = 0;i<children.length;i++){
        children[i].classList.remove('active')
    }
    regerative_single_drive_filter.classList.add("active");
    for(let i = 0;i<productDetailsChildren.length;i++){
        productDetailsChildren[i].classList.add("displayNone")
        productDetailsChildren[i].classList.remove("displayBlock")
    }
    const RegenerativeSingleDriveFilter = document.getElementById("RegenerativeSingleDriveFilter")
    RegenerativeSingleDriveFilter.classList.remove("displayNone")
    RegenerativeSingleDriveFilter.classList.add("displayBlock")
})

r_ultra_low_harmonic.addEventListener("click",()=>{
    for(let i = 0;i<children.length;i++){
        children[i].classList.remove('active')
    }
    r_ultra_low_harmonic.classList.add("active");
    for(let i = 0;i<productDetailsChildren.length;i++){
        productDetailsChildren[i].classList.add("displayNone")
        productDetailsChildren[i].classList.remove("displayBlock")
    }
    const rUltraLowHarmonic = document.getElementById("rUltraLowHarmonic")
    rUltraLowHarmonic.classList.remove("displayNone")
    rUltraLowHarmonic.classList.add("displayBlock")
})

ultra_low_harmonic.addEventListener("click",()=>{
    for(let i = 0;i<children.length;i++){
        children[i].classList.remove('active')
    }
    ultra_low_harmonic.classList.add("active");
    for(let i = 0;i<productDetailsChildren.length;i++){
        productDetailsChildren[i].classList.add("displayNone")
        productDetailsChildren[i].classList.remove("displayBlock")
    }
    const ultraLowHarmonic = document.getElementById("ultraLowHarmonic")
    ultraLowHarmonic.classList.remove("displayNone")
    ultraLowHarmonic.classList.add("displayBlock")
})

// const element1 = document.querySelector('.productImageContainer');
// const element2 = document.querySelector(".productDescriptonContainer")

// window.addEventListener('scroll', () => {
//     if (window.scrollY > 500) { 
//       element1.classList.add('active1');
//     } else {
//       element1.classList.remove('active1');
//     }
//   });

//   window.addEventListener('scroll', () => {
//     if (window.scrollY > 500) { 
//       element2.classList.add('active1');
//     } else {
//       element2.classList.remove('active1');
//     }
//   });
