let color = localStorage.getItem("color") || "dark";
let colorMode = true;

const lightMode = {
    navbarColorMode: "rgb(230,230,230)",
    backgroundImage: "url(\"../../images/light.png\")",
    navOptionText: "rgb(120,120,120)",
    navOptionTextHover: "rgb(90,90,90)",
    navTitleText: "rgb(50,50,50)",
    backgroundColor: "#509fae",
}

const darkMode = {
    navbarColorMode: "#141517",
    backgroundImage: "url(\"../../images/dark.jpg\")",
    navOptionText: "#adadad",
    navOptionTextHover: "rgb(240,240,240)",
    navTitleText: "rgb(240,240,240)",
    backgroundColor: "#00154b",
}

document.addEventListener('DOMContentLoaded', () => {
    const toggleBarAnimation = document.querySelector('#toggle-animation')
    const pageWrapper = document.getElementsByClassName('page-wrapper')[0];
    const background = document.getElementsByClassName('background-image')[0];

    toggleBarAnimation.addEventListener('click', function() {
        pageWrapper.classList.toggle('open');
    });

    window.addEventListener('scroll', () => {
        background.style.top = -window.pageYOffset * 0.3  + 'px';
    })

    if(color === "dark"){
        Object.keys(darkMode).forEach(property => {
            document.documentElement.style.setProperty("--" + property, darkMode[property]);
        })
    }
    if(color === "light"){
        Object.keys(lightMode).forEach(property => {
            document.documentElement.style.setProperty("--" + property, lightMode[property]);
        })
    }
});


function changeBackgroundColor(){
    colorMode = !colorMode;
    color = colorMode ? "dark" : "light";

    localStorage.setItem("color", color);

    if(color === "dark"){
        Object.keys(darkMode).forEach(property => {
            document.documentElement.style.setProperty("--" + property, darkMode[property]);
        })
    }
    if(color === "light"){
        Object.keys(lightMode).forEach(property => {
            document.documentElement.style.setProperty("--" + property, lightMode[property]);
        })
    }
}