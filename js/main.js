let togler = document.querySelector('.toggler');
let navbar = document.querySelector('.navbar');
let closed = document.querySelector('.close');

togler.onclick = function () {
  navbar.classList.add("open");
  closed.classList.remove('open');
};
closed.onclick =  () => {
  navbar.classList.remove('open');
};


// console.log(navbar);
