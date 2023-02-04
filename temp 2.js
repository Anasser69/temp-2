let span=document.querySelector(".enter");

window.onscroll=function () {
    // console.log(this.scrollY);
    if( this.scrollY >= 500){
        span.classList.add("show");

    }
    else{
        span.classList.remove("show");
    }
};

let modetoggle=document.querySelector(".mode-tag");
let darkmode=document.querySelector(".dark-mode");

modetoggle.addEventListener('click',() => {
    darkmode.classList.toggle('active');
    modetoggle.classList.toggle('active');
})