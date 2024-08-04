const element1 = document.querySelector('.imgContainer');
const element2 = document.querySelector(".descContainer");
const element3 = document.querySelector(".seconImageContainer");
const element4 = document.querySelector(".desc");

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) { 
    element1.classList.add('active1');
  } else {
    element1.classList.remove('active1');
  }
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) { 
      element2.classList.add('active1');
    } else {
      element2.classList.remove('active1');
    }
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 1500) { 
      element3.classList.add('active1');
    } else {
      element3.classList.remove('active1');
    }
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 1500) { 
      element4.classList.add('active1');
    } else {
      element4.classList.remove('active1');
    }
  });