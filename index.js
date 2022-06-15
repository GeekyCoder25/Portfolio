let width = screen.width;
let navbar = document.getElementsByTagName('nav');
let lio = document.getElementsByClassName('lio');
let hire = document.getElementsByClassName('hire');
let whatsapp = document.getElementsByClassName('fa-whatsapp')
let arrowup = document.getElementsByClassName('fa-angle-up')
let navlinks = document.getElementById('navlinks')
let links = document.getElementsByClassName('links')
let menu = document.getElementsByClassName('fa-bars')
let close = document.getElementsByClassName('fa-xmark');

window.onload = function () {
    console.log(width)
    if (width <= 768) {
        links[0].addEventListener('click', () => {
            navlinks.style.display = "none";
            close[0].style.display = "none";
            menu[0].style.display = "block";
        })
        links[1].addEventListener('click', () => {
            navlinks.style.display = "none";
            close[0].style.display = "none";
            menu[0].style.display = "block";

        })
        links[2].addEventListener('click', () => {
            navlinks.style.display = "none";
            close[0].style.display = "none";
            menu[0].style.display = "block";

        })
        links[3].addEventListener('click', () => {
            navlinks.style.display = "none";
            close[0].style.display = "none";
            menu[0].style.display = "block";
        })
        links[4].addEventListener('click', () => {
            navlinks.style.display = "none";
            close[0].style.display = "none";
            menu[0].style.display = "block";

        })
        links[5].addEventListener('click', () => {
            navlinks.style.display = "none";
            close[0].style.display = "none";
            menu[0].style.display = "block";
        })
    }
}
window.onresize = () => {
    if (width > 768){
        location.reload()
    } 
}
window.addEventListener('scroll', () => {
    if (window.scrollY > 100 && width < 481) {
        navbar[0].style.padding = "15px";
        navbar[0].style.background = "green";
        lio[0].style.color = "white";
    }
    else if (window.scrollY > 100 && width <= 768 && width > 481) {
        navbar[0].style.padding = "15px 30px";
        navbar[0].style.background = "green";
        lio[0].style.color = "white";

    }
    else if (window.scrollY > 100 && width > 768) {
        navbar[0].style.background = "green";
        navbar[0].style.padding = "15px 50px";
        lio[0].style.color = "white";
        links[0].addEventListener('mouseover', () => {
            links[0].style.color = "white"
        }) 
        links[1].addEventListener('mouseover', () => {
            links[1].style.color = "white"
        }) 
        links[2].addEventListener('mouseover', () => {
            links[2].style.color = "white"
        }) 
        links[3].addEventListener('mouseover', () => {
            links[3].style.color = "white"
        }) 
        links[4].addEventListener('mouseover', () => {
            links[4].style.color = "white"
        }) 
        links[5].addEventListener('mouseover', () => {
            links[5].style.color = "white"
        }) 
    }
    else if (window.scrollY < 100 && width <= 768) {
        navbar[0].style.background = "none";
        navbar[0].style.padding = "15px`";
        lio[0].style.color = "rgb(15, 179, 56)"
    }
    else if (window.scrollY < 100 && width > 768) {
        navbar[0].style.background = "none";
        navbar[0].style.padding = "30px 50px";
        lio[0].style.color = "rgb(15, 179, 56)" 
        links[0].addEventListener('mouseover', () => {
            links[0].style.color = "rgb(15, 179, 56)"
        })
        links[1].addEventListener('mouseover', () => {
            links[1].style.color = "rgb(15, 179, 56)"
        })
        links[2].addEventListener('mouseover', () => {
            links[2].style.color = "rgb(15, 179, 56)"
        })
        links[3].addEventListener('mouseover', () => {
            links[3].style.color = "rgb(15, 179, 56)"
        })
        links[4].addEventListener('mouseover', () => {
            links[4].style.color = "rgb(15, 179, 56)"
        })
        links[5].addEventListener('mouseover', () => {
            links[5].style.color = "rgb(15, 179, 56)"
        })
        links[0].addEventListener('mouseleave', () => {
            links[0].style.color = "white"
        })
        links[1].addEventListener('mouseleave', () => {
            links[1].style.color = "white"
        })
        links[2].addEventListener('mouseleave', () => {
            links[2].style.color = "white"
        })
        links[3].addEventListener('mouseleave', () => {
            links[3].style.color = "white"
        })
        links[4].addEventListener('mouseleave', () => {
            links[4].style.color = "white"
        })
        links[5].addEventListener('mouseleave', () => {
            links[5].style.color = "white"
        })  
    }
    else {
        navbar[0].style.padding = "15px";
        navbar[0].style.background = "none";
    }
    if (window.scrollY > 500) {
        hire[0].style.display = "none";
        whatsapp[0].style.display = "block";
    }
    else {
        hire[0].style.display = "unset";
        whatsapp[0].style.display = "none";
    }
    // if (window.scrollY > 3500){
    //     alert('You amazed right? \n Help me my dropping a token in my account \n 2123503170 \n United Bank of Africa');
    // }
    window.scrollY >= screen.availHeight ? arrowup[0].style.display = "block" : arrowup[0].style.display = "none";

})


function pressMenu() {
    navlinks.style.display = "block";
    close[0].style.display = "block";
    menu[0].style.display = "none";
}
function pressClose() {
    navlinks.style.display = "none";
    close[0].style.display = "none";
    menu[0].style.display = "block";
}