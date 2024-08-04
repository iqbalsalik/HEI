const element1 = document.querySelector(".descContainer");
const element2 = document.querySelector(".imageContainer");
const element3 = document.querySelector(".thirdInfoContainer");
const element4 = document.querySelector(".imageContainer1");



window.addEventListener('scroll', () => {
    if (window.scrollY > 600) { 
      element1.classList.add('active1');
    } else {
      element1.classList.remove('active1');
    }
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) { 
      element2.classList.add('active1');
    } else {
      element2.classList.remove('active1');
    }
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 1200) { 
      element3.classList.add('active1');
    } else {
      element3.classList.remove('active1');
    }
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 1200) { 
      element4.classList.add('active1');
    } else {
      element4.classList.remove('active1');
    }
  });

