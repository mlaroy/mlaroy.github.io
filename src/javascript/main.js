const app = (function(options = {}) {

  const defaults = {
    navEl: '.main-nav',
    scrollThreshold: 300,
    scrollClass: 'scrolled',
  }

  const actual = Object.assign({}, defaults, options);

  const navEl = document.querySelector(actual.navEl);

  const init = function() {
    console.log('init');

    // init nav scroll method
    doNav();
    getCurrentYear();
  }

  const doNav = function() {
    window.addEventListener('scroll', scrollHandler)
  }

  const scrollHandler = function(e) {
    // console.log(e);
    if(window.pageYOffset > actual.scrollThreshold) {
      navEl.classList.add(actual.scrollClass);
    }else{
      navEl.classList.remove(actual.scrollClass);
    }
  }

  const getCurrentYear = function() {
    const footerEl = document.getElementById('year');
    const date = new Date();
    footerEl.innerHTML = date.getFullYear();
  }

  return {
    init: init
  }
})();

export default app;