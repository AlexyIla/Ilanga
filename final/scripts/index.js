//  ---   Language Handler  ---
const params = new URLSearchParams(window.location.search);
if (params.has("lang")) {
const language = params.get("lang");
document
    .getElementById("language")
    .querySelectorAll("option")
    .forEach((item) => {
    if (item.value == language) {
        item.selected = true;
    } else {
        item.selected = false;
    }
    });
}

//  ---   Hamburger Menu Handler  ---
function disableScroll() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function() {};
}

const header = document.querySelector('header');

function showHamburgerMenu(){
    disableScroll()

    header.classList.remove('hideMenu')
    header.classList.add('showMenu')
}
function hideHamburgerMenu(){
    enableScroll()
    header.classList.remove('showMenu')
    header.classList.add('hideMenu')
}

const hamburgerBtn = document.getElementById('hamburger');

hamburgerBtn.addEventListener('click', () => {
    if (header.classList.contains('hideMenu')){
        showHamburgerMenu()
    }else{
        hideHamburgerMenu()
    }
});

function addValueToProduct(el){
    const input = el.parentNode.parentNode.querySelector('input');
    if(input.value < input.max){
        input.value = parseInt(input.value) + 1;
    }
}
function subValueToProduct(el){
    const input = el.parentNode.parentNode.querySelector('input');
    if(input.value > input.min){
        input.value = parseInt(input.value) - 1;
    }
}

window.addEventListener("scroll", function(event) {
    let top = this.scrollY;
    const header = document.querySelector('header');
    const scrollToTop = this.document.getElementById('scrollToTop');
    if (top > 300){
        scrollToTop.classList.remove('hide')
    }else{
        scrollToTop.classList.add('hide')
    }
    if(top > 50){
        header.classList.add('mini')
    }
     else{
        header.classList.remove('mini')
    }
});

//  ---   IntersectionObserver  ---
var numSteps = 100.0;

window.addEventListener("load", function(event) {
    boxElement = document.querySelectorAll(".animation-item");

    createObserver();
    }, false);


function createObserver() {
  var observer;

  var options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList()
  };

  observer = new IntersectionObserver(handleIntersect, options);
  boxElement.forEach(element => {
      observer.observe(element);
  });
}

function buildThresholdList() {
    var thresholds = [];
  
    for (var i=1.0; i<=numSteps; i++) {
      var ratio = i/numSteps;
      thresholds.push(ratio);
    }
  
    thresholds.push(0);
    return thresholds;
  }

  function handleIntersect(entries, observer) {
    entries.forEach(function(entry) {
        value =  entry.intersectionRatio
        if(value >= 0.2){
          entry.target.classList.add("wasInView");
        }
    });
  }